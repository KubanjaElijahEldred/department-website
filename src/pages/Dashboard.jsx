import { useState } from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  const studentInfo = {
    name: 'John Doe',
    program: 'Bachelor of Information Technology',
    year: 'Year 3',
    studentId: 'BIT/2023/001'
  }

  const notices = [
    {
      id: 1,
      title: 'End of Semester Examination Schedule',
      date: 'April 15, 2026',
      type: 'urgent',
      content: 'Final examinations will begin on May 2, 2026. Please check your personal timetable.'
    },
    {
      id: 2,
      title: 'Registration for Next Semester',
      date: 'April 10, 2026',
      type: 'info',
      content: 'Online registration for the next semester is now open. Deadline: April 30, 2026.'
    },
    {
      id: 3,
      title: 'IT Department Workshop',
      date: 'April 5, 2026',
      type: 'event',
      content: 'Join us for a hands-on workshop on Cloud Computing this Saturday.'
    }
  ]

  const quickLinks = [
    { title: 'Course Registration', path: '/dashboard/registration', icon: '📝' },
    { title: 'Academic Calendar', path: '/dashboard/calendar', icon: '📅' },
    { title: 'Library Resources', path: '/dashboard/library', icon: '📚' },
    { title: 'IT Support', path: '/dashboard/support', icon: '💻' },
    { title: 'Exam Results', path: '/dashboard/results', icon: '📊' },
    { title: 'Financial Records', path: '/dashboard/finance', icon: '💰' }
  ]

  const getNoticeColor = (type) => {
    switch (type) {
      case 'urgent':
        return 'bg-red-50 text-red-700 border-red-200'
      case 'event':
        return 'bg-blue-50 text-blue-700 border-blue-200'
      default:
        return 'bg-green-50 text-green-700 border-green-200'
    }
  }

  return (
    <div className="min-h-screen bg-secondary-50 font-sans">
      {/* Header */}
      <section className="bg-primary-900 text-white shadow-xl border-b-8 border-accent-500 relative">
        <div className="absolute inset-0 bg-[url('/src/assets/images/campus-building.jpg')] opacity-5 bg-cover bg-center mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <h1 className="text-3xl font-black uppercase tracking-wide mb-1">Student Portal</h1>
              <p className="text-primary-200 font-medium text-lg">Welcome back, <span className="text-white font-bold">{studentInfo.name}</span></p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <span className="px-4 py-1.5 bg-primary-800/80 backdrop-blur border border-primary-700 rounded-full text-sm font-bold tracking-wider uppercase">
                {studentInfo.program}
              </span>
              <span className="px-4 py-1.5 bg-accent-500 rounded-full text-sm font-bold text-white tracking-wider uppercase shadow-md">
                {studentInfo.year}
              </span>
              <button className="text-primary-200 hover:text-white bg-primary-800 p-2 rounded-full border border-primary-700 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c-.94 1.543.826 3.31 2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c.94-1.543-.826-3.31-2.37-2.37a1.724 1.724 0 00-2.572-1.065c-.426-1.756-2.924-1.756-3.35 0a1.724 1.724 0 00-2.573 1.066c-1.543-.94-3.31.826-2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 002.573-1.066c1.543.94 3.31-.826 2.37-2.37a1.724 1.724 0 001.066-2.572c1.756-.426 1.756-2.924 0-3.35a1.724 1.724 0 00-2.573 1.066c-1.543-.94-3.31.826-2.37 2.37a1.724 1.724 0 00-1.065 2.572c-1.756.426-1.756 2.924 0 3.35a1.724 1.724 0 002.573-1.066c1.543.94 3.31-.826 2.37-2.37a1.724 1.724 0 001.066-2.572z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Main Content Area */}
            <div className="lg:col-span-2 space-y-10">
              {/* Notices Section */}
              <div className="bg-white rounded-2xl p-8 shadow-md border border-primary-100">
                <h2 className="text-2xl font-black text-primary-900 mb-6 uppercase border-l-4 border-accent-500 pl-3">Notices & Announcements</h2>
                <div className="space-y-4">
                  {notices.map((notice) => (
                    <div key={notice.id} className={`p-5 rounded-xl border ${getNoticeColor(notice.type)}`}>
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="font-bold text-lg">{notice.title}</h3>
                        <span className="text-sm font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/50">{notice.date}</span>
                      </div>
                      <p className="font-medium opacity-90">{notice.content}</p>
                    </div>
                  ))}
                </div>
                <Link to="/dashboard/notices" className="inline-flex items-center mt-6 text-accent-600 hover:text-accent-700 font-bold uppercase tracking-wide text-sm group">
                  View All Notices 
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" /></svg>
                </Link>
              </div>

              {/* Recent Activity */}
              <div className="bg-white rounded-2xl p-8 shadow-md border border-primary-100">
                <h2 className="text-2xl font-black text-primary-900 mb-6 uppercase border-l-4 border-accent-500 pl-3">Recent Activity</h2>
                <div className="space-y-4">
                  <div className="flex items-center space-x-5 p-5 bg-primary-50 rounded-xl border border-primary-100">
                    <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-primary-900 text-lg">Assignment submitted</p>
                      <p className="text-primary-700 font-medium">Database Systems - Project 2</p>
                      <p className="text-sm text-primary-500 font-semibold mt-1">2 hours ago</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-5 p-5 bg-primary-50 rounded-xl border border-primary-100">
                    <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-primary-900 text-lg">New course material uploaded</p>
                      <p className="text-primary-700 font-medium">Web Application Development</p>
                      <p className="text-sm text-primary-500 font-semibold mt-1">Yesterday</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-5 p-5 bg-primary-50 rounded-xl border border-primary-100">
                    <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-primary-900 text-lg">Grade posted</p>
                      <p className="text-primary-700 font-medium">Computer Networks - Midterm</p>
                      <p className="text-sm text-primary-500 font-semibold mt-1">2 days ago</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-10">
              {/* Student Info Card */}
              <div className="bg-primary-900 rounded-2xl p-8 shadow-xl text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-accent-500 rounded-bl-full opacity-30"></div>
                <h3 className="text-xl font-black mb-6 uppercase border-l-4 border-accent-500 pl-3 relative z-10">Student Profile</h3>
                <div className="space-y-4 relative z-10">
                  <div className="bg-primary-800/50 p-4 rounded-xl border border-primary-700">
                    <p className="text-xs text-primary-300 font-bold uppercase tracking-wider mb-1">Name</p>
                    <p className="font-bold text-lg">{studentInfo.name}</p>
                  </div>
                  <div className="bg-primary-800/50 p-4 rounded-xl border border-primary-700">
                    <p className="text-xs text-primary-300 font-bold uppercase tracking-wider mb-1">Student ID</p>
                    <p className="font-bold text-lg">{studentInfo.studentId}</p>
                  </div>
                  <div className="bg-primary-800/50 p-4 rounded-xl border border-primary-700">
                    <p className="text-xs text-primary-300 font-bold uppercase tracking-wider mb-1">Program</p>
                    <p className="font-bold leading-tight">{studentInfo.program}</p>
                  </div>
                  <div className="bg-primary-800/50 p-4 rounded-xl border border-primary-700">
                    <p className="text-xs text-primary-300 font-bold uppercase tracking-wider mb-1">Current Year</p>
                    <p className="font-bold">{studentInfo.year}</p>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="bg-white rounded-2xl p-8 shadow-md border border-primary-100">
                <h3 className="text-xl font-black text-primary-900 mb-6 uppercase border-l-4 border-accent-500 pl-3">Quick Links</h3>
                <div className="grid grid-cols-2 gap-4">
                  {quickLinks.map((link, index) => (
                    <Link
                      key={index}
                      to={link.path}
                      className="flex flex-col items-center justify-center p-4 bg-primary-50 rounded-xl border border-primary-100 hover:border-accent-500 hover:shadow-md hover:-translate-y-1 transition-all text-center group"
                    >
                      <span className="text-3xl mb-3 group-hover:scale-110 transition-transform">{link.icon}</span>
                      <span className="text-sm font-bold text-primary-900 leading-tight">{link.title}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Support */}
              <div className="bg-white rounded-2xl p-8 shadow-md border border-primary-100">
                <h3 className="text-xl font-black text-primary-900 mb-6 uppercase border-l-4 border-accent-500 pl-3">Need Help?</h3>
                <div className="space-y-4">
                  <Link to="/dashboard/support" className="flex items-center justify-between p-4 bg-primary-50 rounded-xl border border-primary-100 hover:bg-accent-50 hover:border-accent-200 transition-colors group">
                    <span className="font-bold text-primary-900">IT Support</span>
                    <svg className="w-5 h-5 text-accent-500 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                  <Link to="/contact" className="flex items-center justify-between p-4 bg-primary-50 rounded-xl border border-primary-100 hover:bg-accent-50 hover:border-accent-200 transition-colors group">
                    <span className="font-bold text-primary-900">Contact Department</span>
                    <svg className="w-5 h-5 text-accent-500 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Dashboard
