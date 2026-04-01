import { useState } from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    program: '',
    phone: '',
    academicBackground: ''
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
    console.log('Application submitted:', formData)
    // Handle form submission here
  }

  const programs = [
    'Bachelor of Information Technology',
    'Bachelor of Software Engineering',
    'Bachelor of Computer Science',
    'Bachelor of Information Systems',
    'Diploma in Information Technology',
    'Certificate in Computing'
  ]

  return (
    <div className="min-h-screen bg-secondary-50">
      {/* Page Header */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium mb-4">
                Application Form
              </span>
              <h1 className="text-4xl font-bold text-secondary-900 mb-6">
                Begin your application to the department.
              </h1>
              <p className="text-lg text-secondary-600 mb-6">
                This page gives applicants a direct next step after reading about the programs and admissions process, which keeps the website useful and action-oriented.
              </p>
            </div>
            <div className="card">
              <h2 className="text-xl font-semibold mb-4">Before You Submit</h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-secondary-700">Confirm the right program pathway.</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-secondary-700">Prepare your academic documents.</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-secondary-700">Use valid email and phone details for feedback.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="card">
              <h2 className="text-2xl font-semibold mb-6">Application Checklist</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-secondary-900 mb-1">Select your preferred program</h3>
                    <p className="text-secondary-600">Verify entry requirements and program details.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-secondary-900 mb-1">Prepare identification and academic records</h3>
                    <p className="text-secondary-600">Gather all required supporting documents.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="font-medium text-secondary-900 mb-1">Submit the form and wait for follow-up</h3>
                    <p className="text-secondary-600">Department will contact you with next steps.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <h2 className="text-2xl font-semibold mb-6">Why This Form Matters</h2>
              <p className="text-secondary-600 mb-6">
                Interactive application forms are part of a strong department website because they connect information pages to real student action.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm">Simple</span>
                <span className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm">Guided</span>
                <span className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm">Responsive</span>
                <span className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm">Direct</span>
                <span className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm">Accessible</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card">
            <h1 className="text-3xl font-bold text-secondary-900 mb-2">Department Application Form</h1>
            <p className="text-lg text-secondary-600 mb-8">
              Submit your details to begin the process of joining the Bugema University Information Technology Department.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Enter full name"
                    className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter email address"
                    className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    Program of Interest *
                  </label>
                  <select
                    name="program"
                    value={formData.program}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    required
                  >
                    <option value="">Select program</option>
                    {programs.map((program) => (
                      <option key={program} value={program}>{program}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+256 700 000000"
                    className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-secondary-700 mb-2">
                  Academic Background *
                </label>
                <textarea
                  name="academicBackground"
                  value={formData.academicBackground}
                  onChange={handleInputChange}
                  placeholder="Briefly share your study background or qualifications"
                  rows={4}
                  className="w-full px-4 py-3 border border-secondary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  required
                />
              </div>

              {/* Terms and Privacy */}
              <div className="space-y-4">
                <label className="flex items-start">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500 mt-1"
                    required
                  />
                  <span className="ml-3 text-sm text-secondary-600">
                    I agree to the <Link to="/terms" className="text-primary-600 hover:text-primary-700">Terms and Conditions</Link> and 
                    <Link to="/privacy" className="text-primary-600 hover:text-primary-700"> Privacy Policy</Link>
                  </span>
                </label>

                <label className="flex items-start">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500 mt-1"
                  />
                  <span className="ml-3 text-sm text-secondary-600">
                    I would like to receive updates about programs and events from Bugema University IT Department
                  </span>
                </label>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  type="submit"
                  className="flex-1 btn-primary"
                >
                  Submit Application
                </button>
                <Link to="/admissions" className="flex-1 btn-secondary text-center">
                  Back to Admissions
                </Link>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card text-center">
            <h2 className="text-2xl font-semibold text-secondary-900 mb-4">Need Help With Your Application?</h2>
            <p className="text-secondary-600 mb-8">
              Our admissions team is here to support you through every step of the application process.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div>
                <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-medium text-secondary-900 mb-2">Email Support</h3>
                <p className="text-sm text-secondary-600">ci@bugemauniv.ac.ug</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="font-medium text-secondary-900 mb-2">Phone Support</h3>
                <p className="text-sm text-secondary-600">+256 700 000000</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="font-medium text-secondary-900 mb-2">Campus Visit</h3>
                <p className="text-sm text-secondary-600">Bugema University, Luweero</p>
              </div>
            </div>
            <Link to="/contact" className="btn-primary">
              Contact Admissions Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Register
