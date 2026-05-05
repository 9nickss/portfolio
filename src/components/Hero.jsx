import { useEffect, useState } from 'react'

function Hero() {
    const fullName = 'Yannick Kahl'
    const subtitles = [
        'Second year EPITECH Nice student',
        'C / C++ / Rust Developper',
        'Getting into the world of cybersecurity',
        'Have a look at my projects below',
    ]

    const [displayedName, setDisplayedName] = useState('')

    const [displayedSubtitle, setDisplayedSubtitle] = useState('')
    const [subtitleIndex, setSubtitleIndex] = useState(0)
    const [isDeletingSubtitle, setIsDeletingSubtitle] = useState(false)

    useEffect(() => {
        if (displayedName === fullName) return

        const id = setTimeout(() => {
            setDisplayedName(fullName.slice(0, displayedName.length + 1))
        }, 100)

        return () => clearTimeout(id)
    }, [displayedName, fullName])

    useEffect(() => {
        if (displayedName !== fullName) return

        const current = subtitles[subtitleIndex]
        const isFull = displayedSubtitle === current
        const isEmpty = displayedSubtitle === ''

        let id

        if (isFull && !isDeletingSubtitle) {
            id = setTimeout(() => setIsDeletingSubtitle(true), 900)
            return () => clearTimeout(id)
        }

        if (isEmpty && isDeletingSubtitle) {
            id = setTimeout(() => {
                setIsDeletingSubtitle(false)
                setSubtitleIndex((prev) => (prev + 1) % subtitles.length)
            }, 300)
            return () => clearTimeout(id)
        }

        const speed = isDeletingSubtitle ? 60 : 80

        id = setTimeout(() => {
            const next = isDeletingSubtitle
                ? current.slice(0, displayedSubtitle.length - 1)
                : current.slice(0, displayedSubtitle.length + 1)

            setDisplayedSubtitle(next)
        }, speed)

        return () => clearTimeout(id)
    }, [displayedName, fullName, displayedSubtitle, subtitleIndex, isDeletingSubtitle, subtitles])

    return (
        <section className="h-screen flex flex-col items-center justify-center text-center">
            <h1 className="text-7xl font-bold">{displayedName}</h1>

            <p className="text-xl text-gray-400 mt-4 min-h-7">
                {displayedSubtitle}
                <span
                    aria-hidden="true"
                    className="ml-1 inline-block w-2 h-[1em] bg-white align-[-0.1em] animate-[blink_1s_steps(1)_infinite]"
                />
            </p>

            <a
                className="mt-8 px-6 py-3 border border-white rounded-full hover:bg-white hover:text-black transition-colors"
                href="#projects"
            >
                Discover my projects
            </a>
        </section>
    )
}

export default Hero