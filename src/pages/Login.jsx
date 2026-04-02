import { useState } from 'react'
import { Link } from 'react-router-dom'
import { campusBuildingImage } from '../assets/images'

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
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
    console.log('Login attempt:', formData)
    // Handle login logic here
  }

  return (
    <div className="min-h-screen bg-secondary-50 font-sans flex flex-col justify-center">
      {/* Page Header */}
      <section className="bg-primary-900 py-16 border-b-8 border-accent-500 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10 bg-cover bg-center mix-blend-overlay"
          style={{ backgroundImage: `url(${campusBuildingImage})` }}
        ></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1 bg-accent-500 text-white font-bold uppercase tracking-wider rounded-full text-sm mb-6 shadow-md">
                Portal Access
              </span>
              <h1 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-wide leading-tight">
                Secure sign-in for student services and tools.
              </h1>
              <p className="text-xl text-primary-100 mb-6 font-medium leading-relaxed">
                Experience a unified gateway to all departmental resources. Access grades, notices, and support through our secure platform.
              </p>
            </div>
            <div className="bg-primary-800/80 backdrop-blur rounded-3xl p-8 border border-primary-700 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent-500 rounded-bl-full opacity-10"></div>
              <h2 className="text-2xl font-black text-white mb-6 uppercase border-l-4 border-accent-500 pl-3 relative z-10">Portal Benefits</h2>
              <ul className="space-y-4 relative z-10">
                <li className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-accent-500/20 flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-5 h-5 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-primary-100 font-medium mt-1">Check notices and registration information securely.</span>
                </li>
                <li className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-accent-500/20 flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-5 h-5 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-primary-100 font-medium mt-1">Review departmental downloads and service updates instantly.</span>
                </li>
                <li className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-accent-500/20 flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-5 h-5 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-primary-100 font-medium mt-1">Connect with student support channels anywhere.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Login Form and Help */}
      <section className="py-20 flex-grow relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-accent-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-900 rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 items-start">
            {/* Login Form */}
            <div className="bg-white rounded-[2.5rem] p-10 md:p-14 shadow-[0_20px_50px_rgba(15,53,92,0.1)] border border-primary-100 max-w-lg mx-auto xl:mx-0 w-full xl:ml-auto">
              <div className="text-center mb-10">
                <div className="w-20 h-20 bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg border-4 border-white transform hover:scale-105 transition-transform">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                  </svg>
                </div>
                <h1 className="text-3xl font-black text-primary-900 uppercase tracking-wide">Welcome Back</h1>
                <p className="text-primary-600 font-medium mt-2">Sign in to access your student portal</p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-primary-900 uppercase tracking-wider mb-2">
                    Email Address <span className="text-accent-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <svg className="h-5 w-5 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                      </svg>
                    </div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="student@bugemauniv.ac.ug"
                      className="w-full pl-12 pr-4 py-4 bg-primary-50 border border-primary-200 text-primary-900 placeholder-primary-400 rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all font-medium"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-primary-900 uppercase tracking-wider mb-2">
                    Password <span className="text-accent-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <svg className="h-5 w-5 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <input
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      placeholder="Enter your password"
                      className="w-full pl-12 pr-4 py-4 bg-primary-50 border border-primary-200 text-primary-900 placeholder-primary-400 rounded-2xl focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all font-medium"
                      required
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <label className="flex items-center cursor-pointer group">
                    <div className="relative flex items-center justify-center">
                      <input
                        type="checkbox"
                        className="peer block w-5 h-5 rounded border-primary-300 text-accent-500 focus:ring-accent-500 transition-colors cursor-pointer"
                      />
                    </div>
                    <span className="ml-3 text-sm font-bold text-primary-700 group-hover:text-primary-900 transition-colors">Remember me</span>
                  </label>
                  <a href="#" className="text-sm font-bold text-accent-600 hover:text-accent-700 transition-colors uppercase tracking-wide">
                    Forgot password?
                  </a>
                </div>

                <div className="pt-6">
                  <button
                    type="submit"
                    className="w-full btn-primary uppercase tracking-wide font-black py-4 text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all rounded-2xl"
                  >
                    Authenticate
                  </button>
                </div>

                <div className="text-center pt-8 border-t border-primary-100">
                  <span className="text-primary-600 font-medium">Don't have an account? </span>
                  <Link to="/register" className="text-accent-600 hover:text-accent-700 font-bold uppercase tracking-wide underline underline-offset-4 decoration-2">
                    Create One
                  </Link>
                </div>
              </form>
            </div>

            {/* Help Section */}
            <div className="max-w-lg mx-auto xl:mx-0 w-full xl:mr-auto space-y-10">
              <div className="bg-white rounded-3xl p-10 shadow-lg border border-primary-100">
                <h2 className="text-2xl font-black text-primary-900 mb-8 uppercase border-l-4 border-accent-500 pl-3">Need Help Logging In?</h2>
                <div className="space-y-8">
                  <div className="flex items-start group">
                    <div className="w-12 h-12 bg-primary-50 rounded-2xl text-primary-900 font-black text-xl flex items-center justify-center mr-5 flex-shrink-0 group-hover:bg-accent-500 group-hover:text-white transition-colors shadow-sm">
                      1
                    </div>
                    <div>
                      <h3 className="font-bold text-primary-900 text-lg mb-1 group-hover:text-accent-600 transition-colors">Check credentials</h3>
                      <p className="text-primary-600 font-medium leading-relaxed">Ensure your university email and designated password are entered correctly without typos.</p>
                    </div>
                  </div>
                  <div className="flex items-start group">
                    <div className="w-12 h-12 bg-primary-50 rounded-2xl text-primary-900 font-black text-xl flex items-center justify-center mr-5 flex-shrink-0 group-hover:bg-accent-500 group-hover:text-white transition-colors shadow-sm">
                      2
                    </div>
                    <div>
                      <h3 className="font-bold text-primary-900 text-lg mb-1 group-hover:text-accent-600 transition-colors">Account activation</h3>
                      <p className="text-primary-600 font-medium leading-relaxed">New students must activate their accounts via the link sent to their personal email.</p>
                    </div>
                  </div>
                  <div className="flex items-start group">
                    <div className="w-12 h-12 bg-primary-50 rounded-2xl text-primary-900 font-black text-xl flex items-center justify-center mr-5 flex-shrink-0 group-hover:bg-accent-500 group-hover:text-white transition-colors shadow-sm">
                      3
                    </div>
                    <div>
                      <h3 className="font-bold text-primary-900 text-lg mb-1 group-hover:text-accent-600 transition-colors">IT Support</h3>
                      <p className="text-primary-600 font-medium leading-relaxed">If issues persist, visit the department or contact support for a manual password reset.</p>
                    </div>
                  </div>
                </div>

                <div className="mt-10 pt-8 border-t border-primary-100 flex flex-col sm:flex-row gap-4">
                  <Link to="/contact" className="w-full flex-1 btn-secondary text-center uppercase tracking-wide font-bold py-3">
                    Contact IT Desk
                  </Link>
                </div>
              </div>

              {/* Security Notice */}
              <div className="bg-primary-900 rounded-3xl p-8 shadow-xl text-white relative overflow-hidden group">
                <div className="absolute inset-0 bg-accent-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 relative z-10 text-center sm:text-left">
                  <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0 backdrop-blur-sm border border-white/20">
                    <svg className="w-8 h-8 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-black uppercase tracking-wide mb-2 text-white">Security First</h3>
                    <p className="text-primary-200 font-medium leading-relaxed">
                      Never share your credentials. Always verify you are on the official Bugema University secure portal before entering information.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

export default Login
