import React from 'react'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import { AboutPage } from './pages/about'
import { HomePage } from './pages/home'
import { Products } from './pages/products'
import { Events } from './pages/events'
import { Programs } from './pages/programs'
import { Jobs } from './pages/jobs'

function App () {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<HomePage />} />
        <Route path="/pmenoslab/about" element={<AboutPage />} />
        <Route path="/pmenoslab/products" element={<Products />} />
        <Route path="/pmenoslab/events" element={<Events />} />
        <Route path="/pmenoslab/programs" element={<Programs />} />
        <Route path="/pmenoslab/jobs" element={<Jobs />} />
      </Routes>
    </Router>
  )
}

export default App
