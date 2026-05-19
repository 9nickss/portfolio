import { useEffect, useState } from 'react'

const subtitles = [
    'C / C++ / Rust Developer',
    'Second year EPITECH Nice student',
    'Getting into cybersecurity',
    'Have a look at my projects ↓',
]

export default function Hero() {
    const [displayed, setDisplayed] = useState('')
    const [index, setIndex] = useState(0)
    const [deleting, setDeleting] = useState(false)

    useEffect(() => {
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
    }, [displayed, index, deleting])

    return (
        <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">

            {/* grid background */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0"
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
                    `,
                    backgroundSize: '60px 60px',
                }}
            />

            {/* radial glow */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0"
                style={{
                    background: 'radial-gradient(ellipse 60% 50% at 50% 40%, rgba(99,102,241,0.12) 0%, transparent 70%)',
                }}
            />

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
                    Yannick
                    <br />
                    <span style={{ color: 'rgba(255,255,255,0.35)' }}>Kahl</span>
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
                        className="px-6 py-2.5 rounded-full bg-white text-black text-sm font-medium hover:bg-gray-200 transition-colors"
                    >
                        See my projects
                    </a>
                    <a
                        href="#contact"
                        className="px-6 py-2.5 rounded-full border border-white/15 text-sm text-gray-300 hover:border-white/30 hover:text-white transition-colors"
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
    )
}