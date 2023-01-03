import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import { Error } from './components/Error'
import { LandingPage } from './pages/LandingPage'
import { Gallery } from './pages/Gallery'
import { React, useEffect } from 'react'
import { GalleryButton } from './components/GalleryButton'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />}></Route>
        <Route path='/gallery' element={<Gallery />}></Route>
        <Route path='*' element={<Error />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
