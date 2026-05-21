import { projects } from '../data/projects.js'
import { Link } from 'react-router-dom'
import { useNavigate, useLocation } from 'react-router-dom'
import { GlowBackground } from './GlowBackground'

function Projects() {
    const navigate = useNavigate()
    const location = useLocation()
    const featured = projects.find(p => p.featured)
    const other = projects.filter(p => !p.featured)

    const scrollTo = (id) => async (e) => {
        e.preventDefault()
        if (location.pathname !== '/') {
            navigate('/', { replace: false })
            // Wait for navigation to complete
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
        <GlowBackground glowWidthPercent={35} glowHeightPercent={30} gridGlowWidthPercent={30} gridGlowHeightPercent={30}>
            <section id="projects" className="min-h-screen px-4 md:px-8 lg:px-16 py-10 md:py-20">
            <a href="#" className="flex flex-col items-center gap-1.5 mb-8 md:mb-12 text-gray-700 hover:text-gray-400 transition-colors">
                <div className="w-px h-8 bg-gradient-to-t from-gray-700 to-transparent" />
                <span className="text-xs tracking-widest uppercase">home</span>
            </a>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-12">Projects</h2>

            <div className="space-y-8">
                {/* Featured */}
                <div className="flex justify-center">
                    <Link to={`/projects/${featured.slug}`} className="block w-full md:w-1/2">
                        <div className="bg-white/3 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:border-white/30 transition-colors">
                            <div className="aspect-video bg-white/5 flex items-center justify-center flex-shrink-0">
                                {featured.image ? (
                                    <img src={featured.image} alt={featured.name} className="w-full h-full object-cover" />
                                ) : (
                                    <span className="text-gray-700 text-xs text-center p-2">No image</span>
                                )}
                            </div>
                            <div className="p-4">
                                <span className="text-xs bg-white text-black px-3 py-1 rounded-full">Featured</span>
                                <h3 className="text-lg font-bold text-white mt-2">{featured.name}</h3>
                                <p className="text-gray-500 text-xs mt-1 line-clamp-2">{featured.description}</p>
                                <div className="flex items-center justify-between mt-3">
                                    <span className="text-xs border border-neutral-700 px-2 py-1 rounded-full text-gray-400">
                                        {featured.stack}
                                    </span>
                                    <a href={featured.link} target="_blank" rel="noreferrer" className="text-xs text-gray-400 hover:text-white" onClick={e => e.stopPropagation()}>
                                        GitHub →
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>

                {/* Other projects */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {other.map((projet) => (
                        <Link key={projet.name} to={`/projects/${projet.slug}`} className="block">
                            <div className="bg-white/3 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:border-white/30 transition-colors h-full flex flex-col">
                                {/* Image */}
                                <div className="aspect-square bg-white/5 flex items-center justify-center relative flex-shrink-0">
                                    {projet.image ? (
                                        <img src={projet.image} alt={projet.name} className="w-full h-full object-cover" />
                                    ) : (
                                        <span className="text-gray-700 text-xs text-center p-2">No image</span>
                                    )}
                                </div>
                                
                                {/* Info */}
                                <div className="p-3 flex-grow flex flex-col">
                                    <h3 className="text-sm font-bold text-white">{projet.name}</h3>
                                    <p className="text-gray-500 text-xs mt-1 line-clamp-2 flex-grow">{projet.description}</p>
                                    <div className="flex items-center justify-between mt-3 pt-2 border-t border-white/5">
                                        <span className="text-xs border border-neutral-700 px-2 py-1 rounded-full text-gray-400">
                                            {projet.stack}
                                        </span>
                                        <a href={projet.link} target="_blank" rel="noreferrer" className="text-xs text-gray-400 hover:text-white" onClick={e => e.stopPropagation()}>
                                            GitHub →
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            <a href="#contact" onClick={scrollTo('contact')} className="flex flex-col items-center gap-1.5 mt-8 md:mt-12 lg:mt-16 text-gray-700 hover:text-gray-400 transition-colors">
                <span className="text-xs tracking-widest uppercase">contact</span>
                <div className="w-px h-8 bg-gradient-to-b from-gray-700 to-transparent" />
            </a>

            </section>
        </GlowBackground>
    )
}

export default Projects