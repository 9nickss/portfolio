import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { useState, useRef } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import emailjs from '@emailjs/browser'
import { GlowBackground } from './GlowBackground'

const EMAILJS_SERVICE_ID  = 'service_jx8q4vm'
const EMAILJS_TEMPLATE_ID = 'template_kktcphg'
const EMAILJS_PUBLIC_KEY  = 'QVorwY3DIPk-MwPW0'
const COOLDOWN_MS = 60_000

function SocialLink({ href, icon: Icon, label, subtitle }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-3 hover:bg-neutral-700 transition-colors"
        >
            <Icon size={20} />
            <div>
                <p className="text-sm text-white">{label}</p>
                <p className="text-xs text-gray-500">{subtitle}</p>
            </div>
            <span className="ml-auto text-gray-600">↗</span>
        </a>
    )
}

function ContactLinks() {
    const links = [
        {
            href: 'https://github.com/9nickss',
            icon: FaGithub,
            label: 'GitHub',
            subtitle: 'github.com/9nickss',
        },
        {
            href: 'https://www.linkedin.com/in/yannick-kahl-782782336/',
            icon: FaLinkedin,
            label: 'LinkedIn',
            subtitle: 'Yannick Kahl',
        },
        {
            href: 'mailto:yannickkahl@outlook.fr',
            icon: MdEmail,
            label: 'Email',
            subtitle: 'yannickkahl@outlook.fr',
        },
    ]

    return (
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 flex flex-col gap-6">
            <span className="text-xs bg-indigo-950 text-indigo-400 border border-indigo-800 px-3 py-1 rounded-full w-fit">
                available for internship / part-time
            </span>
            <h3 className="text-xl font-bold">Yannick Kahl</h3>
            <div className="flex flex-col gap-3">
                {links.map((link) => (
                    <SocialLink key={link.label} {...link} />
                ))}
            </div>
        </div>
    )
}

function ContactForm() {
    const formRef = useRef()
    const [status, setStatus] = useState('idle')

    const handleSubmit = async (e) => {
        e.preventDefault()

        const lastSent = localStorage.getItem('lastSent')
        const now = Date.now()

        if (lastSent && now - lastSent < COOLDOWN_MS) {
            const secondsLeft = Math.ceil((COOLDOWN_MS - (now - lastSent)) / 1000)
            setStatus(`wait:${secondsLeft}`)
            return
        }

        setStatus('sending')
        try {
            await emailjs.sendForm(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                formRef.current,
                EMAILJS_PUBLIC_KEY
            )
            localStorage.setItem('lastSent', now)
            setStatus('sent')
        } catch (err) {
            console.error(err)
            setStatus('error')
        }
    }

    const buttonLabel =  status.startsWith('wait:')
    ? `Please wait ${status.split(':')[1]}s` : 
    {
        idle:    'Send',
        sending: 'Sending...',
        sent:    'Sent ✓',
        error:   'Try again',
    }[status]

    const inputClass = "bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-neutral-600"

    return (
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 flex flex-col gap-4">
            <h3 className="text-xl font-bold">Send me a message!</h3>
            <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input      name="from_name" type="text"  placeholder="Name"    required className={inputClass} />
                <input      name="reply_to"  type="email" placeholder="Email"   required className={inputClass} />
                <textarea   name="message"               placeholder="Message" required rows={5} className={`${inputClass} resize-none`} />
                <button
                    type="submit"
                    disabled={status === 'sending' || status === 'sent'}
                    className="border border-white rounded-full py-3 hover:bg-white hover:text-black transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {buttonLabel}
                </button>
                {status === 'error' && (
                    <p className="text-red-400 text-xs text-center">Something went wrong. Please try again.</p>
                )}
            </form>
        </div>
    )
}

function Contact() {
    const navigate = useNavigate()
    const location = useLocation()

    const scrollTo = (id) => async (e) => {
        e.preventDefault()
        if (location.pathname !== '/') {
            navigate('/', { replace: false })
            setTimeout(() => {
                const element = document.getElementById(id)
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' })
                }
            }, 200)
        } else {
            const element = document.getElementById(id)
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' })
            }
        }
    }

    return (
        <GlowBackground>
            <section id="contact" className="min-h-screen px-16 py-20">
            <a href="#projects" onClick={scrollTo('projects')} className="flex flex-col items-center gap-1.5 mb-12 text-gray-700 hover:text-gray-400 transition-colors">
                <div className="w-px h-8 bg-gradient-to-t from-gray-700 to-transparent" />
                <span className="text-xs tracking-widest uppercase">projects</span>
            </a>
            <h2 className="text-5xl font-bold mb-12">Contact</h2>
            <div className="grid grid-cols-2 gap-8">
                <ContactLinks />
                <ContactForm />
            </div>
            </section>
        </GlowBackground>
    )
}

export default Contact
