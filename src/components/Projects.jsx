import { projects } from '../data/projects.js'
import { Link } from 'react-router-dom'

function Projects() {
    const featured = projects.find(p => p.featured)
    const other = projects.filter(p => !p.featured)
    const column = other.slice(0, 3)
    const under = other.slice(3)

    return (
        <section id="projects" className="min-h-screen px-16 py-20">
            <a href="#hero" className="flex flex-col items-center gap-1.5 mb-12 text-gray-700 hover:text-gray-400 transition-colors">
                <div className="w-px h-8 bg-gradient-to-t from-gray-700 to-transparent" />
                <span className="text-xs tracking-widest uppercase">home</span>
            </a>
            <h2 className="text-5xl font-bold mb-12">Projects</h2>

            <div className="grid grid-cols-2 gap-4 mb-4">

                {/* featured */}
                <Link to={`/projects/${featured.slug}`} className="block">
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 flex flex-col justify-end h-full hover:border-white/30 transition-colors">
                        <span className="text-xs bg-white text-black px-3 py-1 rounded-full w-fit mb-auto">
                            Featured
                        </span>
                        <h3 className="text-xl font-bold text-white mt-4">{featured.name}</h3>
                        <p className="text-gray-500 text-sm mt-2">{featured.description}</p>
                        <div className="flex items-center gap-3 mt-4">
                            <span className="text-xs border border-neutral-700 px-3 py-1 rounded-full text-gray-400">
                                {featured.stack}
                            </span>
                            <a href={featured.link} target="_blank" className="text-xs text-gray-400 hover:text-white" onClick={e => e.stopPropagation()}>
                                GitHub →
                            </a>
                        </div>
                    </div>
                </Link>

                {/* other */}
                <div className="flex flex-col gap-4">
                    {column.map((projet) => (
                        <Link key={projet.name} to={`/projects/${projet.slug}`} className="block">
                            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-white/30 transition-colors">
                                <h3 className="text-lg font-bold text-white">{projet.name}</h3>
                                <p className="text-gray-500 text-sm mt-2">{projet.description}</p>
                                <div className="flex items-center gap-3 mt-4">
                                    <span className="text-xs border border-neutral-700 px-3 py-1 rounded-full text-gray-400">
                                        {projet.stack}
                                    </span>
                                    <a href={projet.link} target="_blank" className="text-xs text-gray-400 hover:text-white" onClick={e => e.stopPropagation()}>
                                        GitHub →
                                    </a>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
                {under.map((projet) => (
                    <Link key={projet.name} to={`/projects/${projet.slug}`} className="block">
                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-white/30 transition-colors">
                            <h3 className="text-lg font-bold text-white">{projet.name}</h3>
                            <p className="text-gray-500 text-sm mt-2">{projet.description}</p>
                            <div className="flex items-center gap-3 mt-4">
                                <span className="text-xs border border-neutral-700 px-3 py-1 rounded-full text-gray-400">
                                    {projet.stack}
                                </span>
                                <a href={projet.link} target="_blank" className="text-xs text-gray-400 hover:text-white" onClick={e => e.stopPropagation()}>
                                    GitHub →
                                </a>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            <a href="#contact" className="flex flex-col items-center gap-1.5 mt-16 text-gray-700 hover:text-gray-400 transition-colors">
                <span className="text-xs tracking-widest uppercase">contact</span>
                <div className="w-px h-8 bg-gradient-to-b from-gray-700 to-transparent" />
            </a>

        </section>
    )
}

export default Projects