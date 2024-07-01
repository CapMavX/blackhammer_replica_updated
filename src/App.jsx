
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Miners from './Pages/Miners'

import User1 from './Pages/User'
import NewUser from './Pages/NewUser'
import ERROR from './Pages/Nopage'
import Updated from './Pages/Updated'



const App = () => {
  return (
  <div>
    <BrowserRouter>
    <Routes>
      <Route index element={<Home/>}/>
      <Route path='/Home' element={<Home/>}/>
      <Route path='/Miners' element={<Miners/>}/>
      <Route path='/User' element={<User1/>}/>
      <Route path='/NewUser' element={<NewUser/>}/>
      <Route path='/Updated' element={<Updated/>}/>
      <Route path='*' element={<ERROR/>}/>

    </Routes>
    </BrowserRouter>
   
    </div>
  )
}

export default App