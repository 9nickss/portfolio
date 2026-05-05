function Navbar() {
    return (
        <nav className="bg-black flex justify-screen justify-between items-center text-3xl py-2 px-16 font-bold fixed top-0 w-full z-50">
            <span>
                <a href="#">9nickss</a>
            </span>
            <div className="flex gap-4">
                <a href="#">Home</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
            </div>
        </nav>
    )
}

export default Navbar
