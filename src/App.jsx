import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './components/Navbar.jsx'

function App() {
  return (
    <main className="bg-black min-h-screen text-white pt-20">
      <Navbar />
      <div className='flex items-center justify-center min-h-screen'></div>
        <h1 className="text-5xl font-bold">Hello 👋</h1>
    </main>
  )
}
export default App
