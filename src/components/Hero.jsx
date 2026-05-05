function Hero() {
    return (
        <section className="h-screen flex flex-col items-center justify-center text-center">
            <h1 className="text-7xl font-bold">Yannick Kahl</h1>
            <p className="text-xl text-gray-400 mt-4">Second year EPITECH Nice student</p>
            <button className="mt-8 px-6 py-3 border border-white rounded-full hover:bg-white hover:text-black transition-colors">
                Voir mes projets
            </button>
        </section>
    )
}

export default Hero
