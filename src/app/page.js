"use client"; // තරු වල Animation එක වැඩ කරන්න මේක අනිවාර්යයෙන් උඩින්ම තියෙන්න ඕනේ
import { useEffect, useState } from "react";

// --- 🌟 අලුතෙන් එකතු කරපු Neon Stars Component එක ---
const NeonStars = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    // තරු 70ක් හදමු
    const newStars = [...Array(70)].map((_, i) => {
      // Neon පාටවල් සහ ඒවට ගැලපෙන Glow (Shadow) එක
      const neonColors = [
        { bg: "bg-blue-500", glow: "rgba(59, 130, 246, 0.8)" },
        { bg: "bg-purple-500", glow: "rgba(168, 85, 247, 0.8)" },
        { bg: "bg-pink-500", glow: "rgba(236, 72, 153, 0.8)" },
        { bg: "bg-cyan-400", glow: "rgba(34, 211, 238, 0.8)" },
        { bg: "bg-emerald-400", glow: "rgba(52, 211, 153, 0.8)" },
        { bg: "bg-orange-500", glow: "rgba(249, 115, 22, 0.8)" }
      ];
      const randomColor = neonColors[Math.floor(Math.random() * neonColors.length)];
      
      return {
        id: i,
        top: Math.random() * 100 + "%",
        left: Math.random() * 100 + "%",
        size: Math.random() * 3 + 1 + "px", // 1px ඉඳන් 4px වෙනකන් ලොකු/පොඩි තරු
        color: randomColor.bg,
        shadow: randomColor.glow,
        animationDuration: Math.random() * 3 + 2 + "s", // නිවෙන/පත්තු වෙන වේගය
        animationDelay: Math.random() * 3 + "s"
      };
    });
    setStars(newStars);
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {stars.map((star) => (
        <div
          key={star.id}
          className={`absolute rounded-full animate-pulse opacity-70 ${star.color}`}
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            animationDuration: star.animationDuration,
            animationDelay: star.animationDelay,
            boxShadow: `0 0 8px 2px ${star.shadow}` // Glow effect එක
          }}
        />
      ))}
    </div>
  );
};


