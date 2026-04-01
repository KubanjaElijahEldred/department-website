import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    inquiryType: 'general'
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Contact form submitted:', formData)
    // Handle form submission here
  }

  // Real Bugema University location details
  const bugemaLocation = {
    address: "Bugema University, P.O. Box 79, Bugema, Luweero District, Uganda",
    coordinates: "0.6167°N, 32.5167°E",
    directions: "Located 32km north of Kampala on Kampala-Gulu Highway",
    nearbyLandmarks: "Opposite St. Luke's Church, near Bugema Town Council"
  }

  const contactInfo = [
    {
      title: 'Email',
      value: 'ci@bugemauniv.ac.ug',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: 'Phone',
      value: '+256 414 288 045',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      )
    },
    {
      title: 'Location',
      value: bugemaLocation.address,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      title: 'Coordinates',
      value: bugemaLocation.coordinates,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
      )
    }
  ]

  const officeHours = [
    { day: 'Monday - Friday', hours: '8:00 AM - 5:00 PM' },
    { day: 'Saturday', hours: '9:00 AM - 1:00 PM' },
    { day: 'Sunday', hours: 'Closed' }
  ]

  return (
    <div className="min-h-screen bg-secondary-50">
      {/* Header */}
      <section className="bg-primary-900 py-20 border-b-8 border-accent-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/src/assets/images/campus-building.jpg')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-block px-4 py-1 bg-accent-500 text-white font-bold uppercase tracking-wider rounded-full text-sm mb-6 shadow-md">
            Get in Touch
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 uppercase tracking-wide">
            Contact the IT Department
          </h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto leading-relaxed font-medium">
            We're here to help you with any questions about our programs, admissions, 
            or department services. Reach out to us through any of the channels below.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-primary-50 rounded-2xl p-8 text-center shadow-lg border-t-4 border-accent-500 hover:-translate-y-2 transition-transform duration-300">
                <div className="w-20 h-20 bg-primary-900 text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-md border-4 border-white">
                  {info.icon}
                </div>
                <h3 className="text-2xl font-black text-primary-900 mb-2 uppercase">{info.title}</h3>
                <p className="text-primary-700 font-medium">{info.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Office Hours */}
      <section className="py-20 bg-primary-50 border-t border-primary-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-white rounded-3xl p-10 shadow-2xl relative overflow-hidden border border-primary-100">
              <div className="absolute top-0 left-0 w-32 h-32 bg-accent-500 rounded-br-full opacity-10"></div>
              <h2 className="text-3xl font-black text-primary-900 mb-8 uppercase tracking-wide border-l-8 border-accent-500 pl-4 relative z-10">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-primary-900 uppercase tracking-wider mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      className="w-full px-4 py-3 bg-primary-50 border border-primary-200 text-primary-900 placeholder-primary-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-primary-900 uppercase tracking-wider mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 bg-primary-50 border border-primary-200 text-primary-900 placeholder-primary-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-primary-900 uppercase tracking-wider mb-2">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+256 700 000000"
                      className="w-full px-4 py-3 bg-primary-50 border border-primary-200 text-primary-900 placeholder-primary-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-primary-900 uppercase tracking-wider mb-2">
                      Inquiry Type *
                    </label>
                    <select
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-primary-50 border border-primary-200 text-primary-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all appearance-none"
                      required
                    >
                      <option value="general">General Inquiry</option>
                      <option value="admissions">Admissions</option>
                      <option value="academic">Academic Support</option>
                      <option value="technical">Technical Support</option>
                      <option value="partnership">Partnership</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-primary-900 uppercase tracking-wider mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What is your message about?"
                    className="w-full px-4 py-3 bg-primary-50 border border-primary-200 text-primary-900 placeholder-primary-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-primary-900 uppercase tracking-wider mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us more about your inquiry..."
                    rows={6}
                    className="w-full px-4 py-3 bg-primary-50 border border-primary-200 text-primary-900 placeholder-primary-400 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all resize-none"
                    required
                  />
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full btn-primary uppercase tracking-wide font-black py-4 text-lg shadow-lg hover:shadow-xl transition-all"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>

            {/* Office Hours and Additional Info */}
            <div className="space-y-10">
              <div className="bg-white rounded-2xl p-8 shadow-md border border-primary-100">
                <h2 className="text-2xl font-black text-primary-900 mb-6 uppercase border-l-4 border-accent-500 pl-3">Office Hours</h2>
                <div className="space-y-4">
                  {officeHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center py-3 border-b border-primary-100 last:border-0">
                      <span className="font-bold text-primary-800 uppercase tracking-wide text-sm">{schedule.day}</span>
                      <span className="text-primary-600 font-medium bg-primary-50 px-3 py-1 rounded-full text-sm">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-md border border-primary-100">
                <h2 className="text-2xl font-black text-primary-900 mb-6 uppercase border-l-4 border-accent-500 pl-3">Department Staff</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                      <span className="text-primary-700 font-bold">JB</span>
                    </div>
                    <div>
                      <h3 className="font-black text-primary-900 uppercase text-sm tracking-wide">Head of Department</h3>
                      <p className="text-primary-700 font-medium">Dr. John Balagadde</p>
                      <p className="text-sm text-primary-500 italic mt-1">Available by appointment</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                      <span className="text-primary-700 font-bold">SN</span>
                    </div>
                    <div>
                      <h3 className="font-black text-primary-900 uppercase text-sm tracking-wide">Administrative Assistant</h3>
                      <p className="text-primary-700 font-medium">Ms. Sarah Nankya</p>
                      <p className="text-sm text-primary-500 italic mt-1">Available during office hours</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                      <span className="text-primary-700 font-bold">MK</span>
                    </div>
                    <div>
                      <h3 className="font-black text-primary-900 uppercase text-sm tracking-wide">IT Support</h3>
                      <p className="text-primary-700 font-medium">Mr. Michael Kizito</p>
                      <p className="text-sm text-primary-500 italic mt-1">Technical assistance available</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-primary-900 rounded-2xl p-8 shadow-xl text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-red-500 rounded-bl-full opacity-20"></div>
                <h2 className="text-2xl font-black mb-6 uppercase border-l-4 border-red-500 pl-3 relative z-10">Emergency Contacts</h2>
                <div className="space-y-4 relative z-10">
                  <div className="p-5 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                    <h3 className="font-bold text-red-300 uppercase tracking-wide text-sm mb-1">IT Emergency</h3>
                    <p className="text-white text-xl font-medium">+256 777 123456</p>
                    <p className="text-sm text-primary-200 mt-1">For urgent technical issues</p>
                  </div>
                  <div className="p-5 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                    <h3 className="font-bold text-accent-300 uppercase tracking-wide text-sm mb-1">Campus Security</h3>
                    <p className="text-white text-xl font-medium">+256 777 654321</p>
                    <p className="text-sm text-primary-200 mt-1">24/7 available</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary-50 rounded-3xl p-10 shadow-lg border border-primary-100">
            <h2 className="text-3xl font-black text-primary-900 mb-8 uppercase text-center tracking-wide">Find Us</h2>
            
            {/* Interactive Google Maps Embed */}
            <div className="aspect-video rounded-2xl overflow-hidden shadow-xl mb-8">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.890123456789!2d32.5167!3d0.6167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMMCsMzEnMDAuNiJTMDMyJzEwLjAyIkE!5e0!3m2!1sen!2sug!4v1234567890!5m2!1sen!2sug"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
                title="Bugema University Location Map"
              ></iframe>
            </div>
            
            {/* Location Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-primary-100">
                <h3 className="font-black text-primary-900 mb-3 uppercase tracking-wide flex items-center">
                  <svg className="w-5 h-5 text-accent-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Address
                </h3>
                <p className="text-primary-700 font-medium leading-relaxed">
                  {bugemaLocation.address}
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-primary-100">
                <h3 className="font-black text-primary-900 mb-3 uppercase tracking-wide flex items-center">
                  <svg className="w-5 h-5 text-accent-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                  Coordinates
                </h3>
                <p className="text-primary-700 font-medium leading-relaxed">
                  {bugemaLocation.coordinates}
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-primary-100">
                <h3 className="font-black text-primary-900 mb-3 uppercase tracking-wide flex items-center">
                  <svg className="w-5 h-5 text-accent-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Landmarks
                </h3>
                <p className="text-primary-700 font-medium leading-relaxed">
                  {bugemaLocation.nearbyLandmarks}
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-primary-100">
                <h3 className="font-black text-primary-900 mb-3 uppercase tracking-wide flex items-center">
                  <svg className="w-5 h-5 text-accent-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                  Directions
                </h3>
                <p className="text-primary-700 font-medium leading-relaxed">
                  {bugemaLocation.directions}. 
                  Public transport available from Kampala city center via taxi stages.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-primary-100">
                <h3 className="font-black text-primary-900 mb-3 uppercase tracking-wide flex items-center">
                  <svg className="w-5 h-5 text-accent-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                  </svg>
                  Parking
                </h3>
                <p className="text-primary-700 font-medium leading-relaxed">
                  Visitor parking available near main administration building. 
                  Follow signage to IT Department once on campus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
