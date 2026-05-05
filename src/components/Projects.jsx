function Projects() {
    const projets = [
        {
            name: "shellcode-runner",
            description: "A modular shellcode execution framework with encryption, obfuscation, and evasion techniques.",
            stack: "Rust",
            link: "https://github.com/9nickss/shellcode-runner",
            featured: true
        },
        {
            name: "myTeams",
            description: "EPITECH tek2 project -> CLI chatroom based on Microsoft Teams coded in C++",
            stack: "C++",
            link: "https://github.com/9nickss/myTeams",
            featured: false
        },
        {
            name: "42sh",
            description: "EPITECH tek1 42sh Project -> Shell based on TCSH coded in C",
            stack: "C",
            link: "https://github.com/9nickss/42sh",
            featured: false
        },
        {
            name: "wolf3D",
            description: "EPITECH tek1 Wolf3D Project -> Coded in C using CSFML",
            stack: "C",
            link: "https://github.com/9nickss/wolf3D",
            featured: false
        },
        {
            name: "portfolio",
            description: "This portfolio",
            stack: "React / Vite / Tailwind",
            link: "https://github.com/9nickss/portfolio",
            featured: false
        },
        {
            name: "G-Bot",
            description: "Simple Discord bot for a server",
            stack: "JS",
            link: "https://github.com/moustiIIon/G-Bot",
            featured: false
        },
    ]

    const featured = projets.find(p => p.featured)
    const other = projets.filter(p => !p.featured)
    const column = other.slice(0, 3)
    const under = other.slice(3)

    return (
        <section id="projects" className="min-h-screen px-16 py-20">
            <h2 className="text-5xl font-bold mb-12">Projects</h2>
            <div className="grid grid-cols-2 gap-4 mb-4">

                {/*featured*/}
                <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 flex flex-col justify-end min-h-64">
                    <span className="text-xs bg-white text-black px-3 py-1 rounded-full w-fit mb-auto">
                        Featured
                    </span>
                    <h3 className="text-xl font-bold text-white mt-4">{featured.name}</h3>
                    <p className="text-gray-500 text-sm mt-2">{featured.description}</p>
                    <div className="flex items-center gap-3 mt-4">
                        <span className="text-xs border border-neutral-700 px-3 py-1 rounded-full text-gray-400">
                            {featured.stack}
                        </span>
                        <a href={featured.link} target="_blank" className="text-xs text-gray-400 hover:text-white">
                            GitHub →
                        </a>
                    </div>
                </div>

                {/* other */}
                <div className="flex flex-col gap-4">
                    {column.map((projet) => (
                        <div key={projet.name} className="bg-neutral-900 border border-neutral-800 rounded-xl p-6">
                            <h3 className="text-lg font-bold text-white">{projet.name}</h3>
                            <p className="text-gray-500 text-sm mt-2">{projet.description}</p>
                            <div className="flex items-center gap-3 mt-4">
                                <span className="text-xs border border-neutral-700 px-3 py-1 rounded-full text-gray-400">
                                    {projet.stack}
                                </span>
                                <a href={projet.link} target="_blank" className="text-xs text-gray-400 hover:text-white">
                                    GitHub →
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
                {under.map((projet) => (
                    <div key={projet.name} className="bg-neutral-900 border border-neutral-800 rounded-xl p-6">
                            <h3 className="text-lg font-bold text-white">{projet.name}</h3>
                            <p className="text-gray-500 text-sm mt-2">{projet.description}</p>
                            <div className="flex items-center gap-3 mt-4">
                                <span className="text-xs border border-neutral-700 px-3 py-1 rounded-full text-gray-400">
                                    {projet.stack}
                                </span>
                                <a href={projet.link} target="_blank" className="text-xs text-gray-400 hover:text-white">
                                    GitHub →
                                </a>
                            </div>    
                    </div>
                ))}
            </div>
        </section>
    )

}

export default Projects
