import React from 'react'
import {IoLocationOutline} from "react-icons/io5"
import {FaBuildingColumns } from "react-icons/fa6"


const Hero = () => {
  return (
    <div className='flex flex-col'>
    <div className='flex row'>
    <div className='max-w-fit h-[84px] mt-[29px] ml-[39px] rounded-[13px] bg-white flex'>
        <div className='w-[58px] h-[58px] mt-[13px] ml-[13px] rounded-[8px] bg-[#D8EEFF] flex'>
           
            <div className='w-[34px] h-[34px] mt-[12px] ml-[12px] flex'>
            <IoLocationOutline className='w-[24.08px] h-[28.31px] mt-[2.83px] ml-[4.96px] text-[#168DE2]'/>
            </div>
        </div>
            <div className='w-[230px] h-[Hug (55px)] mt-[14px] ml-[10px] gap-[10px] flex flex-col'>
                <h1 className='w-[48px] h-[29px] font-[Inter] font-semibold text-[24px] leading-[29.05px] text-[#130F26]'>800</h1>
                <p className='w-[117px] h-[16px] font-[Inter] font-normal text-[13px] leading-[15.73px] text-[#607087]'>Miners in 24 states</p>
                </div>    

        </div>

        <div className=' max-w-fit h-[84px] mt-[29px] ml-[330px] rounded-[13px] flex bg-white'>
          <div className='w-[58px]  h-[58px] mt-[13px] ml-[13px] rounded-[8px] bg-[#FFEFD8] flex'>
            <div className='w-[34px] h-[34px] mt-[12px] ml-[12px] '>
            <IoLocationOutline className='w-[24.08px] h-[28.31px] mt-[2.83px] ml-[4.96px] text-[#F3A409]'/>
            </div>

          </div>
            <div className='max-w-fit h-[Hug (55px)] mt-[14px] ml-[10px] gap-[10px] flex flex-col'>
            <h1 className='w-[48px] h-[29px] font-[Inter] font-semibold text-[24px] leading-[29.05px] text-[#130F26]'>800</h1>
            <p className='w-[230px] h-[16px] font-[Inter] font-normal text-[13px] leading-[15.73px] text-[#607087]'>Miners in 24 Local Government Areas</p>
            </div>
        </div>


        


        </div>
        <div className=' w-[950px] h-[84px] mt-[29px] ml-[39px] rounded-[13px] bg-white flex'>
        <div className='w-[58px] h-[58px] mt-[13px] ml-[13px] rounded-[8px] bg-[#E5FEE9] flex'>
          <div className='w-[34px] h-[34px] mt-[12px] ml-[12px]'>
          <FaBuildingColumns className='w-[28.33px] h-[28.33px] mt-[2.83px] ml-[2.83px] rounded-[1px] text-[#33B04E]'/>
          </div>
        </div>
       <div className='w-[Hug (181px)] h-[Hug (55px)] mt-[14px] ml-[10px] gap-[10px] flex flex-col'>
        <h1 className='w-[85px] h-[29px] font-[Inter] font-semibold text-[24px] leading-[29.05px] text-[#130F26] '>24,000</h1>
        <p className='w-[181px] h-[16px] font-[Inter] font-normal text-[13px] leading-[15.73px] text-[#607087] ' >Registered mining companies</p>

       </div>

        </div>




        </div>
       
    
  )
}

export default Hero