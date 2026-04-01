import { useState, useEffect } from 'react'

const NewsSlideshow = () => {
  const newsItems = [
    '🎓 Admissions Now Open for 2026',
    '💻 New IT Programs Available',
    '🏆 Department Excellence Award 2026',
    '📚 Research Grants Available',
    '🎯 Career Fair Coming Soon',
    '🔬 Innovation Lab Open',
    '📱 Mobile App Development Course',
    '🌐 International Partnerships',
    '🏢 Industry Collaboration Program',
    '📊 Data Science Workshop',
    '🔒 Cybersecurity Training',
    '☁️ Cloud Computing Certification'
  ]

  const [position, setPosition] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => (prev - 1) % 100)
    }, 50)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-primary-900 text-white py-3 overflow-hidden relative">
      <div className="absolute inset-0 flex items-center">
        <div 
          className="flex whitespace-nowrap"
          style={{ 
            transform: `translateX(${position}%)`,
            transition: 'transform 0.05s linear'
          }}
        >
          {/* First set of items */}
          {newsItems.map((item, index) => (
            <span key={`first-${index}`} className="mx-8 text-sm md:text-base font-medium inline-flex items-center">
              {item}
              <span className="mx-4 text-primary-400">•</span>
            </span>
          ))}
          
          {/* Duplicate set for seamless loop */}
          {newsItems.map((item, index) => (
            <span key={`second-${index}`} className="mx-8 text-sm md:text-base font-medium inline-flex items-center">
              {item}
              <span className="mx-4 text-primary-400">•</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default NewsSlideshow
