function Navbar() {
    return (
        <nav className="bg-black flex justify-screen justify-between items-center text-3xl py-2 px-3 font-bold fixed top-0 w-full z-50">
            <span>9nickss</span>
            <div className="flex gap-4">
                <a href="home">Accueil</a>
                <a href="projets">Projets</a>
                <a href="contact">Contact</a>
            </div>
        </nav>
    )
}

export default Navbar
