import { useState, useEffect} from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './pages/Footer'
import About from './pages/About'
import Home from './pages/Home'
import Menu from './pages/Menu'
import Contact from './pages/Contact'
import Photogallery from './pages/Photogallery'
import "./CSS/App.css"
import BackToTopButton from './BackToTopButton'
import ScrollToTop from './ScrollToTop'






function App() {

  

  return (
    <div className='Body'>
      <Router>
        <ScrollToTop/>
        <Navbar/>
        <BackToTopButton/>
        <Routes>
          <Route path='/about' element={<About/>}> </Route>
          <Route path='/' element={<Home/>}> </Route>
          <Route path='/menu' element={<Menu/>}> </Route>
          <Route path='/contact' element={<Contact/>}> </Route>
          <Route path='/photogallery' element={<Photogallery/>}> </Route>
        </Routes>
        <Footer/>
      </Router>
    </div>
  )
}

export default App
