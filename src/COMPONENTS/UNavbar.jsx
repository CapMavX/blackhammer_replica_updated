import React from 'react'
import { FaBell} from 'react-icons/fa6'
import {CgProfile } from "react-icons/cg"
import {FaLongArrowAltLeft} from"react-icons/fa"


const UNavbar = () => {
  return (
    <nav className=' max-w-fit h-[80px] mt-[26px] ml-[39px]  rounded-2xl bg-white flex' id='Dashboard'>
        
 <div className='w-[280px] h-[31px] mt-[25px] ml-[16px] gap-[13px] flex'>
            <FaLongArrowAltLeft className='w-[12.37px]  mt-[5.12px] ml-[2.68px] text-[#88A1B3]'/>
            <div className='mt-[2.12px]'>
            <h1 className='w-[250px] h-[21px] font-[Inter] font-semibold text-[15px] leading-[20.75px] '>Miners/<a href='/Miners' className='font-[Inter] font-[400] italic text-[15px] leading-[20.57px] text-[#168DE2]'>Muhammad Isah Abdulkadir</a></h1>
            </div>
            </div>

        <div className='max-w-fit h-[Hug (35px)] mt-[24px]  ml-[400px] gap-[20px] flex'>
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

export default UNavbar