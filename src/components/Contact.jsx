import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

function Contact() {
    return (
        <section id="contact" className="min-h-screen px-16 py-20">
            <h2 className="text-5xl font-bold mb-12">Contact</h2>

            <div className="grid grid-cols-2 gap-8">

                {/* links */}
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 flex flex-col gap-6">
                   <span className="text-xs bg-indigo-950 text-indigo-400 border border-indigo-800 px-3 py-1 rounded-full w-fit">
                        available for internship / part-time
                    </span>

                    <h3 className="text-xl font-bold">Yannick Kahl</h3>

                    <div className="flex flex-col gap-3">
                        <a href="https://github.com/9nickss" target="_blank" 
                           className="flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-3 hover:bg-neutral-700 transition-colors">
                            <FaGithub size={20} />
                            <div>
                                <p className="text-sm text-white">GitHub</p>
                                <p className="text-xs text-gray-500">github.com/9nickss</p>
                            </div>
                            <span className="ml-auto text-gray-600">↗</span>
                        </a>
                        <a href="https://www.linkedin.com/in/yannick-kahl-782782336/" target="_blank"
                           className="flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-3 hover:bg-neutral-700 transition-colors">
                            <FaLinkedin size={20} />
                            <div>
                                <p className="text-sm text-white">LinkedIn</p>
                                <p className="text-xs text-gray-500">Yannick Kahl</p>
                            </div>
                            <span className="ml-auto text-gray-600">↗</span>
                        </a>
                        <a href="mailto:yannickkahl@outlook.fr"
                           className="flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-3 hover:bg-neutral-700 transition-colors">
                            <MdEmail size={20} />
                            <div>
                                <p className="text-sm text-white">Email</p>
                                <p className="text-xs text-gray-500">yannickkahl@outlook.fr</p>
                            </div>
                            <span className="ml-auto text-gray-600">↗</span>
                        </a>
                    </div>
                </div>

                {/* formulaire */}
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 flex flex-col gap-4">
                    <h3 className="text-xl font-bold">Send me a message!</h3>
                    <input
                        type="text"
                        placeholder="Name"
                        className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-neutral-600"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-neutral-600"
                    />
                    <textarea
                        placeholder="Message"
                        rows={5}
                        className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-neutral-600 resize-none"
                    />
                    <button className="border border-white rounded-full py-3 hover:bg-white hover:text-black transition-colors">
                        Send
                    </button>
                </div>

            </div>
        </section>
    )
}

export default Contact
