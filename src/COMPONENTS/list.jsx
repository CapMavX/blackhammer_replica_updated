import React from 'react'
import {CiSearch} from 'react-icons/ci'
import {FaPlus} from 'react-icons/fa6'
import {CgProfile} from 'react-icons/cg'
import { BiMessageSquareDots } from 'react-icons/bi'

const List = () => {
  return (
    <table className='max-w-[950px] max-h-screen mt-[29px] ml-[39px] rounded-[13px]  bg-white'>
       
       <head className='max-w-[950px] h-[41px]   mt-[24px] ml-[24px] flex'>
       <div className='w-[234px] h-[40px] rounded-[8px] border-[0.5px] gap-[10px] bg-gray pt-[8px] pb-[11px] pl-[8px] pr-[11px]'>
        <div className='w-[Hug (34px)] h-[Hug (24px)] gap-[16px] flex flex-row'>
        <div className='w-[24px] h-[24px]'><CiSearch className='w-[20px] h-[20px] mt-[2px] ml-[2px] text-[#88A1B4]'/></div>
        <p className='w-[94px] text-[13px] h-[15px] font-[Roboto] font-normal leading-[15.23px] mt-[4px] text-center text-[#88A1B3]'>Search Miners...</p>
        </div>

       </div>
       
       


       <div className='w-[Hug (182px)] h-[Hug (41px)] gap-[10px]   flex'>
           <div className='w-[182px] h-[41px] rounded-[12px] bg-[#168DE2] ml-[435px]'>
            <div className='w-[Hug (128px)] h-[Hug (20px)] mt-[11px] ml-[27px] gap-[12px] flex'>
                <div className='w-[20px] h-[20px] rounded-[20px]'><FaPlus className='w-[20px] h-[20px] text-[#E3F3FF]'/></div>
                <div className='w-[96px] h-[16px] text-white mt-[-5px]'><a href='/NewUser' className='w-[196px] h-[16px] mt-[-2px] ml-[2px] text-[13px]'>Add New Miner</a> </div>
            </div>
            </div> 
       </div>
       
    </head>
      <body className=' h-[514px] mt-[24px] ml-[24px] mr-[24px] gap-[36px]  '>
        
  
      
    <div className='w-[870px]   mt-[29px] flex flex-col '>
    <div className='w-[870px] h-[Hug (18px)] gap-[52px] flex'>
        <input type="checkbox" className='w-[18px] h-[18px] rounded-[5px] border-[1px] opacity-[50%] text-[#8196B3]' />
        <div className='w-[1240px] h-[13.5px] text-[#88A1B3] flex  justify-between' >
            <p className='w-[63px] h-[13px] mt-[2.75px] ml-[10px] font-[Inter] font-normal text-[11px] leading-[13.31px] text-[#88A1B3]'>Miner Name</p>
            <p className='w-[-106px] h-[13px] mt-[2.75px] ml-[50px] font-[Inter] font-normal text-[11px] leading-[13.31px] text-[#88A1B3]'>Phone Number</p>
            <p className='w-[28px] h-[13px] mt-[2.75px] ml-[30px] font-[Inter] font-normal text-[11px] leading-[13.31px] text-[#88A1B3]'>State</p>
            <p className='w-[95px] h-[13px] mt-[2.75px] ml-[30px] font-[Inter] font-normal text-[11px] leading-[13.31px] text-[#88A1B3] '>Local Government</p>
            <p className='w-[27px] h-[13px] mt-[2.75px] ml-[30px] font-[Inter] font-normal text-[11px] leading-[13.31px] text-[#88A1B3]'>Ward</p>
            <p className='w-[58px] h-[13px] mt-[2.75px] ml-[50px] font-[Inter] font-normal text-[11px] leading-[13.31px] text-[#88A1B3]'>Experience</p>
            <p className='w-[34px] h-[13px] mt-[2.75px] ml-[30px] font-[Inter] font-normal text-[11px] leading-[13.31px] text-[#88A1B3]'>Action</p>
       
        
        </div>
    </div>
   
    <div className='w-[870px] h-[401px] gap-[10px] flex flex-col mt-[10px] '>
            
          <div className='gap-[15px] flex flex-col'>
            {[1,2,3,4,5,6,7,8,9,10].map((val, i) =>(
              <div className='h-[33px] w-[870px] gap-[3px]'>
                <div className='w-[852px] h-[30px] flex'>
                  <div className='w-[786px] h-[30px]   flex'>
                    <div className='w-[18px] h-[18px] mt-[3px]'>
                      <input type="checkbox" className='w-[18px] rounded-[5px] border-[1px] opacity-[50%] text-[#88A1B3]' />
                    </div>
                    <div className='w-[180px] h-[30px] gap-[9px]  flex'>
                      <div className='w-[20px] h-[20px] '><CgProfile className='w-[18.95px] h-[18.95px] mt-[5.53px] ml-[5.53px] text-[#168DE2]'/>
                      </div>
                      <a href='/User' className='w-[160px] h-[16px] font-[Inter] text-[12px] leading-[15.73px] text-[#181817] mt-[6.53px]'>Muhammad Isah Abdulkadir</a>
                    </div>
                    <p className='w-[110px] h-[16px] mt-[7px] font-[Inter] font-normal text-[12px] leading-[15.73px] ml-[5px] text-[#181817]'>+234 804 567 9876</p>
                    <p className='w-[60px] h-[16px] mt-[7px] font-[Inter] font-normal text-[12px] leading-[15.73px] ml-[30px] text-[#181817]'>Niger State</p>
                    <p className='w-[61px] h-[16px] mt-[7px] font-[Inter] font-normal text-[12px] leading-[15.73px] ml-[40px] text-[#181817]'>Suleja/Tafa</p>
                    <p className='w-[121px] h-[16px] mt-[7px] font-[Inter] font-normal text-[12px] leading-[15.73px] ml-[55px] text-[#181817]'>Tundan wada south</p>
                    <p className='w-[78px] h-[16px] mt-[7px] font-[Inter] font-normal text-[12px] leading-[15.73px] ml-[35px] text-[#181817]'>Six (6) Years</p>
                    </div>
                    <div className='w-[16px] h-[16px] mt-[7px] ml-[60px]'>
                      <BiMessageSquareDots className='w-[13.33px] h-[13.33px mt-[1.33px] ml-[1.33px] text-[#181817]'/>
                    </div>

                  </div>
                  <hr/>
                </div>
              
              
              
            ))}
          </div>

    </div>
    </div>
    


    </body>

    
      
      </table>
   
   
  )
}

export default List