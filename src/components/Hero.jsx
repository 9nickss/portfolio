import { useEffect, useState } from 'react'
import { GlowBackground } from './GlowBackground'

const subtitles = [
    'C / C++ / Rust Developer',
    'Second year EPITECH Nice student',
    'Getting into cybersecurity',
    'Have a look at my projects ↓',
]

export default function Hero() {
    const [displayedName, setDisplayedName] = useState('')
    const [displayedLastName, setDisplayedLastName] = useState('')
    const [displayed, setDisplayed] = useState('')
    const [index, setIndex] = useState(0)
    const [deleting, setDeleting] = useState(false)
    const [nameComplete, setNameComplete] = useState(false)
    const [lastNameComplete, setLastNameComplete] = useState(false)

    const firstName = 'Yannick'
    const lastName = 'Kahl'
    
    const scrollTo = (id) => (e) => {
        e.preventDefault()
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    useEffect(() => {
        // First, type out first name
        if (!nameComplete) {
            if (displayedName === firstName) {
                setNameComplete(true)
                return
            }
            
            const id = setTimeout(() => {
                setDisplayedName(firstName.slice(0, displayedName.length + 1))
            }, 120)
            return () => clearTimeout(id)
        }

        // Then, type out last name
        if (!lastNameComplete) {
            if (displayedLastName === lastName) {
                setLastNameComplete(true)
                return
            }
            
            const id = setTimeout(() => {
                setDisplayedLastName(lastName.slice(0, displayedLastName.length + 1))
            }, 120)
            return () => clearTimeout(id)
        }

        // Finally, type out the subtitles
        const current = subtitles[index]
        const isFull = displayed === current
        const isEmpty = displayed === ''

        let id
        if (isFull && !deleting) {
            id = setTimeout(() => setDeleting(true), 1200)
        } else if (isEmpty && deleting) {
            id = setTimeout(() => {
                setDeleting(false)
                setIndex(i => (i + 1) % subtitles.length)
            }, 300)
        } else {
            id = setTimeout(() => {
                setDisplayed(deleting
                    ? current.slice(0, displayed.length - 1)
                    : current.slice(0, displayed.length + 1)
                )
            }, deleting ? 45 : 70)
        }
        return () => clearTimeout(id)
    }, [displayed, index, deleting, displayedName, nameComplete, displayedLastName, lastNameComplete])

    return (
        <GlowBackground>
            <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">

                {/* content */}
                <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl mx-auto">

                {/* badge */}
                <a
                    href="https://github.com/9nickss"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 mb-10 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs text-gray-400 hover:border-white/20 hover:text-white transition-colors"
                >
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
                    Available for internship · Open to opportunities
                    <span className="text-gray-600">→</span>
                </a>

                {/* headline */}
                <h1
                    className="font-bold tracking-tight leading-none mb-6"
                    style={{
                        fontSize: 'clamp(3.5rem, 9vw, 7.5rem)',
                        letterSpacing: '-0.03em',
                    }}
                >
                    {displayedName}
                    <br />
                    <span style={{ color: 'rgba(255,255,255,0.35)' }}>
                        {displayedLastName}
                    </span>
                </h1>

                {/* typewriter subtitle */}
                <p
                    className="text-base text-gray-500 mb-10 min-h-6 font-mono tracking-wide"
                >
                    {displayed}
                    <span
                        aria-hidden="true"
                        className="inline-block w-0.5 h-4 bg-indigo-400 ml-0.5 align-middle animate-[blink_1s_steps(1)_infinite]"
                    />
                </p>

                {/* CTAs */}
                <div className="flex items-center gap-3 flex-wrap justify-center">
                    <a
                        href="#projects"
                        onClick={scrollTo('projects')}
                        className="px-6 py-2.5 rounded-full bg-white text-black text-sm font-medium hover:bg-gray-200 transition-colors cursor-pointer"
                    >
                        See my projects
                    </a>
                    <a
                        href="#contact"
                        onClick={scrollTo('contact')}
                        className="px-6 py-2.5 rounded-full border border-white/15 text-sm text-gray-300 hover:border-white/30 hover:text-white transition-colors cursor-pointer"
                    >
                        Contact me
                    </a>
                </div>
            </div>

            {/* bottom fade */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute bottom-0 inset-x-0 h-40"
                style={{ background: 'linear-gradient(to bottom, transparent, #000)' }}
            />

            {/* scroll indicator */}
            <a href="#projects"
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-gray-700 hover:text-gray-400 transition-colors">
                <span className="text-xs tracking-widest uppercase">projects</span>
                <div className="w-px h-8 bg-gradient-to-b from-gray-700 to-transparent" />
            </a>

            </section>
        </GlowBackground>
    )
}
