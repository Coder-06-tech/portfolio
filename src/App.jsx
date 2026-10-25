import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import About from './pages/About.jsx'
import Projects from './pages/Projects.jsx'
import Experience from './pages/Experience.jsx'
import Skills from './pages/Skills.jsx'
import Education from './pages/Education.jsx'
import Contact from './pages/Contact.jsx'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="experience" element={<Experience />} />
        <Route path="skills" element={<Skills />} />
        <Route path="education" element={<Education />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  )
}