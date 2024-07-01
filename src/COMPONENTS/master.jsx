import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import List from './list'


const Master1 = () => {
  return (
    <div className='flex flex-col max-h-[1500vh] max-w-full'>
      <Navbar/>
      <Hero/>
      <List/>
   
      
    </div>
  )
}

export default Master1