import { useNavigate, useLocation } from 'react-router-dom'

function Navbar() {
    const navigate = useNavigate()
    const location = useLocation()

    const scrollTo = (id) => (e) => {
        e.preventDefault()
        if (location.pathname !== '/') {
            navigate('/')
            setTimeout(() => {
                document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
            }, 100)
        } else {
            document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
        }
    }

    const scrollTop = (e) => {
        e.preventDefault()
        if (location.pathname !== '/') {
            navigate('/')
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' })
        }
    }

    return (
        <nav className="bg-black/80 backdrop-blur-sm flex justify-between items-center text-base py-4 px-4 md:px-8 lg:px-16 font-medium fixed top-0 w-full z-50 border-b border-white/5">
            <a href="/" onClick={scrollTop} className="text-lg md:text-xl font-bold">
                9nickss
            </a>
            <div className="flex gap-3 md:gap-6 text-xs md:text-sm lg:text-base text-gray-400">
                <a href="/" onClick={scrollTop} className="hover:text-white transition-colors">Home</a>
                <a href="#projects" onClick={scrollTo('projects')} className="hover:text-white transition-colors">Projects</a>
                <a href="#contact" onClick={scrollTo('contact')} className="hover:text-white transition-colors">Contact</a>
            </div>
        </nav>
    )
}

export default Navbar