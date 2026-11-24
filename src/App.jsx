import React, { useState } from 'react'

function App() {
  const [page, setPage] = useState("home")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const projects = [
    {
      title: "Hotel Booking System",
      desc: "A full-stack web application for room booking and management. Users can search rooms, check availability and book.",
      tech: ["React", "Spring Boot", "MySQL"],
      github: "#",
      live: "#"
    },
    {
      title: "Library Management System",
      desc: "A complete system for managing library operations including book issue/return, student records, and fine calculation.",
      tech: ["React", "Java", "Spring Boot", "MySQL"],
      github: "#",
      live: "#"
    },
  ]

  const handleSend = (e) => {
    e.preventDefault()
    const subject = `Portfolio Contact from ${name}`
    const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`
    window.location.href = `mailto:suhanipagade123@gmail.com?subject=${subject}&body=${body}`
  }

  const goHome = (id) => {
    setPage("home")
    setTimeout(() => {
      if (id) document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
      else window.scrollTo({ top: 0, behavior: "smooth" })
    }, 100)
  }

  if (page === "contact") {
    return (
      <div className="bg-[#0A1128] text-white min-h-screen font-sans antialiased overflow-x-hidden flex flex-col items-center w-full">
        <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none"></div>

        <nav className="flex justify-between items-center px-6 md:px-20 py-5 fixed w-full bg-[#0A1128]/80 backdrop-blur-md border-b border-white/10 z-50">
          <button onClick={() => goHome()} className="text-xl font-bold tracking-tight">PORTFOLIO<span className="text-cyan-400">.</span></button>
          <div className="hidden md:flex gap-8 text-sm font-medium text-gray-300">
            <button onClick={() => goHome("about")} className="hover:text-white">About</button>
            <button onClick={() => goHome("skills")} className="hover:text-white">Skills</button>
            <button onClick={() => goHome("projects")} className="hover:text-white">Projects</button>
            <button onClick={() => setPage("contact")} className="hover:text-white">Contact</button>
          </div>
          
        </nav>

        <div className="pt-28 pb-16 px-6 w-full max-w-4xl mx-auto flex flex-col items-center justify-center text-center">
          <button onClick={() => goHome()} className="text-sm text-cyan-300 mb-6 self-start">← Back to Home</button>
          <h1 className="text-4xl font-bold text-center">Contact</h1>
          <p className="text-gray-400 text-sm mt-2 text-center">You can contact me on any of these:</p>

          <div className="bg-white/[0.04] border border-white/10 rounded-3xl p-6 md:p-8 w-full mt-8">
            <div className="flex flex-col gap-3 w-full">
              <a href="mailto:suhanipagade123@gmail.com" className="w-full bg-white/[0.06] border border-white/10 rounded-2xl p-4 block text-left">
                <p className="text-xs text-gray-400">📧 Email</p>
                <p className="text-sm font-semibold mt-1 break-all">suhanipagade123@gmail.com</p>
              </a>
              <a href="https://www.linkedin.com/feed/foryou/" target="_blank" rel="noreferrer" className="w-full bg-white/[0.06] border border-white/10 rounded-2xl p-4 block text-left">
                <p className="text-xs text-gray-400">💼 LinkedIn</p>
                <p className="text-sm font-semibold mt-1">Suhani Pagade</p>
              </a>
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="w-full bg-white/[0.06] border border-white/10 rounded-2xl p-4 block text-left">
                <p className="text-xs text-gray-400">💻 GitHub</p>
                <p className="text-sm font-semibold mt-1">github.com</p>
              </a>
            </div>
            <p className="text-gray-500 text-xs mt-4 text-center">📍 Pimpri, Maharashtra, India</p>
          </div>

          <form onSubmit={handleSend} className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-3xl p-6 md:p-8 flex flex-col gap-4 w-full mt-6">
            
            <p className="text-blue-100 text-sm text-center">Type here to send me a message</p>
            <input type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} required className="w-full bg-white text-black rounded-xl px-4 py-3.5 text-sm placeholder:text-gray-500 outline-none" />
            <input type="email" placeholder="Your Email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full bg-white text-black rounded-xl px-4 py-3.5 text-sm placeholder:text-gray-500 outline-none" />
            <textarea placeholder="Type your message here..." rows="4" value={message} onChange={(e) => setMessage(e.target.value)} required className="w-full bg-white text-black rounded-xl px-4 py-3.5 text-sm placeholder:text-gray-500 outline-none resize-none" />
            <button type="submit" className="bg-[#0A1128] text-white py-3.5 rounded-full font-bold text-sm hover:bg-black transition">Send Message →</button>
          </form>
          <p className="text-gray-500 text-xs mt-10 text-center">© 2026 Suhani Pagade. All rights reserved.</p>
        </div>
      </div>
    )
  }

  
  return (
    <div className="bg-[#0A1128] text-white min-h-screen font-sans antialiased overflow-x-hidden flex flex-col items-center w-full">

     
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none"></div>

     
      <nav className="flex justify-between items-center px-6 md:px-20 py-5 fixed w-full bg-[#0A1128]/80 backdrop-blur-md border-b border-white/10 z-50">
        <button onClick={() => goHome()} className="text-xl font-bold tracking-tight">PORTFOLIO<span className="text-cyan-400">.</span></button>
        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-300">
          <button onClick={() => goHome("about")} className="hover:text-white">About</button>
          <button onClick={() => goHome("skills")} className="hover:text-white">Skills</button>
          <button onClick={() => goHome("projects")} className="hover:text-white">Projects</button>
          <button onClick={() => setPage("contact")} className="hover:text-white">Contact</button>
        </div>
        
      </nav>

      
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center pt-28 pb-16 px-6 md:px-20 w-full max-w-7xl mx-auto">
        <span className="inline-block bg-white/10 border border-white/20 text-cyan-300 text-xs font-semibold px-4 py-2 rounded-full tracking-widest">LEARNING • BUILDING • GROWING</span>
        <div className="mt-8 flex justify-center">
          <div className="w-52 h-52 md:w-64 md:h-64 rounded-full p-1.5 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 shadow-2xl shadow-blue-600/50">
            <img src="/Portfolio/PROFphoto.jpeg" alt="Suhani Pagade" className="w-full h-full rounded-full object-cover object-top border-4 border-[#0A1128]" />
          </div>
        </div>
        <p className="text-cyan-400 font-semibold text-sm tracking-widest uppercase mt-6">Full Stack Java Developer</p>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.02] mt-3">
          Suhani <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">Pagade</span>
        </h1>
        <h2 className="text-xl md:text-3xl font-medium text-gray-300 tracking-tight mt-4">Building Scalable & User-Focused Web Applications.</h2>
        <p className="text-gray-400 text-base md:text-lg mt-5 max-w-2xl mx-auto leading-relaxed">I am learning Full Stack Development using React, Java, Spring Boot and MySQL. Based in Pimpri, Maharashtra.</p>
        <div className="flex justify-center gap-4 mt-8 flex-wrap">
          <button onClick={() => goHome("projects")} className="bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-3.5 rounded-full font-bold text-sm shadow-lg shadow-blue-600/30">View My Work →</button>
          <button onClick={() => setPage("contact")} className="border border-white/30 bg-white/5 px-8 py-3.5 rounded-full font-bold text-sm">Get in Touch</button>
        </div>
      </section>

     
      <section id="about" className="px-6 md:px-20 py-12 w-full flex justify-center">
        <div className="max-w-4xl w-full mx-auto bg-white/[0.04] border border-white/10 rounded-3xl p-8 text-center">
          <h2 className="text-3xl font-bold">About Me</h2>
          <p className="text-gray-300 mt-4 leading-relaxed">Hi, I am Suhani Pagade from Pimpri, Maharashtra.</p>
          <p className="text-gray-300 mt-3 leading-relaxed">I love learning Full Stack Development. Right now, I am learning React, Java, Spring Boot and MySQL, and building small real projects with them.</p>
          <p className="text-gray-400 mt-3 leading-relaxed text-sm">I like to write clean code and design simple, easy-to-use interfaces. I am currently preparing for internship and job opportunities.</p>
          <div className="mt-6 bg-blue-600/20 border border-blue-500/20 rounded-2xl p-4">
            <p className="text-sm text-blue-200"><b>My Goal:</b> To become a good Full Stack Developer and gain real experience by working in a real company.</p>
          </div>
        </div>
      </section>

     
      <section id="skills" className="px-6 md:px-20 py-12 w-full max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold">My <span className="text-cyan-400">Skills</span></h2>
        <p className="text-gray-400 text-sm mt-2">Technologies I am learning</p>
        <div className="flex flex-wrap justify-center gap-3 mt-7">
          {["React.js", "Java", "Spring Boot", "JavaScript", "MySQL", "HTML", "CSS", "Tailwind CSS", "Git", "Github"].map(s => (
            <span key={s} className="bg-white/10 border border-white/10 px-5 py-2.5 rounded-full text-sm font-medium hover:bg-cyan-500 hover:text-white transition cursor-default">{s}</span>
          ))}
        </div>
      </section>

     
      <section id="projects" className="px-6 md:px-20 py-12 w-full flex justify-center">
        <div className="max-w-7xl w-full mx-auto">
          <h2 className="text-3xl font-bold text-center">My <span className="text-cyan-400">Projects</span></h2>
          <p className="text-gray-400 mt-2 text-center text-sm">Projects I built while learning.</p>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {projects.map((p) => (
              <div key={p.title} className="bg-white/[0.04] border border-white/10 rounded-3xl p-6 flex flex-col hover:border-cyan-400/50 hover:-translate-y-1 transition">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center font-bold text-lg mb-4">{p.title[0]}</div>
                <h3 className="text-xl font-bold">{p.title}</h3>
                <p className="text-gray-400 text-sm mt-3 leading-relaxed flex-1">{p.desc}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {p.tech.map(t => (
                    <span key={t} className="text-xs bg-white/10 px-2.5 py-1 rounded-full">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}

export default App
