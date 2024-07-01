import React from 'react'
import { FaBell} from 'react-icons/fa6'
import {CgProfile } from "react-icons/cg"

const Navbar = () => {
  return (
    <nav className=' max-w-fit h-[80px] mt-[26px] ml-[39px]  rounded-2xl bg-white flex' id='Dashboard'>
        <div className='max-w-fit h-[Hug (47px)] mt-[16px] ml-[16px] gap-[10px]'><h1 className='w-[123px] h-[21px] font-[Inter] font-semibold text-base leading-5 text-black'>Hi, Muhammad</h1><h2 className='w-[265px] h-[16px] font-[Inter] font-normal italic text-xs leading-4 text-gray-600'>Good Evening - Sunday, 1 September 2023</h2></div>
        <div className='max-w-fit h-[Hug (35px)] mt-[24px]  ml-[450px] gap-[20px] flex'>
          <div className='w-[24px] h-[24px]'>
            <FaBell className='w-[18px] h-[20px] mt-[10px] ml-[3px] text-[#88A1B3]'/>
          </div>
          <div className='w-[Hug (165px)] h-[Hug (35px)] gap-[8px] flex flex-row'>
            <div className='w-[30px] h-[30px]'>
            <CgProfile className='w-[30px] h-[30px] mt-[1.58px] text-[#181817]'/>
            </div>
          
          <div className='w-[Hug (127px)] h-[Hug (35px)] gap-[-4px] mr-[15px] flex flex-col'>
          <h2 className='w-[127px] h-[18px] font-[Roboto] font-normal text-[16px] leading-[17.58px] text-right mt-[5px]'>Muhammad Bashir</h2>
          <a href='#' className='w-[58px] h-[13px] font-[Roboto] font-normal text-[11px] leading-[12.89px] text-[#168DE2] ml-[5px]'>View Profile</a>
          </div>
          </div>
          
          </div>

    </nav>
  )
}

export default Navbar