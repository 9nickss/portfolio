function Hero() {
    return (
        <section className="flex flex-col items-center justify-center min-h-screen text-center">
            <h1 className="text-7xl font-bold">Yannick Kahl</h1>
            <p className="text-x1 text-gray-400 mt-4">Étudiant Epitech · C++ | C | Rust</p>
            <button className="mt-8 px-6 py-3 border border-white rounded-full hover:bg-white hover:text-black">
                Voir mes projets
            </button>
        </section>
    )
}

export default Hero
