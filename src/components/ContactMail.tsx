import React, { useState } from "react"

const ContactMail = React.memo(function ContactMail() {
    const [name, setName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [subject, setSubject] = useState<string>("")
    const [message, setMessage] = useState<string>("")

    return (
        <div className="flex flex-col w-[60%] max-lg:w-full z-10">
            <div className="flex flex-col w-full h-full justify-center items-start pt-16 gap-4 p-4 max-lg:items-center rounded-xl max-md:gap-4">
                <h1 className="text-white text-8xl font-bold 2xl:text-8xl max-md:text-4xl">SEND ME</h1>
                <h1 className="text-white/20 text-8xl font-bold 2xl:text-8xl max-md:text-4xl">A MESSAGE</h1>
                <div className="flex flex-col w-full h-full justify-center items-start pt-8 gap-4 p-4 max-lg:items-center rounded-xl">
                    <form 
                        action="https://formsubmit.co/f2ac7c1857f7dd5905fb3b7eb6c72938" 
                        method="POST" 
                        className="flex flex-col w-full h-full gap-4"
                    >
                        <div className="flex flex-col w-full h-full gap-4">
                            <div className="flex w-full gap-4 max-md:flex-col">
                                <div className="flex flex-col w-full gap-2">
                                    <label htmlFor="name" className="text-white">Name</label>
                                    <input 
                                        type="text" 
                                        name="name" 
                                        placeholder="Name"
                                        value={name} 
                                        className="w-full p-2 pl-4 rounded-xl bg-white/30 text-white placeholder:text-white outline-none" 
                                        required 
                                        onChange={(e) => setName(e.target.value)} 
                                    />
                                </div>
                                <div className="flex flex-col w-full gap-2">
                                    <label htmlFor="email" className="text-white">Email</label>
                                    <input 
                                        type="email" 
                                        name="email" 
                                        placeholder="Email" 
                                        value={email}
                                        className="w-full p-2 pl-4 rounded-xl bg-white/30 text-white placeholder:text-white outline-none" 
                                        required 
                                        onChange={(e) => setEmail(e.target.value)} 
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col w-full gap-2">
                                <label htmlFor="subject" className="text-white">Subject</label>
                                <input 
                                    type="text" 
                                    name="subject" 
                                    placeholder="Subject" 
                                    value={subject}
                                    className="w-full p-2 pl-4 rounded-xl bg-white/30 text-white placeholder:text-white outline-none" 
                                    required 
                                    onChange={(e) => setSubject(e.target.value)} 
                                />
                            </div>
                            <div className="flex flex-col w-full gap-2">
                                <label htmlFor="message" className="text-white">Message</label>
                                <textarea 
                                    name="message" 
                                    placeholder="Message" 
                                    value={message}
                                    className="w-full min-h-[200px] p-2 pl-4 rounded-xl bg-white/30 text-white placeholder:text-white outline-none" 
                                    required 
                                    onChange={(e) => setMessage(e.target.value)} 
                                ></textarea>
                            </div>
                            <button 
                                type="submit" 
                                className="w-full p-2 bg-white rounded-xl hover:bg-white/70 transition-all duration-300 text-black"
                            >
                                Send
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
});

export default ContactMail;