export default function Home() {
  
  // 1. Oyage Projects Data
  const projects = [
    {
      id: 1,
      title: "PasalMalla - E-Commerce",
      description: "Bilingual full-stack e-commerce platform for school supplies. Features a custom shopping cart, WhatsApp order integration, and an admin dashboard.",
      tech: ["Laravel 12", "Tailwind CSS", "SQLite"],
      link: "https://github.com/avinduoshan1/Pasal_Malla", 
      image: "/pasalmalla.png",
      video: "/pasalmalla.mp4",
      style: "md:col-span-2 bg-gradient-to-br from-[#1a0a00] to-[#0a0a0a] border-[#ff5500]/20 hover:border-[#ff5500]/60 group",
      glow: "bg-[#ff5500]" 
    },
    {
      id: 2,
      title: "NewsAPI Explorer",
      description: "Modern web application to search global news in real-time. Features advanced filtering, multi-language support, and responsive dark UI.",
      tech: ["React.js", "TypeScript", "Vite"],
      link: "https://github.com/avinduoshan1/NewsApi", 
      image: "/newsapi.png",
      style: "md:col-span-1 bg-gradient-to-b from-[#0a1128] to-[#0a0a0a] border-blue-500/20 hover:border-blue-500/60 group",
      glow: "bg-blue-600" 
    },
    {
      id: 3,
      title: "PawCare Services",
      description: "Responsive multi-page platform for pet services. Built with pure web technologies featuring custom animations, typing effects, and interactive gallery filtering.",
      tech: ["HTML5", "CSS3", "Vanilla JS"],
      link: "https://github.com/avinduoshan1/PawCare",
      liveLink: "https://cerulean-crumble-0dc16f.netlify.app/", 
      image: "/pawcare.png",
      style: "md:col-span-1 bg-gradient-to-t from-[#05131a] to-[#0a0a0a] border-sky-400/20 hover:border-sky-400/60 group",
      glow: "bg-sky-400" 
    },
    {
      id: 4,
      title: "Café Elixir - Web System",
      description: "Comprehensive coffee shop management system featuring online ordering, table reservations, and a multi-tier loyalty program.",
      tech: ["Laravel 11", "Bootstrap 5", "MySQL"],
      link: "https://github.com/avinduoshan1/coffeeshop-official",
      image: "/cafeelixir.png",
      video: "/cafeelixir.mp4",
      style: "md:col-span-2 bg-gradient-to-bl from-[#1a120b] to-[#0a0a0a] border-[#d4a373]/20 hover:border-[#d4a373]/60 group", 
      glow: "bg-[#d4a373]" 
    },
    {
      id: 5,
      title: "Café Elixir - Java POS",
      description: "Enterprise-level Point of Sale desktop application. Implements MVC & DAO architecture, dynamic tax calculations, and BLOB image handling.",
      tech: ["Java 23", "Swing", "JDBC"],
      link: "https://github.com/avinduoshan1/cafe", 
      image: "/java-pos.png",
      style: "md:col-span-2 bg-gradient-to-t from-[#1a0f00] to-[#0a0a0a] border-[#e76f00]/20 hover:border-[#e76f00]/60 group", 
      glow: "bg-[#e76f00]" 
    },
    {
      id: 6,
      title: "Gadget Galaxy - Inventory",
      description: "Role-based inventory management desktop app. Developed to demonstrate core Computer Science fundamentals including OOP, Encapsulation, and Java File I/O.",
      tech: ["Java", "OOP", "File I/O"],
      link: "https://github.com/avinduoshan1/GadgetGalaxy", 
      image: "/gadget-galaxy.png",
      style: "md:col-span-1 bg-gradient-to-br from-[#1a0b2e] to-[#0a0a0a] border-purple-500/20 hover:border-purple-500/60 group", 
      glow: "bg-purple-600" 
    },
    {
      id: 7,
      title: "Hotel Management (C++)",
      description: "A core C++ console application demonstrating strong object-oriented programming principles, polymorphism, and dynamic memory management.",
      tech: ["C++", "Pointers", "Core OOP"],
      link: "https://github.com/avinduoshan1/Hotel-Management-System", 
      image: "/hotel-cpp.png",
      style: "md:col-span-1 bg-gradient-to-br from-[#02120a] to-[#0a0a0a] border-emerald-500/20 hover:border-emerald-500/60 group", 
      glow: "bg-emerald-500" 
    },
    {
      id: 8,
      title: "TicketMasterPro - Cinema System",
      description: "Enterprise ticket management system with an interactive visual seat booking interface. Features real-time price calculation, status tracking, and an admin dashboard.",
      tech: [".NET", "C#", "Entity Framework", "SQL Server"],
      link: "https://github.com/avinduoshan1/TicketMasterPro", 
      image: "/ticketmaster.png",
      style: "md:col-span-2 bg-gradient-to-l from-[#1a0505] to-[#0a0a0a] border-rose-500/20 hover:border-rose-500/60 group", 
      glow: "bg-rose-600" 
    }
  ];

  // 2. Oyage Skills Data
  const skills = [
    { category: "Frontend", items: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "HTML5/CSS3"] },
    { category: "Backend", items: ["Laravel (PHP)", ".NET (C#)", "Java Spring Boot", "Node.js"] },
    { category: "Database & Tools", items: ["MySQL", "SQL Server", "SQLite", "Entity Framework", "Git/GitHub"] },
    { category: "Core Concepts", items: ["C++", "OOP", "MVC Architecture", "REST APIs", "Japanese (JLPT N4)"] }
  ];

  return (
    <main className="bg-[#0a0a0a] text-white min-h-screen font-sans selection:bg-red-500 selection:text-white pb-10 relative">
      
      {/* 🌟 Background Stars 🌟 */}
      <NeonStars />

      {/* හැම Content එකක්ම z-10 ඇතුළට දැම්මා තරු වලට උඩින් පේන්න */}
      <div className="relative z-10">
        
        {/* --- 1. HERO SECTION --- */}
        <section className="min-h-screen flex flex-col items-center justify-center px-4">
          <p className="text-red-500 text-lg md:text-xl font-medium tracking-widest mb-4 animate-pulse">
            こんにちは (Konnichiwa)
          </p>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-center drop-shadow-lg">
            I'm <span className="text-gray-200">Avindu Oshan</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 mb-8 text-center max-w-2xl leading-relaxed bg-black/40 p-4 rounded-2xl backdrop-blur-sm border border-white/5">
            Software Engineering Undergraduate @ <span className="text-white font-semibold border-b border-red-500 pb-1">LNBTI</span>. <br/>
            Building modern web applications and bridging Sri Lankan tech talent with the Japanese IT industry.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <span className="px-5 py-2 border border-gray-800 rounded-full text-sm hover:border-red-500 hover:text-red-400 transition-colors duration-300 bg-black/80 backdrop-blur-md cursor-default">
              💻 Full-Stack Developer
            </span>
            <span className="px-5 py-2 border border-gray-800 rounded-full text-sm hover:border-red-500 hover:text-red-400 transition-colors duration-300 bg-black/80 backdrop-blur-md cursor-default">
              🇯🇵 JLPT N4 (Studying)
            </span>
          </div>

          <a href="#projects" className="bg-white text-black px-8 py-3 rounded-full font-bold tracking-wide hover:bg-red-600 hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(220,38,38,0.3)] hover:shadow-[0_0_25px_rgba(220,38,38,0.6)] hover:-translate-y-1">
            Explore My Work
          </a>
        </section>


        {/* --- 2. PROJECTS SECTION (BENTO BOX) --- */}
        <section id="projects" className="max-w-6xl mx-auto px-4 py-20 border-t border-white/5">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-2 drop-shadow-md">Selected Works <span className="text-red-500">.</span></h2>
            <p className="text-gray-500">A collection of my recent university and personal projects.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {projects.map((project) => (
              <div key={project.id} className={`p-6 md:p-8 rounded-3xl border border-[#222] transition-all duration-500 flex flex-col justify-between overflow-hidden relative bg-black/40 backdrop-blur-md ${project.style}`}>
                
                <div className="z-10">
                  {/* Image හෝ Video එක පෙන්නන කොටස */}
                  {(project.image || project.video) && (
                    <div className="w-full h-48 md:h-64 mb-6 rounded-xl overflow-hidden border border-white/10 relative shadow-lg">
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all z-10 pointer-events-none"></div>
                      
                      {project.video ? (
                        <video 
                          src={project.video} 
                          poster={project.image} 
                          autoPlay={true} 
                          loop={true} 
                          muted={true} 
                          playsInline={true}
                          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                        >
                          <source src={project.video} type="video/mp4" />
                        </video>
                      ) : (
                        <img 
                          src={project.image} 
                          alt={project.title} 
                          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                        />
                      )}
                    </div>
                  )}

                  <h3 className="text-2xl font-bold mb-3 text-gray-100 group-hover:text-white transition-colors drop-shadow-md">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                <div className="z-10 mt-auto pt-4">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((techItem, index) => (
                      <span key={index} className="text-xs font-medium px-3 py-1 bg-black/80 backdrop-blur-md border border-white/10 rounded-md text-gray-300">
                        {techItem}
                      </span>
                    ))}
                  </div>
                  
                  {/* Links Buttons */}
                  <div className="flex items-center gap-6">
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm font-semibold text-gray-500 hover:text-white transition-colors">
                      View Source <span className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">↗</span>
                    </a>
                    
                    {project.liveLink && (
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm font-bold text-red-400 hover:text-red-300 transition-colors">
                        Live Demo <span className="ml-2">🌐</span>
                      </a>
                    )}
                  </div>
                </div>
                
                {/* Dynamic Background Glow Effect */}
                <div className={`absolute -bottom-20 -right-20 w-64 h-64 blur-[100px] opacity-10 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none ${project.glow}`}></div>
              </div>
            ))}
          </div>
        </section>


        {/* --- 3. SKILLS / TECH STACK SECTION --- */}
        <section className="max-w-6xl mx-auto px-4 py-20 border-t border-white/5">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-2 drop-shadow-md">Tech Arsenal <span className="text-red-500">.</span></h2>
            <p className="text-gray-500">Technologies and tools I use to bring ideas to life.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skillGroup, index) => (
              <div key={index} className="p-6 rounded-2xl bg-black/50 backdrop-blur-md border border-[#222] hover:border-gray-500 transition-colors duration-300">
                <h3 className="text-lg font-semibold text-white mb-4 border-b border-[#333] pb-2">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((item, i) => (
                    <span key={i} className="text-sm text-gray-400 bg-black/80 px-3 py-1 rounded-full border border-[#333]">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>


        {/* --- 4. CONTACT & FOOTER SECTION --- */}
        <section className="max-w-6xl mx-auto px-4 py-20 border-t border-white/5 text-center">
          <p className="text-red-500 text-sm font-medium tracking-widest mb-4">連絡しましょう (Let's Connect)</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">Get In Touch</h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-10">
            I'm currently looking for internship and associate opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          
          {/* Contact Links with WhatsApp */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mb-20">
            
            {/* WhatsApp Button */}
            <a 
              href="https://wa.me/94771869132?text=Hello%20Avindu,%20I%20saw%20your%20portfolio%20website!" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-3 bg-[#25D366] text-white font-bold rounded-full hover:bg-[#128C7E] transition-colors duration-300 w-full sm:w-auto shadow-[0_0_15px_rgba(37,211,102,0.3)] hover:shadow-[0_0_25px_rgba(37,211,102,0.6)] hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              Say Hello on WhatsApp
            </a>

            <a href="https://linkedin.com/in/avindu-oshan-a7732a321/" target="_blank" rel="noopener noreferrer" className="px-8 py-3 bg-black/50 backdrop-blur-md text-white border border-gray-600 font-bold rounded-full hover:border-white transition-colors duration-300 w-full sm:w-auto">
              LinkedIn
            </a>
            <a href="https://github.com/avinduoshan1" target="_blank" rel="noopener noreferrer" className="px-8 py-3 bg-black/50 backdrop-blur-md text-white border border-gray-600 font-bold rounded-full hover:border-white transition-colors duration-300 w-full sm:w-auto">
              GitHub
            </a>
          </div>

          {/* Footer */}
          <footer className="text-gray-600 text-sm flex flex-col md:flex-row justify-between items-center bg-black/20 p-6 rounded-2xl border border-white/5">
            <p>© {new Date().getFullYear()} Avindu Oshan. All rights reserved.</p>
            <p className="mt-2 md:mt-0">Built with Next.js & Tailwind CSS</p>
          </footer>
        </section>

      </div>
    </main>
  );
}