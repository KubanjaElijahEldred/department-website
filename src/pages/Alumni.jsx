import { Link } from 'react-router-dom'
import {
  aboutHeroImage,
  alumniLogoImage,
  campusBuildingImage,
  staffHeroAltImage,
  staffHeroImage,
} from '../assets/images'

const Alumni = () => {
  // We use inline custom colors to perfectly match the mockup palette
  const theme = {
    bg: 'bg-primary-50', // Main background
    bgLighter: 'bg-white', // Slightly lighter band
    dark: 'bg-primary-900', // Dark blue
    textDark: 'text-primary-900',
    red: 'bg-accent-500', // Orange block
    textRed: 'text-accent-600',
  };

  const portraits = [
    staffHeroImage,
    staffHeroAltImage,
    alumniLogoImage,
    staffHeroImage, // reusing for grid fill
    staffHeroAltImage,
    alumniLogoImage,
    staffHeroImage
  ];

  return (
    <div className={`min-h-screen ${theme.bg} font-sans overflow-x-hidden`}>
      
      {/* 1. Hero Section */}
      <section className="relative w-full max-w-7xl mx-auto pt-12 sm:pt-16 pb-8 px-4 sm:px-6 lg:px-8">
        
        {/* Alumni Logo Area (Top Left) */}
        <div className="mb-6 sm:mb-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <img src={alumniLogoImage} alt="Bugema Logo" className="w-10 h-10 sm:w-12 sm:h-12 object-contain" />
            <div className="flex-1">
              <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold leading-none text-primary-900">Alumni</h1>
              <p className="font-sans font-bold text-[10px] sm:text-xs tracking-[0.2em] text-primary-900">ASSOCIATION</p>
            </div>
            <div className="border-l border-primary-300 pl-4 flex flex-col justify-center">
              <span className="text-[8px] sm:text-[10px] uppercase tracking-widest text-primary-600 font-semibold">Bugema National</span>
              <span className="text-[8px] sm:text-[10px] uppercase tracking-widest text-primary-600 font-semibold">University</span>
            </div>
          </div>
        </div>

        {/* Hero Image & Dark Box Container */}
        <div className="relative w-full flex justify-end">
          {/* Main Hero Background Image (Right aligned) */}
          <div className="w-full md:w-4/5 h-[300px] sm:h-[400px] md:h-[500px] relative overflow-hidden">
             <img src={campusBuildingImage} alt="Graduates" className="w-full h-full object-cover object-top" />
          </div>

          {/* Overlapping Dark Box */}
          <div className={`absolute top-8 sm:top-12 left-0 md:left-[10%] w-[95%] md:w-[85%] lg:w-[450px] ${theme.dark} p-6 sm:p-8 lg:p-10 shadow-2xl z-10`}>
            <h2 className="text-primary-200 text-xl sm:text-2xl md:text-3xl lg:text-4xl uppercase tracking-[0.3em] font-light leading-snug break-words">
              Keeping<br/>
              Connection<br/>
              Between Old<br/>
              And Young
            </h2>
            
            {/* Slider arrows embedded in bottom right of dark box */}
            <div className="absolute bottom-2 sm:bottom-0 right-0 flex">
              <button className="w-8 h-8 sm:w-10 sm:h-10 bg-primary-800 text-white flex items-center justify-center hover:bg-primary-950 transition-colors">
                <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
              </button>
              <button className="w-8 h-8 sm:w-10 sm:h-10 bg-primary-100 text-primary-900 flex items-center justify-center hover:bg-white transition-colors">
                <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </button>
            </div>
          </div>
        </div>

        {/* Buttons below hero */}
        <div className="flex flex-wrap gap-3 sm:gap-4 mt-6 sm:mt-8 lg:-mt-12 relative z-20 md:ml-[10%]">
          <button onClick={() => window.location.href = '/register'} className={`border-[3px] border-primary-900 ${theme.textDark} font-bold px-4 py-2.5 text-xs tracking-widest uppercase flex items-center gap-3 hover:bg-primary-900 hover:text-white transition-colors flex-1 min-w-[120px] justify-center`}>
            JOIN US <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          </button>
          <button onClick={() => window.location.href = '/login'} className={`border-[3px] border-primary-900 ${theme.textDark} font-bold px-4 py-2.5 text-xs tracking-widest uppercase flex items-center gap-3 hover:bg-primary-900 hover:text-white transition-colors flex-1 min-w-[120px] justify-center`}>
            LOG IN <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
          </button>
        </div>
      </section>

      {/* 2. Red Sub-Navbar Full Width Container */}
      <div className="w-full flex">
         {/* Offset to align with center content wrapper if needed, but mockup shows it fully stretching left-to-right inside the main block. We'll make it stretch max width of content. */}
      </div>
      <section className="w-full max-w-6xl mx-auto px-4 sm:px-8">
        <div className="flex flex-wrap w-full gap-2 sm:gap-4">
          <Link to="/programs" className="flex-1 min-w-[120px] bg-accent-600 text-white text-[10px] sm:text-xs font-bold uppercase tracking-widest px-2 sm:px-4 py-3 hover:bg-accent-700 transition-colors whitespace-nowrap">by class &gt;</Link>
          <Link to="/about" className="flex-1 min-w-[120px] bg-accent-500 text-white text-[10px] sm:text-xs font-bold uppercase tracking-widest px-2 sm:px-4 py-3 hover:bg-accent-600 transition-colors whitespace-nowrap">by graduate alumni &gt;</Link>
          <Link to="/contact" className="flex-1 min-w-[120px] bg-accent-400 text-white text-[10px] sm:text-xs font-bold uppercase tracking-widest px-2 sm:px-4 py-3 hover:bg-accent-500 transition-colors whitespace-nowrap">by region &gt;</Link>
          <Link to="/news" className="flex-1 min-w-[120px] bg-accent-300 text-white text-[10px] sm:text-xs font-bold uppercase tracking-widest px-2 sm:px-4 py-3 hover:bg-accent-400 transition-colors whitespace-nowrap">by affiliate group &gt;</Link>
        </div>
      </section>

      {/* 3. Welcome Section */}
      <section className="w-full max-w-6xl mx-auto py-16 px-4 sm:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Welcome Text */}
        <div>
          <h2 className={`font-serif text-4xl font-bold ${theme.textDark} mb-4`}>Welcome!</h2>
          <p className="text-xs ${theme.textDark} opacity-80 leading-relaxed mb-6">
            Praesent vestibulum aenean nonummy hendrerit mauris. Cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Nulla dui. Fusce feugiat malesuada odio. Morbi nunc odio gravida at cursus nec luctus a lorem.
          </p>
          <button onClick={() => window.location.href = '/register'} className={`${theme.dark} text-white font-bold text-[10px] uppercase tracking-widest px-4 py-3 hover:bg-primary-950 transition-colors flex items-center`}>
            DONATE NOW! <span className={`${theme.red} ml-4 p-1 rounded-sm`}><svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg></span>
          </button>
        </div>

        {/* Menu Blocks */}
        <div className="flex flex-col gap-1">
            {['GENERATIONAL GROUPS', 'ALUMNAE (WOMEN\'S) GROUPS', 'MULTICULTURAL ASSOCIATIONS', 'U.S. REGIONAL CLUBS', 'CAMPUS-BASED GROUPS', 'INTERNATIONAL CLUBS'].map((item, idx) => (
            <Link key={idx} to={item === 'GENERATIONAL GROUPS' ? '/programs' : item === 'ALUMNAE (WOMEN\'S) GROUPS' ? '/about' : '#'} className={`${theme.dark} text-white text-[10px] font-bold uppercase tracking-widest px-4 py-3 hover:bg-primary-950 transition-colors flex items-center`}>
               <span className="w-1.5 h-1.5 bg-white mr-3"></span> {item}
            </Link>
          ))}
          <Link to="#" className={`${theme.textRed} text-[10px] uppercase tracking-widest font-bold mt-2`}>view more</Link>
        </div>

        {/* Image/Video block */}
        <div className="flex flex-col">
          <div className="relative w-full h-40 bg-gray-300 mb-4 overflow-hidden group cursor-pointer">
            <img src={aboutHeroImage} alt="Video thumbnail" className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500" />
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white flex items-center justify-center rounded-sm shadow-md group-hover:bg-[#f0f0f0]`}>
              <svg className={`w-5 h-5 ${theme.textDark} ml-1`} fill="currentColor" viewBox="0 0 20 20"><path d="M4 4l12 6-12 6z" /></svg>
            </div>
          </div>
          <h3 className={`${theme.textRed} uppercase text-[10px] font-bold tracking-widest`}>SPRING 2014 OUTSTANDING LEADERSHIP AWARDS</h3>
        </div>
      </section>

      {/* 4. Alumni Weekend Banner */}
      <section className={`${theme.bgLighter} w-full py-12`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div>
            <h2 className={`font-serif text-3xl font-bold ${theme.textRed} leading-tight`}>Alumni<br/>Weekend</h2>
            <p className={`${theme.textRed} font-bold text-sm tracking-widest mt-1`}>May 24-27</p>
          </div>
          <div className="md:col-span-1">
            <p className={`${theme.textRed} text-sm font-bold leading-relaxed`}>
              Here is your chance to get reconnected with campus, visit with old classmates and make new friends, while remembering your days ...
            </p>
          </div>
          <div className="flex justify-start md:justify-end">
             <button onClick={() => window.location.href = '/register'} className={`${theme.red} text-white font-bold text-[10px] uppercase tracking-widest px-6 py-4 hover:bg-accent-600 transition-colors`}>
               SIGN UP<br/>NOW!
             </button>
          </div>
        </div>
      </section>

      {/* 5. Proud of / Updates Grid */}
      <section className="w-full max-w-6xl mx-auto py-16 px-4 sm:px-8 grid grid-cols-1 md:grid-cols-12 gap-12">
        
        {/* We are proud of (Left 7 cols) */}
        <div className="md:col-span-7">
          <h2 className={`font-serif text-2xl sm:text-3xl font-bold ${theme.textDark} mb-6 sm:mb-8`}>We are proud of:</h2>
          <div className="grid grid-cols-3 gap-0 border border-primary-200">
            {/* Cell 1: Red box */}
            <div className={`${theme.red} p-2 sm:p-4 flex flex-col items-center justify-center text-center aspect-square`}>
              <span className="text-white font-bold text-[8px] sm:text-[10px] uppercase tracking-[0.2em]">KITUMBA<br/>DAVID</span>
              <span className="text-white text-[8px] sm:text-[10px] uppercase tracking-[0.2em] mt-1 opacity-80">(Lawyer)</span>
            </div>
            {/* Image Cells (2-8) */}
            {[...Array(7)].map((_, idx) => (
              <div key={idx} className="aspect-square bg-gray-200 overflow-hidden">
                <img src={portraits[idx]} alt={`Alumni ${idx}`} className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-300" />
              </div>
            ))}
            {/* Cell 9: Dark box */}
            <div className={`${theme.dark} flex items-center justify-center text-center aspect-square cursor-pointer hover:bg-primary-950 transition-colors`}>
              <span className="text-primary-200 font-bold text-[8px] sm:text-[10px] uppercase tracking-[0.2em]">VIEW<br/>MORE</span>
            </div>
          </div>
        </div>

        {/* Our updates (Right 5 cols) */}
        <div className="md:col-span-5">
          <h2 className={`font-serif text-2xl sm:text-3xl font-bold ${theme.textDark} mb-6 sm:mb-8`}>Our updates:</h2>
          <div className="flex flex-col gap-6 sm:gap-8">
            {["May 25", "May 20", "May 15"].map((date, idx) => (
              <div key={idx} className="flex flex-col items-start border-l border-primary-200 pl-4 -ml-[1px]">
                <h3 className={`${theme.textRed} font-bold text-sm tracking-widest mb-2`}>{date}</h3>
                <p className="text-xs text-primary-900 opacity-80 leading-relaxed mb-4">
                  Praesent vestibulum aenean nonummy hendrerit mauris. Cum sociis natoque penatibus et magnis dis parturient montes.
                </p>
                <div className="flex gap-2">
                  <button onClick={() => window.location.href = '/register'} className={`${theme.red} text-white font-bold text-[8px] uppercase tracking-widest px-3 py-2 hover:bg-accent-600 transition-colors`}>
                    SIGN UP NOW!
                  </button>
                  <button className={`${theme.bgLighter} flex items-center justify-center px-2 hover:bg-white transition-colors`}>
                    <svg className={`w-3 h-3 ${theme.textDark}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  </button>
                </div>
              </div>
            ))}
            <Link to="#" className={`${theme.textRed} text-[10px] uppercase tracking-widest font-bold mt-2 ml-4`}>view more</Link>
          </div>
        </div>

      </section>

      {/* Faint Footer Line (matches mockup) */}
      <footer className={`${theme.bgLighter} border-t border-primary-200 py-8 sm:py-12`}>
         <div className="w-full max-w-6xl mx-auto px-4 sm:px-8 flex flex-col lg:flex-row justify-between items-start gap-8">
            <div className="flex flex-col justify-center items-center lg:items-start">
               <img src={alumniLogoImage} alt="Bugema Logo" className="w-10 h-10 sm:w-12 sm:h-12 mb-2 object-contain opacity-50 grayscale" />
               <h1 className="font-serif text-lg sm:text-xl font-bold leading-none text-primary-900">Alumni</h1>
               <p className="font-sans font-bold text-[8px] sm:text-[10px] tracking-[0.2em] text-primary-900">ASSOCIATION</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-8 sm:gap-16">
              <ul className="flex flex-col gap-2">
                <li><Link to="#" className={`${theme.textRed} text-[10px] uppercase font-bold tracking-widest hover:underline`}>› update your info</Link></li>
                <li><Link to="#" className={`${theme.textRed} text-[10px] uppercase font-bold tracking-widest hover:underline`}>› Transcripts</Link></li>
                <li><Link to="#" className={`${theme.textRed} text-[10px] uppercase font-bold tracking-widest hover:underline`}>› Student Loans</Link></li>
                <li><Link to="#" className={`${theme.textRed} text-[10px] uppercase font-bold tracking-widest hover:underline`}>› Diplomas</Link></li>
              </ul>
              <ul className="flex flex-col gap-2">
                <li><Link to="/about" className={`${theme.textRed} text-[10px] uppercase font-bold tracking-widest hover:underline`}>› University</Link></li>
                <li><Link to="/news" className={`${theme.textRed} text-[10px] uppercase font-bold tracking-widest hover:underline`}>› Alumni Weekly</Link></li>
                <li><Link to="/contact" className={`${theme.textRed} text-[10px] uppercase font-bold tracking-widest hover:underline`}>› Career Services</Link></li>
              </ul>
            </div>

            <div className="w-full sm:w-auto">
              <h3 className={`${theme.textDark} text-xs font-bold uppercase tracking-widest mb-4 text-center sm:text-left`}>Newsletter:</h3>
              <div className="flex gap-2">
                 <input type="email" placeholder="Enter your email" className="bg-primary-100 text-primary-900 border-none text-[10px] px-3 py-2 flex-1 w-full sm:w-48 placeholder:text-primary-400 focus:ring-0 outline-none" />
                 <button className={`${theme.red} flex items-center justify-center px-3 hover:bg-accent-600 transition-colors`}>
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                 </button>
              </div>
            </div>
         </div>
      </footer>
    </div>
  )
}

export default Alumni
