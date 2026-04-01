import { Link } from 'react-router-dom'

const About = () => {
  const staffMembers = [
    {
      id: 1,
      name: 'Dr. Nagwovuma Magerate',
      title: 'Dean of the Faculty',
      image: '/src/assets/images/dean.png',
      bio: 'Visionary leader overseeing the Faculty\'s academic programs and strategic direction to foster computing innovation.'
    },
    {
      id: 2,
      name: 'Mr.Sewankambo Erma',
      title: 'Head of Department',
      image: '/src/assets/images/image.png',
      bio: 'Leading the IT Department with over 15 years of experience in computer science education and research.'
    },
    {
      id: 3,
      name: 'Prof.Assoc. Dr. Balagadde',
      title: 'Senior Lecturer',
      image: '/src/assets/images/balagadde.jpeg',
      bio: 'Specializing in software engineering and database systems with extensive industry experience.'
    },
    {
      id: 4,
      name: 'Mr. Albert Walusimbi',
      title: 'senior Lecturer',
      image: '/src/assets/images/image copy.png',
      bio: 'Expert in network security and information systems with a focus on practical applications.'
    },
    {
      id: 5,
      name: 'Ms. David Kitumba',
      title: 'Lecturer',
      image: '/src/assets/images/imagecopy3.png',
      bio: 'Passionate about cloud computing and data analytics, preparing students for modern global tech challenges.'
    },
    {
      id: 6,
      name: 'Mrs. Nalwoga Grace',
      title: 'Secretary',
      image: '/src/assets/images/ww.png',
      bio: 'Managing department administration and providing excellent, reliable support services to all students and faculty members.'
    }
  ]

  return (
    <div className="min-h-screen bg-secondary-50 font-sans">
      {/* Hero Section */}
      <section className="bg-primary-900 py-20 border-b-8 border-accent-500 relative overflow-hidden">
        {/* Background Image with Blur */}
        <div className="absolute inset-0">
          <img 
            src="/src/assets/images/about-hero.jpg.jpeg" 
            alt="About Hero Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-block px-4 py-1 bg-accent-500 text-white font-bold uppercase tracking-wider rounded-full text-sm mb-6 shadow-md">
            About Us
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 uppercase tracking-wide">
            Excellence in IT Education
          </h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto mb-8 leading-relaxed font-medium">
            The Bugema University IT Department is committed to providing quality education, 
            innovative research, and practical skills that prepare students for successful careers in technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/programs" className="btn-primary uppercase tracking-wide font-black">
              Explore Programs
            </Link>
            <Link to="/contact" className="btn-secondary uppercase tracking-wide font-black">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-primary-50 rounded-2xl p-10 border border-primary-100 shadow-xl relative overflow-hidden group hover:-translate-y-2 transition-transform">
              <div className="absolute top-0 right-0 w-24 h-24 bg-accent-500 rounded-bl-full opacity-10"></div>
              <h2 className="text-3xl font-black text-primary-900 mb-6 uppercase border-l-8 border-accent-500 pl-4">Our Mission</h2>
              <p className="text-primary-800 font-medium mb-4 leading-relaxed text-lg">
                To provide quality, Christ-centered education that prepares students for 
                leadership and service in the field of information technology and computer science.
              </p>
              <p className="text-primary-700 font-medium leading-relaxed">
                We strive to create an environment that fosters academic excellence, 
                research innovation, and ethical practices in technology.
              </p>
            </div>

            <div className="bg-primary-900 rounded-2xl p-10 shadow-xl relative overflow-hidden text-white group hover:-translate-y-2 transition-transform">
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-accent-500 rounded-tr-full opacity-20"></div>
              <h2 className="text-3xl font-black text-white mb-6 uppercase border-l-8 border-accent-500 pl-4">Our Vision</h2>
              <p className="text-primary-100 font-medium mb-4 leading-relaxed text-lg">
                To be a leading IT department recognized for excellence in education, 
                research, and community service in Uganda and beyond.
              </p>
              <p className="text-primary-200 font-medium leading-relaxed">
                We aim to produce graduates who are technically competent, ethically grounded, 
                and ready to contribute to technological advancement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Department Values */}
      <section className="py-20 bg-primary-100 border-y border-primary-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-black text-center text-primary-900 mb-16 uppercase tracking-wide">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center border-t-4 border-accent-500 hover:-translate-y-2 transition-transform">
              <div className="w-20 h-20 bg-primary-100 text-primary-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-2xl font-black text-primary-900 mb-3 uppercase">Excellence</h3>
              <p className="text-primary-700 font-medium">
                We pursue academic and professional excellence in all our programs and activities.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center border-t-4 border-accent-500 hover:-translate-y-2 transition-transform">
              <div className="w-20 h-20 bg-primary-100 text-primary-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-black text-primary-900 mb-3 uppercase">Innovation</h3>
              <p className="text-primary-700 font-medium">
                We encourage creative thinking and innovative approaches to solving technological challenges.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center border-t-4 border-accent-500 hover:-translate-y-2 transition-transform">
              <div className="w-20 h-20 bg-primary-100 text-primary-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-black text-primary-900 mb-3 uppercase">Integrity</h3>
              <p className="text-primary-700 font-medium">
                We uphold the highest standards of integrity and ethical conduct in all our endeavors.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center border-t-4 border-accent-500 hover:-translate-y-2 transition-transform">
              <div className="w-20 h-20 bg-primary-100 text-primary-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-black text-primary-900 mb-3 uppercase">Community</h3>
              <p className="text-primary-700 font-medium">
                We foster a supportive community that promotes collaboration and mutual growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Staff Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-primary-900 mb-4 uppercase tracking-wide">
              Meet Our Team
            </h2>
            <p className="text-xl text-primary-700 font-medium">
              Our dedicated faculty members are committed to your success and growth.
            </p>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 lg:gap-16">
            {staffMembers.map((member) => (
              <div key={member.id} className="relative bg-primary-900 rounded-[2.5rem] overflow-hidden shadow-2xl border border-primary-700 group flex items-center h-full min-h-[300px] sm:min-h-[360px] hover:-translate-y-3 transition-transform duration-300">
                {/* Background graphic elements */}
                <div className="absolute top-0 bottom-0 left-0 w-1/3 sm:w-2/5 bg-primary-800 rounded-r-[150px] border-r-[16px] border-accent-500/80 z-0 hidden sm:block pointer-events-none"></div>
                
                {/* Left side: Circular Portrait */}
                <div className="w-1/3 sm:w-2/5 p-6 flex items-center justify-center relative z-10 bg-primary-800 sm:bg-transparent rounded-r-[100px] sm:rounded-none h-full">
                  {/* Concentric circle accent */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 sm:w-60 sm:h-60 rounded-full border border-accent-500/40 -z-10 group-hover:scale-110 group-hover:border-accent-500/80 transition-all duration-700"></div>
                  
                  <div className="w-32 h-32 sm:w-48 sm:h-48 rounded-full border-[6px] border-white shadow-2xl overflow-hidden relative group-hover:scale-105 transition-transform duration-500 z-10">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Right side: Content */}
                <div className="w-2/3 sm:w-3/5 p-8 sm:p-12 flex flex-col justify-center relative z-10 h-full">
                  <h3 className="text-3xl sm:text-4xl font-black text-white mb-4 leading-tight tracking-wide group-hover:text-accent-400 transition-colors">
                    {member.name}
                  </h3>
                  <div className="mb-6">
                    <span className="text-accent-400 font-bold uppercase tracking-widest text-xs sm:text-sm bg-primary-800/80 backdrop-blur-sm inline-block px-5 py-2.5 rounded-full border border-primary-600 shadow-inner">{member.title}</span>
                  </div>
                  <p className="text-primary-100 font-medium text-base sm:text-lg leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link to="/contact" className="btn-primary uppercase tracking-wide font-black">
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>

      {/* Department Stats */}
      <section className="py-20 bg-primary-900 relative">
        <div className="absolute inset-0 bg-[url('/src/assets/images/campus-building.jpg')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-4xl font-black text-center text-white mb-16 uppercase tracking-wide">
              Department by Numbers
            </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center bg-primary-800/80 backdrop-blur-sm rounded-2xl p-8 border border-primary-700 shadow-lg">
              <div className="text-5xl font-black text-accent-500 mb-2">500+</div>
              <p className="text-primary-100 font-medium uppercase tracking-wider text-sm">Current Students</p>
            </div>
            <div className="text-center bg-primary-800/80 backdrop-blur-sm rounded-2xl p-8 border border-primary-700 shadow-lg">
              <div className="text-5xl font-black text-accent-500 mb-2">25+</div>
              <p className="text-primary-100 font-medium uppercase tracking-wider text-sm">Faculty Members</p>
            </div>
            <div className="text-center bg-primary-800/80 backdrop-blur-sm rounded-2xl p-8 border border-primary-700 shadow-lg">
              <div className="text-5xl font-black text-accent-500 mb-2">6</div>
              <p className="text-primary-100 font-medium uppercase tracking-wider text-sm">Academic Programs</p>
            </div>
            <div className="text-center bg-primary-800/80 backdrop-blur-sm rounded-2xl p-8 border border-primary-700 shadow-lg">
              <div className="text-5xl font-black text-accent-500 mb-2">95%</div>
              <p className="text-primary-100 font-medium uppercase tracking-wider text-sm">Employment Rate</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
