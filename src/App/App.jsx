import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from '../Home/Home'
import About from '../About/About'
import Download from '../Download/Download'

function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/about' exact element={<About />} />
        <Route path='/download' exact element={<Download />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
