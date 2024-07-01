import React from 'react'
import {CgProfile } from "react-icons/cg"

const UHero = () => {
  return (
    <div className='w-[930px] h-[128px] mt-[29px] ml-[39px] rounded-[13px] bg-white flex'>
        <div className='w-[50px] h-[81px] mt-[24px] ml-[23px] rounded-[60px] '>
        <CgProfile className='w-[60px] h-[83px] mt-[-1px] ml-[-2px] text-[#E3F3FF]'/>
        </div>
        <div className='w-[10px] h-[71px] mt-[29px] ml-[19px] gap-[21px] '>
                <h1 className='w-[280px] h-[28px] font-[Roboto] font-bold text-[20px] leading-[28.13px] text-[#181817]'>Muhammad Isah Abdulkadir</h1>
                <h2 className='w-[120px] h-[22px] font-[Roboto] font-normal text-[15px] leading-[22.27px] mt-[15px] text-[#8196B3]'>+234 803 566 6779</h2>
        </div>
        <div className='w-[380px] h-[41px] mt-[29px] ml-[400px] gap-[18px]  flex'>
            <div className='w-[192px] h-[41px] rounded-[8px] bg-[#168DE2]'>
                <div className='w-[68px] h-[17px] mt-[8px] ml-[61.5px] gap-[12px]'>
                    <a href='#' className='w-[68px] h-[17px] font-[Inter] font-medium text-[14px] leading-[16.94px]  text-white'>Edit Miner</a>
                </div>
            </div>
            <div className='w-[192px] h-[41px] rounded-[8px] flex bg-[#FEE5E5]'>
            <div className='w-[68px] h-[17px] mt-[11.5px] ml-[61.5px] gap-[12px] flex flex-col'>
                    <a href='#' className='w-[88px] h-[17px] font-[Inter] font-medium text-[14px] leading-[16.94px]  text-[#FD5E5E]'>Delete Miner</a>
                </div>
            </div>
        </div>

    </div>
  )
}

export default UHero