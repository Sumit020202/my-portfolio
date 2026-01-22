import React from 'react';

const Portfolio = () => {
  const projects = [
    {
      title: "Real-Time Chat App",
      description: "Socket.io और MERN के साथ बनाया गया रीयल-टाइम चैट ऐप। इसमें प्राइवेट रूम्स और इंस्टेंट नोटिफिकेशन्स हैं।",
      link: "https://chat-app-frontend-gamma-snowy.vercel.app",
      github: "https://github.com/Sumit020202",
      tech: ["React", "Node.js", "Socket.io", "MongoDB"]
    },
    {
      title: "Full-Stack Task Manager",
      description: "क्लाउड-आधारित टास्क मैनेजमेंट सिस्टम जहाँ आप अपने काम को ट्रैक और डिलीट कर सकते हैं।",
      link: "https://task-manager-frontend-delta-silk.vercel.app",
      github: "https://github.com/Sumit020202",
      tech: ["React", "Express", "MongoDB", "Tailwind"]
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-100 font-sans selection:bg-purple-500/30">

      {/* Abstract Background Decoration */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-900/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-900/20 blur-[120px] rounded-full"></div>
      </div>

      {/* Navigation */}
      <nav className="flex justify-between items-center py-6 px-10 max-w-7xl mx-auto backdrop-blur-md sticky top-0 z-50">
        <div className="text-2xl font-black tracking-tighter italic text-purple-500">Sumit Singh</div>
        <div className="flex gap-8 text-sm font-medium text-gray-400">
          <a href="#projects" className="hover:text-white transition">Projects</a>
          <a href="#skills" className="hover:text-white transition">Skills</a>
          <a href="https://www.linkedin.com/in/sumit-singh-376a99120/" className="hover:text-white transition">LinkedIn</a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="flex flex-col items-center justify-center text-center py-32 px-6">
        <div className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest uppercase bg-purple-500/10 text-purple-400 border border-purple-500/20 rounded-full">
          Available for Hire 2026
        </div>
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 leading-[0.9]">
          Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">Digital</span> <br /> Experiences.
        </h1>
        <p className="max-w-2xl text-lg text-gray-400 leading-relaxed">
          I'm Sumit Singh, a MERN Stack Developer based in Bangalore. Specialized in building
          high-performance real-time applications.
        </p>
        <div className="mt-12 flex gap-4">
          <a href="mailto:letscodewithsumit@gmail.com" className="bg-white text-black px-8 py-4 rounded-xl font-bold hover:scale-105 transition active:scale-95">Get in touch</a>
          <a href="/resume.pdf" download className="bg-gray-800 text-white px-8 py-4 rounded-xl font-bold border border-gray-700 hover:bg-gray-700 transition">Resume.pdf</a>
        </div>
      </header>

      {/* Projects Grid */}
      <main id="projects" className="max-w-7xl mx-auto py-24 px-6">
        <h2 className="text-4xl font-bold mb-16 tracking-tight">Selected Work</h2>
        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((p, idx) => (
            <div key={idx} className="group relative bg-[#121212] border border-white/5 p-10 rounded-[2rem] hover:bg-white/[0.02] transition-all duration-500">
              <div className="flex justify-between items-start mb-12">
                <div className="space-y-4">
                  <h3 className="text-3xl font-bold tracking-tight">{p.title}</h3>
                  <p className="text-gray-400 leading-relaxed max-w-sm">{p.description}</p>
                </div>
                <div className="flex gap-3">
                  <a href={p.github} target="_blank" className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition">
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                  </a>
                  <a href={p.link} target="_blank" className="p-3 bg-purple-500 rounded-full hover:bg-purple-600 transition shadow-lg shadow-purple-500/20">
                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M7 17L17 7M17 7H7M17 7V17"></path></svg>
                  </a>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {p.tech.map(t => <span key={t} className="text-[10px] font-bold uppercase tracking-widest text-gray-500 px-3 py-1 border border-white/10 rounded-full">{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Skills */}
      <section id="skills" className="py-32 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-20">
          <h2 className="text-4xl font-bold tracking-tight">Technical <br /> Mastery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-20 gap-y-10">
            <div>
              <h4 className="text-sm font-bold text-purple-500 uppercase tracking-widest mb-4">Frontend</h4>
              <ul className="text-gray-400 space-y-2"><li>React.js</li><li>Tailwind CSS</li><li>Vite</li></ul>
            </div>
            <div>
              <h4 className="text-sm font-bold text-blue-500 uppercase tracking-widest mb-4">Backend</h4>
              <ul className="text-gray-400 space-y-2"><li>Node.js</li><li>Express.js</li><li>Socket.io</li></ul>
            </div>
            <div>
              <h4 className="text-sm font-bold text-green-500 uppercase tracking-widest mb-4">Database</h4>
              <ul className="text-gray-400 space-y-2"><li>MongoDB Atlas</li><li>Mongoose</li><li>Redis</li></ul>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-20 text-center text-gray-600 text-sm border-t border-white/5">
        Designed & Built by Sumit Singh • Bangalore 2026
      </footer>
    </div>
  );
};

export default Portfolio;
