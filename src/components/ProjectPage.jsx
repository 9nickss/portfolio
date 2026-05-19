import { useParams, Link } from 'react-router-dom'
import { useEffect } from 'react'
import { projects } from '../data/projects.js'
import ReactMarkdown from 'react-markdown'

function ProjectPage() {
    const { slug } = useParams()
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [slug])
    const project = projects.find(p => p.slug === slug)

    if (!project) return (
        <section className="px-16 py-32">
            <p className="text-gray-400">Project not found</p>
            <Link to="/" className="text-white underline mt-4 block">← Back</Link>
        </section>
    )

    return (
        <section className="px-16 py-32 max-w-6xl mx-auto">

            {/* retour */}
            <Link to="/" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors mb-10">
                ← Back to projects
            </Link>

            {/* hero 2 colonnes */}
            <div className="grid grid-cols-2 gap-16 items-start mb-12">

                {/* gauche */}
                <div>
                    {project.featured && (
                        <span className="inline-flex items-center gap-2 text-xs bg-white/5 border border-white/10 rounded-full px-3 py-1 text-gray-400 mb-4">
                            ★ Featured
                        </span>
                    )}
                    <h1 className="text-4xl font-bold text-white mb-4 leading-tight">{project.name}</h1>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6">{project.description}</p>
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-sm border border-white/20 rounded-full px-5 py-2 text-white hover:bg-white hover:text-black transition-colors"
                    >
                        View on GitHub ↗
                    </a>
                </div>

                {/* droite — placeholder image */}
                <div className="bg-white/5 border border-white/10 rounded-xl aspect-video flex items-center justify-content-center">
                    {project.image
                        ? <img src={project.image} alt={project.name} className="w-full h-full object-cover rounded-xl" />
                        : <span className="text-gray-700 text-sm m-auto">No preview available</span>
                    }
                </div>
            </div>

            <hr className="border-white/10 mb-12" />

            {/* description longue */}
            <p className="text-xs text-gray-600 uppercase tracking-widest mb-4">About the project</p>
            <ReactMarkdown
                components={{
                    h1: ({ children }) => <h1 className="text-2xl font-bold text-white mt-8 mb-3">{children}</h1>,
                    h2: ({ children }) => <h2 className="text-lg font-bold text-white mt-6 mb-2">{children}</h2>,
                    h3: ({ children }) => <h3 className="text-sm font-bold text-gray-300 uppercase tracking-widest mt-6 mb-2">{children}</h3>,
                    p:  ({ children }) => <p className="text-gray-400 text-sm leading-loose mb-4">{children}</p>,
                    ul: ({ children }) => <ul className="mb-4 flex flex-col gap-1">{children}</ul>,
                    li: ({ children }) => (
                        <li className="flex items-start gap-2 text-sm text-gray-400">
                            <span className="text-gray-600 mt-1">—</span>
                            <span>{children}</span>
                        </li>
                    ),
                    strong: ({ children }) => <strong className="text-white font-medium">{children}</strong>,
                }}
            >
                {project.longDescription}
            </ReactMarkdown>

            {/* meta */}
            <div className="grid grid-cols-1 gap-3 w-48">
                <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <p className="text-xs text-gray-600 mb-1">Language</p>
                    <p className="text-sm font-medium text-white">{project.stack}</p>
                </div>
            </div>

        </section>
    )
}

export default ProjectPage