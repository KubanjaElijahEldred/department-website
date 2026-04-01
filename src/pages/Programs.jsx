import { useState } from 'react'
import { Link } from 'react-router-dom'

const Programs = () => {
  const [expandedProgram, setExpandedProgram] = useState(null)

  const toggleProgram = (programId) => {
    setExpandedProgram(expandedProgram === programId ? null : programId)
  }

  const undergraduatePrograms = [
    {
      id: 'bit',
      title: 'Bachelor of Information Technology',
      level: 'Bachelor',
      duration: '4 Years',
      type: 'Day Program',
      focus: 'Project-Based',
      description: 'A practical undergraduate degree focused on software development, databases, networking, systems support, and project work.',
      units: {
        'Year 1': [
          'Introduction to Computer Applications',
          'Structured Programming',
          'Computer Organization and Architecture',
          'Communication Skills for ICT'
        ],
        'Year 2': [
          'Database Systems',
          'Web Application Development',
          'Computer Networks',
          'Systems Analysis and Design'
        ],
        'Year 3': [
          'Software Engineering',
          'Operating Systems',
          'Information Security Fundamentals',
          'Data Communication'
        ],
        'Year 4': [
          'Research Methods in Computing',
          'IT Project Management',
          'Industrial Training / Internship',
          'Final Year Project'
        ]
      }
    },
    {
      id: 'bse',
      title: 'Bachelor of Software Engineering',
      level: 'Bachelor',
      duration: '4 Years',
      type: 'Engineering Focus',
      focus: 'Industry Projects',
      description: 'A professional software engineering program focused on application design, quality assurance, testing, deployment, and team-based software delivery.',
      units: {
        'Year 1': [
          'Introduction to Programming',
          'Computer Mathematics',
          'Introduction to Software Engineering',
          'Communication Skills for Developers'
        ],
        'Year 2': [
          'Object-Oriented Programming',
          'Database Systems',
          'Web Engineering',
          'Requirements Engineering'
        ],
        'Year 3': [
          'Software Architecture and Design',
          'Software Testing and Quality Assurance',
          'Mobile Application Development',
          'Agile Project Management'
        ],
        'Year 4': [
          'DevOps and Deployment',
          'Human Computer Interaction',
          'Industrial Internship',
          'Software Engineering Capstone Project'
        ]
      }
    },
    {
      id: 'bcs',
      title: 'Bachelor of Computer Science',
      level: 'Bachelor',
      duration: '4 Years',
      type: 'Technical Core',
      focus: 'Software Focus',
      description: 'An undergraduate program for students interested in algorithms, software engineering, intelligent systems, and deep technical computing.',
      units: {
        'Year 1': [
          'Introduction to Programming',
          'Discrete Mathematics',
          'Computer Fundamentals',
          'Problem Solving Techniques'
        ],
        'Year 2': [
          'Object-Oriented Programming',
          'Data Structures and Algorithms',
          'Computer Architecture',
          'Database Management Systems'
        ],
        'Year 3': [
          'Operating Systems',
          'Software Engineering',
          'Artificial Intelligence',
          'Computer Networks'
        ],
        'Year 4': [
          'Compiler Construction',
          'Machine Learning Concepts',
          'Research Project',
          'Professional Practice in Computing'
        ]
      }
    },
    {
      id: 'bis',
      title: 'Bachelor of Information Systems',
      level: 'Bachelor',
      duration: '4 Years',
      type: 'Business + IT',
      focus: 'Systems Focus',
      description: 'A program that combines computing with business systems, analysis, digital processes, and enterprise information management.',
      units: {
        'Year 1': [
          'Business Communication',
          'Computer Applications',
          'Principles of Management',
          'Introduction to Information Systems'
        ],
        'Year 2': [
          'Systems Analysis and Design',
          'Database Design',
          'Business Process Modeling',
          'Web Systems Development'
        ],
        'Year 3': [
          'Management Information Systems',
          'E-Commerce Systems',
          'IT Project Management',
          'Enterprise Systems'
        ],
        'Year 4': [
          'ICT Governance',
          'Information Systems Audit',
          'Internship',
          'Final Research Project'
        ]
      }
    }
  ]

  const postgraduatePrograms = [
    {
      id: 'pgdit',
      title: 'Postgraduate Diploma in Information Technology',
      level: 'Postgraduate',
      duration: '1 Year',
      type: 'Advanced Skills',
      focus: 'Professional Upgrade',
      description: 'A postgraduate option for graduates and professionals who want advanced applied IT skills and structured specialization.',
      units: {
        'Semester 1': [
          'Advanced Database Administration',
          'Advanced Computer Networks',
          'IT Governance and Policy',
          'Research Methods in Information Technology'
        ],
        'Semester 2': [
          'Cybersecurity Management',
          'Enterprise Information Systems',
          'Systems Implementation Strategy',
          'Capstone Project'
        ]
      }
    },
    {
      id: 'mit',
      title: 'Master of Information Technology',
      level: 'Masters',
      duration: '2 Years',
      type: 'Research + Practice',
      focus: 'Leadership Track',
      description: 'An advanced postgraduate program focused on research, innovation, digital strategy, software systems, and professional leadership.',
      units: {
        'Year 1': [
          'Advanced Software Engineering',
          'Data Analytics and Visualization',
          'Cloud Computing',
          'Information Security and Risk Management'
        ],
        'Year 2': [
          'Enterprise Architecture',
          'Research Seminar in IT',
          'Innovation and Digital Transformation',
          'Dissertation / Thesis'
        ]
      }
    }
  ]

  const additionalPathways = [
    {
      title: 'Diploma in Information Technology',
      level: 'Diploma',
      description: 'A practical pathway for students who want strong hands-on preparation in networking, web tools, office systems, and ICT support.'
    },
    {
      title: 'Certificate in Computing',
      level: 'Certificate',
      description: 'An entry route for learners beginning their journey in digital skills, computer use, and basic computing principles.'
    },
    {
      title: 'Short Courses and Skills Clinics',
      level: 'Professional',
      description: 'Short focused learning in spreadsheet analysis, web creation, networking essentials, digital tools, and ICT support skills.'
    }
  ]

  return (
    <div className="min-h-screen bg-secondary-50">
      {/* 
        === FULL-SCREEN CONVEX CURVE HERO SECTION === 
        Matches the new blue business card reference featuring overlapping circular cuts extended across the viewport.
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
                  <img src="/src/assets/images/imagecopy4.png" alt="Logo" className="w-24 h-24 md:w-36 md:h-36 object-contain filter drop-shadow-xl z-10 bg-white rounded-full p-2 border-4 border-white" />
               </div>
               <div className="text-center z-20">
                 <h2 className="text-4xl md:text-5xl font-black tracking-widest uppercase drop-shadow-md text-white">BUGEMA</h2>
                 <p className="text-primary-100 font-bold tracking-[0.3em] text-xs md:text-sm mt-3 uppercase">IT Department</p>
               </div>
            </div>

            {/* RIGHT: Main Text Content */}
            <div className="w-full md:w-7/12 py-12 px-8 md:px-16 lg:px-24 flex flex-col justify-center">
               
               <span className="inline-block self-start px-4 py-1.5 bg-sky-50 text-primary-600 font-black uppercase tracking-[0.2em] rounded-full text-[10px] md:text-xs mb-6 border border-sky-100 shadow-sm">
                 Academic Programs
               </span>
               
               <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-primary-900 mb-6 uppercase tracking-tighter leading-[1]">
                 Shape Your <br className="hidden lg:block" /> IT Career
               </h1>
               
               <p className="text-sm md:text-base lg:text-lg text-primary-600 mb-10 leading-relaxed font-bold max-w-xl">
                 Comprehensive undergraduate and postgraduate programs designed to build technical depth, engineering rigor, and professional leadership.
               </p>
               
               <div className="flex flex-col sm:flex-row flex-wrap gap-4">
                  <a href="#undergrad" className="px-8 py-3.5 bg-primary-900 border border-primary-900 text-white rounded-full text-xs font-black uppercase tracking-widest hover:bg-primary-800 transition-all shadow-[0_10px_20px_rgba(15,53,92,0.2)] text-center flex items-center justify-center gap-2">
                     <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
                     Undergrad Degrees
                  </a>
                  <a href="#postgrad" className="px-8 py-3.5 bg-white border border-slate-200 text-primary-900 rounded-full text-xs font-black uppercase tracking-widest hover:bg-slate-50 transition-all shadow-sm text-center">
                     Postgrad Degrees
                  </a>
               </div>
            </div>
         </div>
      </section>

      {/* Undergraduate Programs */}
      <section id="undergrad" className="py-24 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">Undergraduate Programs</h2>
            <p className="text-lg text-secondary-600">
              These are undergraduate IT department programs. Click any one to open it and view the course units under that program.
            </p>
            <div className="flex justify-center gap-2 mt-4">
              <span className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm">Click Any Program</span>
              <span className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm">See Units</span>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {undergraduatePrograms.map((program) => (
              <div key={program.id} className="card">
                <button
                  onClick={() => toggleProgram(program.id)}
                  className="w-full text-left focus:outline-none focus:ring-2 focus:ring-primary-500 rounded-lg"
                  aria-expanded={expandedProgram === program.id}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-3">
                        <span className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium">
                          {program.level}
                        </span>
                        <h3 className="text-xl font-semibold text-secondary-900">{program.title}</h3>
                      </div>
                      <p className="text-secondary-600 mb-4">{program.description}</p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-2 py-1 bg-secondary-100 text-secondary-700 rounded text-sm">{program.duration}</span>
                        <span className="px-2 py-1 bg-secondary-100 text-secondary-700 rounded text-sm">{program.type}</span>
                        <span className="px-2 py-1 bg-secondary-100 text-secondary-700 rounded text-sm">{program.focus}</span>
                      </div>
                    </div>
                    <div className="ml-4">
                      <svg
                        className={`w-6 h-6 text-secondary-400 transition-transform ${
                          expandedProgram === program.id ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </button>

                {expandedProgram === program.id && (
                  <div className="mt-6 pt-6 border-t border-secondary-200">
                    <h4 className="text-lg font-semibold mb-4">Course Units</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                      {Object.entries(program.units).map(([year, units]) => (
                        <div key={year}>
                          <h5 className="font-medium text-secondary-900 mb-3">{year}</h5>
                          <ul className="space-y-2">
                            {units.map((unit, index) => (
                              <li key={index} className="flex items-start">
                                <svg className="w-4 h-4 text-primary-500 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                  <circle cx="10" cy="10" r="3" />
                                </svg>
                                <span className="text-sm text-secondary-600">{unit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Postgraduate Programs */}
      <section id="postgrad" className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">Postgraduate Programs</h2>
            <p className="text-lg text-secondary-600">
              These postgraduate programs support advanced professional knowledge, specialization, and research in information technology.
            </p>
            <div className="flex justify-center gap-2 mt-4">
              <span className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm">Advanced Study</span>
              <span className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm">Research Focus</span>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {postgraduatePrograms.map((program) => (
              <div key={program.id} className="card">
                <button
                  onClick={() => toggleProgram(program.id)}
                  className="w-full text-left focus:outline-none focus:ring-2 focus:ring-primary-500 rounded-lg"
                  aria-expanded={expandedProgram === program.id}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-3">
                        <span className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium">
                          {program.level}
                        </span>
                        <h3 className="text-xl font-semibold text-secondary-900">{program.title}</h3>
                      </div>
                      <p className="text-secondary-600 mb-4">{program.description}</p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-2 py-1 bg-secondary-100 text-secondary-700 rounded text-sm">{program.duration}</span>
                        <span className="px-2 py-1 bg-secondary-100 text-secondary-700 rounded text-sm">{program.type}</span>
                        <span className="px-2 py-1 bg-secondary-100 text-secondary-700 rounded text-sm">{program.focus}</span>
                      </div>
                    </div>
                    <div className="ml-4">
                      <svg
                        className={`w-6 h-6 text-secondary-400 transition-transform ${
                          expandedProgram === program.id ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </button>

                {expandedProgram === program.id && (
                  <div className="mt-6 pt-6 border-t border-secondary-200">
                    <h4 className="text-lg font-semibold mb-4">Course Units</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {Object.entries(program.units).map(([period, units]) => (
                        <div key={period}>
                          <h5 className="font-medium text-secondary-900 mb-3">{period}</h5>
                          <ul className="space-y-2">
                            {units.map((unit, index) => (
                              <li key={index} className="flex items-start">
                                <svg className="w-4 h-4 text-primary-500 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                  <circle cx="10" cy="10" r="3" />
                                </svg>
                                <span className="text-sm text-secondary-600">{unit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Pathways */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-secondary-900 mb-12">Additional IT Department Pathways</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalPathways.map((pathway, index) => (
              <div key={index} className="card text-center">
                <div className="text-sm text-primary-600 font-medium mb-2">{pathway.level}</div>
                <h3 className="text-xl font-semibold mb-4">{pathway.title}</h3>
                <p className="text-secondary-600">{pathway.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Programs
