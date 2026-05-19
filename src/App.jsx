import { Routes, Route } from 'react-router-dom'
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
  return (
    <main className="bg-black min-h-screen text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:slug" element={<ProjectPage />} />
      </Routes>
    </main>
  )
}

export default App