import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import ProjectPage from './components/ProjectPage.jsx'

function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <Contact />
    </>
  )
}

function App() {
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const handleKeyDown = (e) => {
      const projectsEl = document.getElementById('projects')
      const contactEl = document.getElementById('contact')
      let currentSection = 'hero'
      
      if (projectsEl && projectsEl.getBoundingClientRect().top < window.innerHeight / 2) {
        currentSection = 'projects'
      }
      if (contactEl && contactEl.getBoundingClientRect().top < window.innerHeight / 2) {
        currentSection = 'contact'
      }

      if (e.key === 'ArrowDown') {
        e.preventDefault()
        if (currentSection === 'hero') {
          projectsEl?.scrollIntoView({ behavior: 'smooth' })
        } else if (currentSection === 'projects') {
          contactEl?.scrollIntoView({ behavior: 'smooth' })
        }
      }

      if (e.key === 'ArrowUp') {
        e.preventDefault()
        if (currentSection === 'contact') {
          projectsEl?.scrollIntoView({ behavior: 'smooth' })
        } else if (currentSection === 'projects') {
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <main className="min-h-screen text-white" style={{ background: '#0a0a0f' }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:slug" element={<ProjectPage />} />
      </Routes>
    </main>
  )
}

export default App