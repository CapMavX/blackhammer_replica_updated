import React from 'react'
import {GiPieChart } from "react-icons/gi"
import {CgProfile } from "react-icons/cg"
import {FaBuildingColumns } from "react-icons/fa6"
import {IoLocationOutline} from "react-icons/io5"
import {BiBarChartSquare} from "react-icons/bi"
import {IoSettingsOutline} from "react-icons/io5"
import Navbar from './Navbar'


const Sidebar1 = () => {
  return (
   
    <div className='w-[290px]  mt-[26px] ml-[26px] rounded-2xl flex flex-col bg-[#168DE2] pr-[20px]'> 
    <div className='w-[249px] h-[45px] mt-[43px] ml-[24px] bg-white '><p className='w-[54px] h-[23px] mt-[11px] ml-[98px] font-[Inter] font-medium text-lg leading-6 content-center text-black cursor-pointer'>LOGO</p></div>
    <ul className='w-[Hug (249px)] h-[ Hug (377px)] mt-[21px] ml-[20px] flex flex-col gap-[13px]'>
     <div className='w-[249px] h-[52px] rounded-xl hover:bg-white hover:text-[#168DE2] text-white '> <li className='w-[Hug (130px)] h-[Hug (24px)] mt-[14px] ml-[23px] gap-[6px] flex ' > <GiPieChart className='w-[24px] h-[24px]  '/> <a href='/Home' className='w-[100px] h-[23px] font-[Inter] font-medium text-lg  leading-6 text-center  cursor-pointer'>Dashboard</a></li></div> 
      <div className='w-[249px] h-[52px] rounded-xl bg-[#168DE2] hover:bg-white hover:text-[#168DE2] text-white '><li className='w-[Hug (92px)] h-[Hug (24px)] mt-[14px] ml-[23px] gap-[6px] flex '> <CgProfile className='w-[24px] h-[24px]  '/> <a href='/Miners' className='w-[62px] h-[23px] font-[Inter] font-medium text-lg leading-6 text-center  '> Miners</a></li></div>
      <div className='w-[249px] h-52px rounded-xl bg-[#168DE2] hover:bg-white hover:text-[#168DE2] text-white  '><li className='w-[Hug (92px)] h-[Hug (24px)] mt-[14px] ml-[23px] gap-[6px] flex'><FaBuildingColumns className='w-[20px] h-[20px] mt-[2px] ml-[2px] rounded-sm '/><a href='#' className='w-[103px] h-[23px] font-[Inter] font-medium text-lg leading-6 text-center  cursor-pointer'>Companies</a></li></div>
      <div className='w-[249px] h-52px rounded-xl bg-[#168DE2] hover:bg-white hover:text-[#168DE2] text-white '><li className='w-[Hug (196px)] h-[Hug (24px)] mt-[14px] ml-[23px] gap-[8px] flex'> <IoLocationOutline className='w-[17px] h-[19.98px] mt-[2px] ml-[3.5px] ' /> <a href='#' className='w-[166px] h-[23px] font-[Inter] font-medium text-lg leading-6   text-center  cursor-pointer'>Local Government</a></li></div>
      <div className='w-[249px] h-52px rounded-xl bg-[#168DE2] hover:bg-white hover:text-[#168DE2] text-white '><li  className='w-[Hug (92px)] h-[Hug (24px)] mt-[14px] ml-[23px] gap-[6px] flex'> <BiBarChartSquare className='w-[20px] h-[20px] mt-[2px] ml-[2px] rounded-sm '/> <a href='#' className='w-[62px] h-[23px] font-[Inter] font-medium text-lg leading-6   text-center  cursor-pointer'> Charts</a></li></div>
      <div className='w-[249px] h-52px rounded-xl bg-[#168DE2] hover:bg-white hover:text-[#168DE2] text-white '> <li className='w-[Hug (106px)] h-[Hug (24px)] mt-[14px] ml-[23px] gap-[6px] flex' >  <IoSettingsOutline className='w-[19px] h-[20px] mt-[2px] ml-[2.5px] text'/> <a href='#' className='w-[76px] h-[23px] font-[Inter] font-medium text-lg leading-6   text-center  cursor-pointer'> Settings</a></li></div>
    </ul>
    </div>
   
  
  );
}

export default Sidebar1