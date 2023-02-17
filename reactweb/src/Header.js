import React from 'react'
import Home from './Home/Home'
import About from './About/About'
import {BrowserRouter,Routes,Route}  from 'react-router-dom'
import Service from './Service/Service'
const Header = () => {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/about' element={<About/>}></Route>
                <Route path='/service' element={<Service/>}></Route>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Header
