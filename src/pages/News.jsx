import { Link } from 'react-router-dom'
import {
  aboutHeroImage,
  campusBuildingImage,
  programsBackgroundImage,
  staffHeroImage,
} from '../assets/images'

const News = () => {
  const newsItems = [
    {
      id: 1,
      title: 'Campus Building',
      date: 'March 10, 2026',
      excerpt: 'Explore the recent developments and upgrades to our main campus building infrastructure.',
      image: campusBuildingImage
    },
    {
      id: 2,
      title: 'Programs Background',
      date: 'March 15, 2026',
      excerpt: 'A look into the background of our core academic programs and curriculum enhancements.',
      image: programsBackgroundImage
    },
    {
      id: 3,
      title: 'Staff Excellence',
      date: 'March 20, 2026',
      excerpt: 'Honoring our dedicated staff members who go above and beyond for student success.',
      image: staffHeroImage
    },
    {
      id: 4,
      title: 'Department Innovation',
      date: 'March 25, 2026',
      excerpt: 'Discover the journey and vision behind our newly redesigned department platform.',
      image: aboutHeroImage
    }
  ]

  return (
    <div className="min-h-screen bg-secondary-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">B</span>
              </div>
              <span className="text-xl font-semibold text-secondary-900">create</span>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <Link to="/about" className="text-secondary-600 hover:text-primary-600 transition-colors">
                ABOUT US
              </Link>
              <Link to="/programs" className="text-secondary-600 hover:text-primary-600 transition-colors">
                PRODUCTS
              </Link>
              <Link to="#" className="text-secondary-600 hover:text-primary-600 transition-colors">
                PRESS
              </Link>
              <Link to="/news" className="text-primary-600 font-bold">
                NEWS
              </Link>
              <Link to="/contact" className="text-secondary-600 hover:text-primary-600 transition-colors">
                CONTACT US
              </Link>
              <button className="text-secondary-600 hover:text-primary-600 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* News Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-secondary-900 mb-4">LATEST NEWS</h1>
            <p className="text-xl text-secondary-600">
              Stay updated with our recent events and announcements.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {newsItems.map((item) => (
              <article key={item.id} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg mb-6 aspect-[4/3]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="space-y-3">
                  <time className="text-sm text-secondary-500">{item.date}</time>
                  <h3 className="text-xl font-semibold text-secondary-900 group-hover:text-primary-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-secondary-600 mb-4">{item.excerpt}</p>
                  <Link 
                    to={`/news/${item.id}`}
                    className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium group"
                  >
                    Read full story 
                    <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-secondary-900 mb-4">
            Stay Updated with Latest News
          </h2>
          <p className="text-lg text-secondary-600 mb-8">
            Subscribe to our newsletter to receive the latest updates about department events, programs, and announcements.
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 border border-secondary-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <button className="px-6 py-3 bg-primary-600 text-white rounded-r-lg hover:bg-primary-700 transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-secondary-500 mt-3">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-secondary-900 mb-12">
            News Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-3">Campus Updates</h3>
              <p className="text-secondary-600 mb-4">
                Latest developments in our campus infrastructure and facilities.
              </p>
              <Link to="/news/category/campus" className="text-primary-600 hover:text-primary-700 font-medium">
                View Campus News →
              </Link>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-3">Academic Programs</h3>
              <p className="text-secondary-600 mb-4">
                Updates on curriculum changes, new programs, and academic achievements.
              </p>
              <Link to="/news/category/academic" className="text-primary-600 hover:text-primary-700 font-medium">
                View Academic News →
              </Link>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-secondary-900 mb-3">Staff & Students</h3>
              <p className="text-secondary-600 mb-4">
                Stories about our staff excellence and student achievements.
              </p>
              <Link to="/news/category/people" className="text-primary-600 hover:text-primary-700 font-medium">
                View People News →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Events */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-secondary-900 mb-12">
            Upcoming Events
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-lg flex flex-col items-center justify-center">
                    <span className="text-xs font-medium">APR</span>
                    <span className="text-xl font-bold">05</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-secondary-900 mb-2">
                    Admissions Support Week
                  </h3>
                  <p className="text-secondary-600 mb-3">
                    Prospective students can receive one-on-one guidance on program selection, document preparation, and online application steps.
                  </p>
                  <div className="flex items-center text-sm text-secondary-500">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    9:00 AM - 4:00 PM
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-lg flex flex-col items-center justify-center">
                    <span className="text-xs font-medium">APR</span>
                    <span className="text-xl font-bold">18</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-secondary-900 mb-2">
                    Student Innovation Showcase
                  </h3>
                  <p className="text-secondary-600 mb-3">
                    Final-year students will present software, networking, and data-driven projects developed through practical departmental coursework.
                  </p>
                  <div className="flex items-center text-sm text-secondary-500">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    2:00 PM - 6:00 PM
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

export default News
