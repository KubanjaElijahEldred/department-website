import { useState } from 'react'
import { Link } from 'react-router-dom'
import { departmentLogoImage } from '../assets/images'

const Admissions = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    program: '',
    phone: '',
    message: '',
    academicDocuments: null,
    identification: null
  })

  const handleInputChange = (e) => {
    const { name, value, files } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: files ? files[0] : value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Handle form submission here
  }

  const programs = [
    'Bachelor of Information Technology',
    'Bachelor of Software Engineering',
    'Diploma in Information Technology',
    'Certificate in Computing'
  ]

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-primary-900">
      {/* 
        === FULL-SCREEN CONVEX CURVE HERO SECTION === 
        Background curves extended to viewport boundaries instead of a floating card.
      */}
      <section className="relative bg-white pt-24 pb-20 lg:pt-32 lg:pb-32 overflow-hidden min-h-[90vh] flex items-center shadow-sm">
         
         {/* --- FULL SCREEN BACKGROUND SHAPES --- */}
         {/* 1. Light Blue Outer Curve (Left) */}
         <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-[45%] md:-translate-x-[35%] w-[600px] h-[600px] md:w-[1200px] md:h-[1200px] bg-sky-50 rounded-full z-0 border border-sky-100/50"></div>
         
         {/* 2. Deep Blue Main Curve (Left) */}
         <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-[50%] md:-translate-x-[40%] w-[550px] h-[550px] md:w-[1000px] md:h-[1000px] bg-primary-600 rounded-full z-10 border-[12px] md:border-[24px] border-white shadow-[0_20px_50px_rgba(15,53,92,0.2)]">
           <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-500 to-primary-800"></div>
         </div>
         
         {/* 3. Faint blue watermarks (Right) */}
         <div className="absolute -top-32 -right-32 w-96 h-96 bg-sky-50 rounded-full z-0 opacity-50 border border-sky-100"></div>
         <div className="absolute -bottom-48 right-10 w-[500px] h-[500px] bg-sky-50 rounded-full z-0 opacity-40 border border-sky-100"></div>

         <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20 flex flex-col md:flex-row h-full items-center">
            
            {/* LEFT: Logo/Badge sitting inside the dark blue curve */}
            <div className="w-full md:w-5/12 flex flex-col items-center justify-center p-8 md:p-12 text-white min-h-[300px] md:min-h-[500px] relative">
               <div className="w-32 h-32 md:w-48 md:h-48 rounded-full flex items-center justify-center p-4 mb-6 z-20">
                  {/* Using the white border style around the logo to pop against the blue */}
                  <div className="absolute inset-4 md:inset-8 border-[6px] border-white/20 rounded-xl" style={{clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'}}></div>
                  <img src={departmentLogoImage} alt="Logo" className="w-24 h-24 md:w-36 md:h-36 object-contain filter drop-shadow-xl z-10 bg-white rounded-full p-2 border-4 border-white" />
               </div>
               <div className="text-center z-20">
                 <h2 className="text-4xl md:text-5xl font-black tracking-widest uppercase drop-shadow-md text-white">BUGEMA</h2>
                 <p className="text-primary-100 font-bold tracking-[0.3em] text-xs md:text-sm mt-3 uppercase">IT Department</p>
               </div>
            </div>

            {/* RIGHT: Main Text Content */}
            <div className="w-full md:w-7/12 py-12 px-8 md:px-16 lg:px-24 flex flex-col justify-center">
               
               <span className="inline-block self-start px-4 py-1.5 bg-sky-50 text-primary-600 font-black uppercase tracking-[0.2em] rounded-full text-[10px] md:text-xs mb-6 border border-sky-100 shadow-sm">
                 Admissions Guide
               </span>
               
               <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-primary-900 mb-6 uppercase tracking-tighter leading-[1]">
                 Join Our <br className="hidden lg:block" /> Next Generation
               </h1>
               
               <p className="text-sm md:text-base lg:text-lg text-primary-600 mb-10 leading-relaxed font-bold max-w-xl">
                 Clear application guidance, requirements, and support designed to help you succeed globally in the Bugema University IT Department.
               </p>
               
               <div className="flex flex-col sm:flex-row flex-wrap gap-4">
                  <a href="#how-to-apply" className="px-8 py-3.5 bg-primary-900 border border-primary-900 text-white rounded-full text-xs font-black uppercase tracking-widest hover:bg-primary-800 transition-all shadow-[0_10px_20px_rgba(15,53,92,0.2)] text-center flex items-center justify-center gap-2">
                     <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                     Start Application
                  </a>
                  <a href="#requirements" className="px-8 py-3.5 bg-white border border-slate-200 text-primary-900 rounded-full text-xs font-black uppercase tracking-widest hover:bg-slate-50 transition-all shadow-sm text-center">
                     View Requirements
                  </a>
               </div>
            </div>
         </div>
      </section>

      {/* --- How to Apply Blocks --- */}
      <section id="how-to-apply" className="py-24 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-primary-900 mb-4 uppercase tracking-tighter">
              Application Sequence
            </h2>
            <div className="w-16 h-1 bg-primary-500 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 lg:gap-8 relative">
            
            {/* Connecting Line (hidden on mobile) */}
            <div className="hidden md:block absolute top-[4.5rem] left-[15%] right-[15%] h-[2px] bg-slate-200 z-0 border-t border-dashed border-primary-500"></div>

            <div className="bg-slate-50 rounded-3xl p-8 lg:p-10 text-center shadow-[0_10px_30px_-15px_rgba(15,53,92,0.1)] border border-slate-100 relative z-10 hover:-translate-y-2 transition-transform duration-300 group">
              <div className="w-20 h-20 bg-primary-900 text-white rounded-2xl rotate-3 group-hover:rotate-0 transition-transform flex items-center justify-center mx-auto mb-8 shadow-lg border-[3px] border-white">
                <span className="text-2xl font-black transform -rotate-3 group-hover:rotate-0">1</span>
              </div>
              <h3 className="text-xl font-black text-primary-900 mb-3 uppercase tracking-wide">Select a Program</h3>
              <p className="text-sm text-primary-600 font-medium leading-relaxed">
                Review the certificate, diploma, and degree options to match your qualifications and long-term study goals.
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-3xl p-8 lg:p-10 text-center shadow-[0_10px_30px_-15px_rgba(15,53,92,0.1)] border border-slate-100 relative z-10 hover:-translate-y-2 transition-transform duration-300 group">
              <div className="w-20 h-20 bg-primary-500 text-white rounded-2xl -rotate-3 group-hover:rotate-0 transition-transform flex items-center justify-center mx-auto mb-8 shadow-lg border-[3px] border-white">
                <span className="text-2xl font-black transform rotate-3 group-hover:rotate-0">2</span>
              </div>
              <h3 className="text-xl font-black text-primary-900 mb-3 uppercase tracking-wide">Prepare Docs</h3>
              <p className="text-sm text-primary-600 font-medium leading-relaxed">
                Keep academic transcripts, identification, contact information, and supporting files ready for submission.
              </p>
            </div>
            
            <div className="bg-slate-50 rounded-3xl p-8 lg:p-10 text-center shadow-[0_10px_30px_-15px_rgba(15,53,92,0.1)] border border-slate-100 relative z-10 hover:-translate-y-2 transition-transform duration-300 group">
              <div className="w-20 h-20 bg-primary-900 text-white rounded-2xl rotate-3 group-hover:rotate-0 transition-transform flex items-center justify-center mx-auto mb-8 shadow-lg border-[3px] border-white">
                <span className="text-2xl font-black transform -rotate-3 group-hover:rotate-0">3</span>
              </div>
              <h3 className="text-xl font-black text-primary-900 mb-3 uppercase tracking-wide">Submit Details</h3>
              <p className="text-sm text-primary-600 font-medium leading-relaxed">
                Complete the application, upload required files, and contact the department if you need help processing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- Requirements and Timeline --- */}
      <section id="requirements" className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Requirements Box mimicking left card style */}
            <div className="bg-white rounded-[2rem] p-8 md:p-12 border border-slate-100 shadow-[0_20px_50px_-15px_rgba(15,53,92,0.1)] relative">
              <div className="absolute top-0 right-8 w-16 h-2 bg-primary-500 rounded-b-md"></div>
              <h2 className="text-2xl md:text-3xl font-black text-primary-900 mb-10 uppercase tracking-tight">Key Requirements</h2>
              <ul className="space-y-5">
                <li className="flex items-start bg-slate-50 p-4 rounded-2xl shadow-sm border border-slate-100">
                  <div className="w-10 h-10 rounded-full bg-white border border-primary-100 shadow flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-5 h-5 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-xs md:text-sm text-primary-900 font-bold mt-2.5">Accurate contact details in the application.</span>
                </li>
                <li className="flex items-start bg-slate-50 p-4 rounded-2xl shadow-sm border border-slate-100">
                  <div className="w-10 h-10 rounded-full bg-white border border-primary-100 shadow flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-5 h-5 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-xs md:text-sm text-primary-900 font-bold mt-2.5">O-Level and A-Level Certificates / verified slips.</span>
                </li>
                <li className="flex items-start bg-slate-50 p-4 rounded-2xl shadow-sm border border-slate-100">
                  <div className="w-10 h-10 rounded-full bg-white border border-primary-100 shadow flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-5 h-5 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-xs md:text-sm text-primary-900 font-bold mt-2.5">Clear photocopy of Valid Identification (National ID/Passport).</span>
                </li>
              </ul>
            </div>

            {/* Timeline */}
            <div className="px-2">
              <h2 className="text-2xl md:text-3xl font-black text-primary-900 mb-10 uppercase tracking-tight">Timeline</h2>
              <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:ml-6 md:before:-translate-x-[2px] before:h-full before:w-[2px] before:bg-primary-200">
                
                <div className="relative flex items-start group">
                  <div className="absolute left-5 md:left-6 -ml-[5px] md:-ml-[6px] w-3 h-3 rounded-full bg-primary-500 shadow-[0_0_0_6px_rgba(58,113,170,0.2)] mt-1.5 z-10 group-hover:scale-125 transition-transform"></div>
                  <div className="pl-12 w-full">
                    <h3 className="font-black text-sm md:text-base text-primary-900 mb-1 uppercase tracking-wider">1. Application Intake</h3>
                    <p className="text-xs text-primary-500 font-bold leading-relaxed">Submit forms via the online portal.</p>
                  </div>
                </div>

                <div className="relative flex items-start group">
                  <div className="absolute left-5 md:left-6 -ml-[5px] md:-ml-[6px] w-3 h-3 rounded-full bg-white border-2 border-primary-300 mt-1.5 z-10 group-hover:bg-primary-500 transition-colors"></div>
                  <div className="pl-12 w-full">
                    <h3 className="font-black text-sm md:text-base text-primary-900 mb-1 uppercase tracking-wider">2. Documentation Verification</h3>
                    <p className="text-xs text-primary-500 font-bold leading-relaxed">Confirm uploaded documents are complete and legible.</p>
                  </div>
                </div>

                <div className="relative flex items-start group">
                  <div className="absolute left-5 md:left-6 -ml-[5px] md:-ml-[6px] w-3 h-3 rounded-full bg-white border-2 border-primary-300 mt-1.5 z-10 group-hover:bg-primary-500 transition-colors"></div>
                  <div className="pl-12 w-full">
                    <h3 className="font-black text-sm md:text-base text-primary-900 mb-1 uppercase tracking-wider">3. Academic Review</h3>
                    <p className="text-xs text-primary-500 font-bold leading-relaxed">Admissions committee evaluates candidates.</p>
                  </div>
                </div>

                <div className="relative flex items-start group">
                  <div className="absolute left-5 md:left-6 -ml-[5px] md:-ml-[6px] w-3 h-3 rounded-full bg-white border-2 border-primary-300 mt-1.5 z-10 group-hover:bg-primary-500 transition-colors"></div>
                  <div className="pl-12 w-full">
                    <h3 className="font-black text-sm md:text-base text-primary-900 mb-1 uppercase tracking-wider">4. Official Registration</h3>
                    <p className="text-xs text-primary-500 font-bold leading-relaxed">Use portal to claim admission slot.</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Support and Form Section spanning the bottom --- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary-900 rounded-[3rem] p-8 md:p-16 shadow-2xl relative overflow-hidden flex flex-col lg:flex-row gap-12">
            
            <div className="absolute -top-32 -left-32 w-96 h-96 bg-primary-800 rounded-full mix-blend-multiply opacity-50 blur-3xl z-0"></div>
            
            {/* Direct Information */}
            <div className="lg:w-1/3 relative z-10">
              <h2 className="text-3xl font-black text-white mb-6 uppercase tracking-tighter">Reach Admissions Desk</h2>
              <p className="text-primary-200 mb-12 font-medium leading-relaxed text-sm">
                Need clarifications regarding your academic records or portal functions? Use the inquiry box and an officer will immediately review your request string.
              </p>

              <div className="space-y-4">
                 <div className="flex gap-4 items-center text-primary-100 font-medium text-sm border-b border-primary-800 pb-4">
                    <svg className="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                    admissions@bugemauniv.ac.ug
                 </div>
                 <div className="flex gap-4 items-center text-primary-100 font-medium text-sm">
                    <svg className="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                    +256 000 000 000
                 </div>
              </div>
            </div>

            {/* Inquiry Form Block */}
            <div className="lg:w-2/3 bg-white rounded-3xl p-6 md:p-8 shadow-xl relative z-10 w-full text-primary-900 border border-slate-100">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-black text-primary-500 uppercase tracking-widest mb-1.5 ml-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="Enter details"
                      className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 text-primary-900 placeholder-slate-400 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-500 font-bold text-sm transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black text-primary-500 uppercase tracking-widest mb-1.5 ml-1">
                      Program Interest
                    </label>
                    <select
                      name="program"
                      value={formData.program}
                      onChange={handleInputChange}
                      className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 text-primary-900 placeholder-slate-400 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-500 font-bold text-sm transition-all appearance-none"
                      required
                    >
                      <option value="">Select program</option>
                      {programs.map((program) => (
                        <option key={program} value={program}>
                          {program}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-black text-primary-500 uppercase tracking-widest mb-1.5 ml-1">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us what guidance you need..."
                    rows={3}
                    className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 text-primary-900 placeholder-slate-400 rounded-[1.5rem] focus:outline-none focus:ring-2 focus:ring-primary-500 font-bold text-sm transition-all resize-none"
                    required
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-primary-900 hover:bg-primary-800 text-white py-4 rounded-full text-xs font-black uppercase tracking-widest shadow-[0_10px_20px_rgba(15,53,92,0.2)] hover:shadow-[0_12px_25px_rgba(15,53,92,0.3)] hover:-translate-y-0.5 transition-all"
                  >
                    Submit Form Securely
                  </button>
                </div>
              </form>
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}

export default Admissions
