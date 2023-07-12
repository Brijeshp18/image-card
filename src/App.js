import React from 'react'
import Igallery from './components/Igallery'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'

function App() {
  return (
    <>
    <Router>

      <Routes>

        <Route path='/' element={<Igallery/>}/>
        <Route path='/image-card' element={<Igallery/>}/>
      </Routes>
    </Router>
    
      </>
   
  )
}

export default App