import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SiteAssistant from './components/SiteAssistant'
import Home from './pages/Home'
import Programs from './pages/Programs'
import Admissions from './pages/Admissions'
import Login from './pages/Login'
import Register from './pages/Register'
import News from './pages/News'
import About from './pages/About'
import Alumni from './pages/Alumni'
import Dashboard from './pages/Dashboard'
import Contact from './pages/Contact'
import SearchResults from './pages/SearchResults'

function App() {
  return (
    <div className="min-h-screen bg-secondary-50">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/news" element={<News />} />
          <Route path="/about" element={<About />} />
          <Route path="/alumni" element={<Alumni />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/search" element={<SearchResults />} />
        </Routes>
      </main>
      <Footer />
      <SiteAssistant />
    </div>
  )
}

export default App
