import { Link } from 'react-router-dom'
import useTypewriter from '../hooks/useTypewriter'

const Home = () => {
  const typewriterText = useTypewriter([
    'Department Of Computing',
    'Driving Digital Transformation',
    'Shaping The Future Of Tech'
  ], 80, 50, 2500);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-primary-900 overflow-hidden relative">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary-600 text-white px-4 py-2 rounded-md z-50">
        Skip to main content
      </a>

      {/* --- HERO SECTION: SWEEPING CURVES LAYOUT --- */}
      <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-white">
        
        {/* RIGHT SIDE ABSTRACT SWEEPS */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          
          {/* Secondary Light Blue Swoosh (Mimics the orange swoosh from the design) */}
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute top-0 right-0 w-[150%] h-[150%] lg:w-[120%] lg:h-[130%] transform origin-top-right translate-x-[10%] -translate-y-[10%]">
             <path 
               d="M 50,0 C 70,45 20,70 -10,100 L 100,100 L 100,0 Z" 
               fill="url(#lightGradient)" 
             />
             <defs>
                <linearGradient id="lightGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                   <stop offset="0%" stopColor="#90b4d7" /> {/* primary-300 */}
                   <stop offset="100%" stopColor="#3a71aa" /> {/* primary-500 */}
                </linearGradient>
             </defs>
          </svg>

          {/* Primary Dark Blue Swoosh (Mimics the dark gray swoosh from the design) */}
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute top-0 right-0 w-[140%] h-[140%] lg:w-[110%] lg:h-[120%] transform origin-top-right translate-x-[15%] -translate-y-[5%] shadow-[-20px_0_50px_rgba(0,0,0,0.3)]">
             <path 
               d="M 60,0 C 80,45 25,65 -5,100 L 100,100 L 100,0 Z" 
               fill="#0f355c" 
             />
          </svg>

        </div>

        {/* LEFT SIDE BIG RING / C-SHAPE */}
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-[40%] lg:-translate-x-[25%] w-[600px] h-[600px] lg:w-[800px] lg:h-[800px] z-10 pointer-events-none flex items-center justify-center">
           
           {/* Inner Image Background (Clear) */}
           <div className="absolute inset-2 lg:inset-4 rounded-full overflow-hidden z-0 shadow-inner">
              <img src="/src/assets/images/image copy 2.png" alt="Campus" className="w-full h-full object-cover object-center" />
           </div>

           {/* The thick outer ring */}
           <div className="absolute inset-0 rounded-full border-[15px] lg:border-[25px] border-transparent border-t-primary-500 border-r-primary-700 border-b-primary-800 rotate-[-15deg] opacity-90 shadow-2xl z-20"></div>
        </div>
        {/* An inner thinner ring to add depth */}
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-[35%] lg:-translate-x-[20%] w-[550px] h-[550px] lg:w-[750px] lg:h-[750px] z-10 pointer-events-none">
           <div className="w-full h-full rounded-full border-[2px] border-transparent border-r-primary-400 border-b-primary-500 rotate-[15deg] opacity-50"></div>
        </div>

        {/* HERO CONTENT */}
        <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between h-full pt-20 pb-10">
          
          {/* Left Content (Inside the virtual circle) */}
          <div className="w-full lg:w-1/2 pl-0 lg:pl-16 mb-16 lg:mb-0 order-2 lg:order-1">
             <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mb-6 justify-center sm:justify-start">
                {/* Hexagon Logo container to match "Media" logo from design (which is a hexagon) */}
                <div className="relative w-20 h-24 sm:w-24 sm:h-28 hidden sm:flex items-center justify-center drop-shadow-xl">
                   {/* CSS Hexagon representation via clip-path */}
                   <div className="absolute inset-0 bg-white border-4 border-primary-900 shadow-xl" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)', padding: '4px' }}>
                      <div className="w-full h-full bg-white flex items-center justify-center" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
                         <svg className="w-8 h-8 sm:w-10 sm:h-10 text-primary-500" fill="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                      </div>
                   </div>
                </div>
                
                <div className="text-center sm:text-left">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-primary-900 tracking-tight leading-none drop-shadow-[0_2px_4px_rgba(255,255,255,0.8)]">Bugema</h1>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary-900 opacity-90 tracking-wide mt-1 drop-shadow-[0_2px_4px_rgba(255,255,255,0.8)]">University</h2>
                </div>
             </div>
             
             <div className="pl-0 sm:pl-[120px] text-center sm:text-left">
                <h3 className="text-lg sm:text-xl md:text-2xl text-primary-500 font-bold uppercase tracking-[0.2em] mb-4 drop-shadow-[0_2px_4px_rgba(255,255,255,0.8)]">
                  IT Department
                </h3>
                <div className="mb-10 inline-block shadow-lg border border-white/60 bg-white/80 px-6 sm:px-8 py-3 sm:py-4 rounded-2xl backdrop-blur-md">
                  <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-primary-900 font-black tracking-wide">
                    {typewriterText}<span className="animate-pulse text-accent-500">|</span>
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center sm:justify-start">
                  <Link to="/programs" className="bg-primary-900 text-white px-6 sm:px-8 py-3 rounded-full font-bold uppercase tracking-wider text-sm shadow-[0_10px_20px_rgba(15,53,92,0.3)] hover:bg-primary-800 transition-colors">
                     Programs
                  </Link>
                  <Link to="/contact" className="bg-white border-2 border-primary-200 text-primary-900 px-6 sm:px-8 py-3 rounded-full font-bold uppercase tracking-wider text-sm hover:border-primary-500 transition-colors">
                     Connect
                  </Link>
                </div>
             </div>
          </div>

          {/* Right Content / CTA embedded in dark swoop */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end items-end h-[50vh] lg:h-auto pb-10 lg:pb-0 pr-4 lg:pr-12 pointer-events-auto order-1 lg:order-2">
             <div className="text-center lg:text-right">
                <Link to="/admissions" className="inline-flex items-center gap-3 text-white/90 hover:text-white group transition-colors">
                   <span className="font-mono text-xs sm:text-sm tracking-widest uppercase mb-1 border-b border-white/30 pb-1 group-hover:border-white transition-colors">
                      www.bugemauniv.ac.ug
                   </span>
                   <svg className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </Link>
             </div>
          </div>

        </div>
      </section>

      {/* --- CONTENT SECTION: Maintaining the Swoosh Motif --- */}
      {/* We alternate backgrounds with curved SVG dividers to keep the aesthetic alive down the page */}
      <section id="main-content" className="relative py-24 bg-primary-900 text-white z-20">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
               <div>
                  <h2 className="text-4xl font-black mb-6 uppercase tracking-wider relative inline-block">
                     Academic Excellence
                     <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-primary-500"></span>
                  </h2>
                  <p className="text-primary-200 text-lg leading-relaxed mb-8">
                     Our state-of-the-art facilities empower students with cloud infrastructure, cybersecurity labs, and big data clusters to innovate beyond borders.
                  </p>
                  <div className="grid grid-cols-2 gap-6">
                     <div className="border-l-4 border-primary-500 pl-4 py-2">
                        <div className="text-4xl font-black text-white mb-1">12+</div>
                        <div className="text-xs text-primary-300 uppercase tracking-widest font-bold">Modern Facilities</div>
                     </div>
                     <div className="border-l-4 border-primary-500 pl-4 py-2">
                        <div className="text-4xl font-black text-white mb-1">24/7</div>
                        <div className="text-xs text-primary-300 uppercase tracking-widest font-bold">Lab Access</div>
                     </div>
                  </div>
               </div>
               
               <div className="relative">
                  {/* Image container styled as a rounded offset shape */}
                  <div className="relative z-10 rounded-tr-[4rem] rounded-bl-[4rem] border-4 border-primary-700 overflow-hidden shadow-2xl bg-white">
                     <img src="/src/assets/images/about-hero.jpg.jpeg" alt="Library" className="w-full aspect-[4/3] object-cover opacity-90 mix-blend-multiply" />
                  </div>
                  {/* Decorative swoop behind image */}
                  <div className="absolute -top-10 -right-10 w-full h-full rounded-tr-[5rem] rounded-bl-[5rem] bg-gradient-to-tr from-primary-800 to-primary-600 z-0"></div>
               </div>
            </div>
         </div>
      </section>

      {/* Another section transitioning back to white with a curve */}
      <section className="relative pt-32 pb-24 bg-white z-10">
         {/* Curve Divider */}
         <div className="absolute top-0 left-0 w-full overflow-hidden" style={{ transform: 'translateY(-99%)' }}>
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-[100px] lg:h-[150px]">
               <path d="M0,100 C 30,0 70,0 100,100 Z" fill="#ffffff" />
            </svg>
         </div>

         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-3xl md:text-5xl font-black text-primary-900 uppercase tracking-tight mb-8">
               Shape Your Future In Tech
            </h2>
            <p className="text-primary-600 text-base md:text-lg font-medium max-w-2xl mx-auto mb-12 leading-relaxed">
               Whether you're pursuing a Bachelor's or a Master's degree, Bugema makes it fast, secure, and accessible to shape your IT career.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-left">
               <div className="bg-slate-50 border border-slate-100 rounded-2xl p-8 hover:shadow-xl transition-shadow group relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-primary-100 rounded-bl-full -z-10 group-hover:scale-110 transition-transform"></div>
                  <h3 className="text-xl font-black text-primary-900 mb-3 uppercase tracking-wide">Software Eng.</h3>
                  <p className="text-sm text-primary-600 mb-6">Master the lifecycle of software development using modern tools.</p>
                  <Link to="/programs" className="text-xs font-bold text-primary-500 uppercase tracking-widest group-hover:text-primary-800 transition-colors">Explore &rarr;</Link>
               </div>
               <div className="bg-slate-50 border border-slate-100 rounded-2xl p-8 hover:shadow-xl transition-shadow group relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-primary-100 rounded-bl-full -z-10 group-hover:scale-110 transition-transform"></div>
                  <h3 className="text-xl font-black text-primary-900 mb-3 uppercase tracking-wide">Cybersecurity</h3>
                  <p className="text-sm text-primary-600 mb-6">Protect critical infrastructure and data against evolving digital threats.</p>
                  <Link to="/programs" className="text-xs font-bold text-primary-500 uppercase tracking-widest group-hover:text-primary-800 transition-colors">Explore &rarr;</Link>
               </div>
               <div className="bg-slate-50 border border-slate-100 rounded-2xl p-8 hover:shadow-xl transition-shadow group relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-primary-100 rounded-bl-full -z-10 group-hover:scale-110 transition-transform"></div>
                  <h3 className="text-xl font-black text-primary-900 mb-3 uppercase tracking-wide">Data Science</h3>
                  <p className="text-sm text-primary-600 mb-6">Harness big data and analytics to drive institutional decision making.</p>
                  <Link to="/programs" className="text-xs font-bold text-primary-500 uppercase tracking-widest group-hover:text-primary-800 transition-colors">Explore &rarr;</Link>
               </div>
            </div>

            <div className="mt-16">
               <Link to="/register" className="inline-block bg-primary-900 text-white text-xs font-black uppercase tracking-widest border border-primary-900 rounded-full py-4 px-12 hover:bg-white hover:text-primary-900 transition-colors shadow-[0_10px_30px_rgba(15,53,92,0.2)]">
                  Apply Now
               </Link>
            </div>
         </div>
      </section>

    </div>
  )
}

export default Home
