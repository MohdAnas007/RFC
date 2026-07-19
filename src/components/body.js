import React from 'react';
import Link from 'next/link'; 
function Body() {
  return (
    <div className="bg-zinc-50 text-zinc-900 min-h-screen font-sans selection:bg-amber-200 selection:text-amber-900">
      
      {/* Decorative background element */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-100 rounded-full blur-[120px] opacity-30 -translate-y-1/2 translate-x-1/3"></div>
      </div>

      <main className="relative max-w-6xl mx-auto px-6 py-20 md:py-32 space-y-32">
        
        {/* --- HERO SECTION --- */}
        <section className="text-center max-w-4xl mx-auto space-y-8">
          <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-amber-600 uppercase bg-amber-50 px-4 py-1.5 rounded-full border border-amber-200/60 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
            Empowering Minds, Shaping Futures
          </span>
          
          <h2 className="text-5xl md:text-7xl font-black tracking-tight text-zinc-900 leading-[1.1] text-balance">
            Foundation to Excellence, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">
              All Under One Roof.
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-zinc-600 leading-relaxed max-w-2xl mx-auto">
            Welcome to <strong className="text-zinc-900 font-semibold">RFC Coaching Classes</strong>. 
            We build unbreakable fundamentals early on, converting curiosity into academic mastery.
          </p>

          {/* --- BUTTONS CONTAINER --- */}
          {/* flex-col stacks them on mobile, sm:flex-row puts them side-by-side on bigger screens */}
          <div className="pt-6 flex flex-col sm:flex-row justify-center items-center gap-4">
            
            {/* Students Button (Secondary Action) */}
            <a 
              href="/students" 
              className="group w-full sm:w-auto relative inline-flex items-center justify-center gap-3 px-8 py-4 font-bold text-zinc-900 transition-all duration-300 bg-white border-2 border-zinc-900 rounded-full hover:bg-zinc-50 hover:shadow-lg hover:shadow-zinc-900/10 active:scale-95 overflow-hidden"
            >
              <span className="relative z-10">Meet Our Students</span>
              <svg 
                className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </a>

            {/* Register Button (Primary Action) */}
            <a 
              href="/register" 
              className="group w-full sm:w-auto relative inline-flex items-center justify-center gap-3 px-8 py-4 font-bold text-white transition-all duration-300 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full hover:shadow-lg hover:shadow-amber-500/30 active:scale-95 overflow-hidden"
            >
              <span className="relative z-10">Register Now</span>
              <svg 
                className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
              {/* Shine effect on hover */}
              <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
            </a>

          </div>
        </section>

        {/* --- OUR PROGRAMS GRID (UPGRADED CARDS) --- */}
        <section className="space-y-12">
          <div className="text-center space-y-3">
            <h3 className="text-3xl md:text-4xl font-extrabold text-zinc-900">Structured Excellence</h3>
            <p className="text-zinc-500">Tailored learning strategies built for every developmental stage.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { num: "01", title: "Primary Foundation", grades: "Classes 1st – 5th", desc: "Focusing on fundamental numeracy, reading habits, and logical thinking. Interactive and stress-free." },
              { num: "02", title: "Middle School Core", grades: "Classes 6th – 8th", desc: "Transitioning into deeper concepts in Math and Science. Bridging the gap to analytical thinking." },
              { num: "03", title: "Senior Board & Beyond", grades: "Classes 9th – 12th", desc: "Rigorous academic prep for Board Exams. Concept crystallization and competitive aptitude mastery." }
            ].map((program, idx) => (
              
              <div key={idx} className="group relative bg-white rounded-3xl border border-zinc-200 shadow-sm hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-500 hover:-translate-y-2 overflow-hidden flex flex-col h-full">
                
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-amber-400 to-orange-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"></div>

                <div className="p-8 flex flex-col flex-grow">
                  
                  <div className="flex items-start justify-between mb-8">
                    <div className="h-12 w-12 rounded-2xl bg-amber-50 flex items-center justify-center border border-amber-100 group-hover:scale-110 transition-transform duration-500">
                      <span className="text-amber-600 font-bold text-lg">{program.num}</span>
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-amber-700 bg-amber-50 px-3 py-1.5 rounded-full border border-amber-200/60 shadow-sm">
                      {program.grades}
                    </span>
                  </div>

                  <div className="flex-grow">
                    <h4 className="text-xl font-extrabold text-zinc-900 mb-3">{program.title}</h4>
                    <p className="text-sm text-zinc-500 leading-relaxed">{program.desc}</p>
                  </div>

                  <div className="mt-8 pt-5 border-t border-zinc-100 flex items-center text-sm font-bold text-zinc-900 group-hover:text-amber-600 transition-colors duration-300">
                    Explore program
                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                  
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- WHY RFC PILLARS --- */}
        <section className="bg-zinc-900 text-white rounded-[2rem] p-10 md:p-16 grid md:grid-cols-3 gap-12 md:gap-8 items-start border border-zinc-800 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-800/50 to-transparent"></div>
          
          {[
            { title: "Expert Mentorship", desc: "Experienced educators dedicated to tracking and uplifting individual progress metrics." },
            { title: "Regular Assessments", desc: "Weekly mock assignments and thorough evaluation patterns to ensure concept retention." },
            { title: "Small Batch Advantage", desc: "Controlled capacity to ensure every single query gets addressed in real-time." }
          ].map((pillar, idx) => (
            <div key={idx} className="relative space-y-3">
              <h5 className="text-xl font-bold tracking-tight">{pillar.title}</h5>
              <p className="text-sm text-zinc-400 leading-relaxed">{pillar.desc}</p>
            </div>
          ))}
        </section>

      </main>
    </div>
  );
}

export default Body;