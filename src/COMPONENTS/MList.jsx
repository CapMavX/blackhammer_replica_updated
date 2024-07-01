import React from 'react'
import {CiSearch} from 'react-icons/ci'
import {FaPlus} from 'react-icons/fa6'
import {CgProfile} from 'react-icons/cg'
import { BiMessageSquareDots } from 'react-icons/bi'

import { CiImport } from 'react-icons/ci'

const MList = () => {
  return (
    <div className='max-w-[950px] max-h-screen mt-[29px] ml-[39px] rounded-[13px]  bg-white'>
       
      <div className='w-[950px] h-[514px] mt-[24px] ml-[24px] mr-[24px] gap-[36px]  '>
        <div className='max-w-fit h-[41px]    flex'>
       <div className='w-[234px] h-[40px] rounded-[8px] border-[0.5px] gap-[10px] bg-gray pt-[8px] pb-[11px] pl-[8px] pr-[11px]'>
        <div className='w-[Hug (34px)] h-[Hug (24px)] gap-[16px] flex flex-row'>
        <div className='w-[24px] h-[24px]'><CiSearch className='w-[20px] h-[20px] mt-[2px] ml-[2px] text-[#88A1B4]'/></div>
        <p className='w-[94px] text-[13px] h-[15px] font-[Roboto] font-normal leading-[15.23px] mt-[4px] text-center text-[#88A1B3]'>Search Miners...</p>
        </div>

       </div>
       <div className='w-[152px] h-[41px] gap-[10px] flex'>
        <div className='w-[151px] h-[41px] rounded-[8px] border-[0.5px] pt-[12.5px] pb-[10px] pl-[12.5px] pr-[10px] gap-[10px] ml-[300px] border-[#168DE2] flex '>
            <div className='flex w-[107px] h-[16px] g-[-4px] flex  '>
            <div className='w-[20px] h-[20px] rounded-[20px]'><CiImport className='w-[20px] h-[20px]   text-[#168DE2]'/></div>
            <div className='w-[88px] h-[16px] text-[#168DE2] flex'><a href='#' className='w-[88px] h-[16px] ml-[6px] mt-[2px] font-[Roboto] font-normal text-[14px] leading-[16.41px] text-[#168DE2]'>Import Miners</a></div>
            </div>
        </div>
       </div>
       


       <div className='w-[Hug (182px)] h-[Hug (41px)] gap-[10px]   flex'>
           <div className='w-[182px] h-[41px] rounded-[12px] bg-[#168DE2] ml-[300px]'>
            <div className='w-[Hug (128px)] h-[Hug (20px)] mt-[11px] ml-[27px] gap-[12px] flex'>
                <div className='w-[20px] h-[20px] rounded-[20px]'><FaPlus className='w-[20px] h-[20px] text-[#E3F3FF]'/></div>
                <div className='w-[96px] h-[16px] text-white mt-[-5px]'><a href='/NewUser' className='w-[196px] h-[16px] mt-[-2px] ml-[2px] text-[13px]'>Add New Miner</a> </div>
            </div>
            </div> 
       </div>
       
    </div>
  
      
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
   
    <div className='w-[870px] h-[401px] gap-[10px] flex flex-col '>
            <div className='h-[33px] w-[870px] gap-[3px]  '>
                <div className='w-[852px] h-[30px] flex'>
                        <div className='w-[786px] h-[30px] flex'>
                            <div className='w-[18px] h-[18px] mt-[6px]'>
                            <input type="checkbox" className='w-[18px]  rounded-[5px] border-[1px] opacity-[50%] text-[#88A1B3]' />
                            </div>
                            <div className='w-[180px]  h-[30px] gap-[9px] flex'>
                                    <div className='w-[20px] h-[20px] '><CgProfile className='w-[18.95px] h-[18.95px] mt-[5.53px] ml-[5.53px] text-[#168DE2]'/></div>
                           <a href='/User' className='w-[160px] h-[16px] font-[Inter] text-[12px] leading-[15.73px] text-[#181817] mt-[6.53px]' >Muhammad Isah Abdulkadir</a>
                            </div>
                            <p className='w-[110px] h-[16px] mt-[7px] font-[Inter] font-normal text-[12px] leading-[15.73px] ml-[5px] text-[#181817]'>+234 804 567 9876</p>
                            <p className='w-[60px] h-[16px] mt-[7px] font-[Inter] font-normal text-[12px] leading-[15.73px] ml-[30px] text-[#181817]'>Niger state</p>
                            <p className='w-[61px] h-[16px] mt-[7px] font-[Inter] font-normal text-[12px] leading-[15.73px] ml-[40px]  text-[#181817]'>Sulej/Tafa</p>
                            <p className='w-[121px] h-[16px] mt-[7px] font-[Inter] font-normal text-[12px] leading-[15.73px] ml-[55px] text-[#181817]'>Tundan wada south</p>
                            <p className='w-[78px] h-[16px] mt-[7px] font-[Inter] font-normal text-[12px] leading-[15.73px] ml-[35px] text-[#181817]'>Six (6) Years</p>
                        </div>
                        <div className='w-[16px] h-[16px] mt-[7px] ml-[60px]' >
                        <BiMessageSquareDots className='w-[13.33px] h-[13.33px] mt-[1.33px] ml-[1.33px] text-[#181817]'/>
                        </div>
                </div>
                <hr/>
            </div>
            <div className='h-[33px] w-[870px] gap-[3px]  '>
                <div className='w-[852px] h-[30px] flex'>
                        <div className='w-[786px] h-[30px] flex'>
                            <div className='w-[18px] h-[18px] mt-[6px]'>
                            <input type="checkbox" className='w-[18px]  rounded-[5px] border-[1px] opacity-[50%] text-[#88A1B3]' />
                            </div>
                            <div className='w-[180px]  h-[30px] gap-[9px] flex'>
                                    <div className='w-[20px] h-[20px] '><CgProfile className='w-[18.95px] h-[18.95px] mt-[5.53px] ml-[5.53px] text-[#168DE2]'/></div>
                           <a href='/User' className='w-[160px] h-[16px] font-[Inter] text-[12px] leading-[15.73px] text-[#181817] mt-[6.53px]' >Muhammad Isah Abdulkadir</a>
                            </div>
                            <p className='w-[110px] h-[16px] mt-[7px] font-[Inter] font-normal text-[12px] leading-[15.73px] ml-[5px] text-[#181817]'>+234 804 567 9876</p>
                            <p className='w-[60px] h-[16px] mt-[7px] font-[Inter] font-normal text-[12px] leading-[15.73px] ml-[30px] text-[#181817]'>Niger state</p>
                            <p className='w-[61px] h-[16px] mt-[7px] font-[Inter] font-normal text-[12px] leading-[15.73px] ml-[40px]  text-[#181817]'>Sulej/Tafa</p>
                            <p className='w-[121px] h-[16px] mt-[7px] font-[Inter] font-normal text-[12px] leading-[15.73px] ml-[55px] text-[#181817]'>Tundan wada south</p>
                            <p className='w-[78px] h-[16px] mt-[7px] font-[Inter] font-normal text-[12px] leading-[15.73px] ml-[35px] text-[#181817]'>Six (6) Years</p>
                        </div>
                        <div className='w-[16px] h-[16px] mt-[7px] ml-[60px]' >
                        <BiMessageSquareDots className='w-[13.33px] h-[13.33px] mt-[1.33px] ml-[1.33px] text-[#181817]'/>
                        </div>
                </div>
                <hr/>
            </div>
            <div className='h-[33px] w-[870px] gap-[3px]  '>
                <div className='w-[852px] h-[30px] flex'>
                        <div className='w-[786px] h-[30px] flex'>
                            <div className='w-[18px] h-[18px] mt-[6px]'>
                            <input type="checkbox" className='w-[18px]  rounded-[5px] border-[1px] opacity-[50%] text-[#88A1B3]' />
                            </div>
                            <div className='w-[180px]  h-[30px] gap-[9px] flex'>
                                    <div className='w-[20px] h-[20px] '><CgProfile className='w-[18.95px] h-[18.95px] mt-[5.53px] ml-[5.53px] text-[#168DE2]'/></div>
                           <a href='/User' className='w-[160px] h-[16px] font-[Inter] text-[12px] leading-[15.73px] text-[#181817] mt-[6.53px]' >Muhammad Isah Abdulkadir</a>
                            </div>
                            <p className='w-[110px] h-[16px] mt-[7px] font-[Inter] font-normal text-[12px] leading-[15.73px] ml-[5px] text-[#181817]'>+234 804 567 9876</p>
                            <p className='w-[60px] h-[16px] mt-[7px] font-[Inter] font-normal text-[12px] leading-[15.73px] ml-[30px] text-[#181817]'>Niger state</p>
                            <p className='w-[61px] h-[16px] mt-[7px] font-[Inter] font-normal text-[12px] leading-[15.73px] ml-[40px]  text-[#181817]'>Sulej/Tafa</p>
                            <p className='w-[121px] h-[16px] mt-[7px] font-[Inter] font-normal text-[12px] leading-[15.73px] ml-[55px] text-[#181817]'>Tundan wada south</p>
                            <p className='w-[78px] h-[16px] mt-[7px] font-[Inter] font-normal text-[12px] leading-[15.73px] ml-[35px] text-[#181817]'>Six (6) Years</p>
                        </div>
                        <div className='w-[16px] h-[16px] mt-[7px] ml-[60px]' >
                        <BiMessageSquareDots className='w-[13.33px] h-[13.33px] mt-[1.33px] ml-[1.33px] text-[#181817]'/>
                        </div>
                </div>
                <hr/>
            </div>
            <div className='h-[33px] w-[870px] gap-[3px]  '>
                <div className='w-[852px] h-[30px] flex'>
                        <div className='w-[786px] h-[30px] flex'>
                            <div className='w-[18px] h-[18px] mt-[6px]'>
                            <input type="checkbox" className='w-[18px]  rounded-[5px] border-[1px] opacity-[50%] text-[#88A1B3]' />
                            </div>
                            <div className='w-[180px]  h-[30px] gap-[9px] flex'>
                                    <div className='w-[20px] h-[20px] '><CgProfile className='w-[18.95px] h-[18.95px] mt-[5.53px] ml-[5.53px] text-[#168DE2]'/></div>
                           <a href='/User' className='w-[160px] h-[16px] font-[Inter] text-[12px] leading-[15.73px] text-[#181817] mt-[6.53px]' >Muhammad Isah Abdulkadir</a>
                            </div>
                            <p className='w-[110px] h-[16px] mt-[7px] font-[Inter] font-normal text-[12px] leading-[15.73px] ml-[5px] text-[#181817]'>+234 804 567 9876</p>
                            <p className='w-[60px] h-[16px] mt-[7px] font-[Inter] font-normal text-[12px] leading-[15.73px] ml-[30px] text-[#181817]'>Niger state</p>
                            <p className='w-[61px] h-[16px] mt-[7px] font-[Inter] font-normal text-[12px] leading-[15.73px] ml-[40px]  text-[#181817]'>Sulej/Tafa</p>
                            <p className='w-[121px] h-[16px] mt-[7px] font-[Inter] font-normal text-[12px] leading-[15.73px] ml-[55px] text-[#181817]'>Tundan wada south</p>
                            <p className='w-[78px] h-[16px] mt-[7px] font-[Inter] font-normal text-[12px] leading-[15.73px] ml-[35px] text-[#181817]'>Six (6) Years</p>
                        </div>
                        <div className='w-[16px] h-[16px] mt-[7px] ml-[60px]' >
                        <BiMessageSquareDots className='w-[13.33px] h-[13.33px] mt-[1.33px] ml-[1.33px] text-[#181817]'/>
                        </div>
                </div>
                <hr/>
            </div>
            <div className='h-[33px] w-[870px] gap-[3px]  '>
                <div className='w-[852px] h-[30px] flex'>
                        <div className='w-[786px] h-[30px] flex'>
                            <div className='w-[18px] h-[18px] mt-[6px]'>
                            <input type="checkbox" className='w-[18px]  rounded-[5px] border-[1px] opacity-[50%] text-[#88A1B3]' />
                            </div>
                            <div className='w-[180px]  h-[30px] gap-[9px] flex'>
                                    <div className='w-[20px] h-[20px] '><CgProfile className='w-[18.95px] h-[18.95px] mt-[5.53px] ml-[5.53px] text-[#168DE2]'/></div>
                           <a href='/User' className='w-[160px] h-[16px] font-[Inter] text-[12px] leading-[15.73px] text-[#181817] mt-[6.53px]' >Muhammad Isah Abdulkadir</a>
                            </div>
                            <p className='w-[110px] h-[16px] mt-[7px] font-[Inter] font-normal text-[12px] leading-[15.73px] ml-[5px] text-[#181817]'>+234 804 567 9876</p>
                            <p className='w-[60px] h-[16px] mt-[7px] font-[Inter] font-normal text-[12px] leading-[15.73px] ml-[30px] text-[#181817]'>Niger state</p>
                            <p className='w-[61px] h-[16px] mt-[7px] font-[Inter] font-normal text-[12px] leading-[15.73px] ml-[40px]  text-[#181817]'>Sulej/Tafa</p>
                            <p className='w-[121px] h-[16px] mt-[7px] font-[Inter] font-normal text-[12px] leading-[15.73px] ml-[55px] text-[#181817]'>Tundan wada south</p>
                            <p className='w-[78px] h-[16px] mt-[7px] font-[Inter] font-normal text-[12px] leading-[15.73px] ml-[35px] text-[#181817]'>Six (6) Years</p>
                        </div>
                        <div className='w-[16px] h-[16px] mt-[7px] ml-[60px]' >
                        <BiMessageSquareDots className='w-[13.33px] h-[13.33px] mt-[1.33px] ml-[1.33px] text-[#181817]'/>
                        </div>
                </div>
                <hr/>
            </div>
            <div className='h-[33px] w-[870px] gap-[3px]  '>
                <div className='w-[852px] h-[30px] flex'>
                        <div className='w-[786px] h-[30px] flex'>
                            <div className='w-[18px] h-[18px] mt-[6px]'>
                            <input type="checkbox" className='w-[18px]  rounded-[5px] border-[1px] opacity-[50%] text-[#88A1B3]' />
                            </div>
                            <div className='w-[180px]  h-[30px] gap-[9px] flex'>
                                    <div className='w-[20px] h-[20px] '><CgProfile className='w-[18.95px] h-[18.95px] mt-[5.53px] ml-[5.53px] text-[#168DE2]'/></div>
                           <a href='/User' className='w-[160px] h-[16px] font-[Inter] text-[12px] leading-[15.73px] text-[#181817] mt-[6.53px]' >Muhammad Isah Abdulkadir</a>
                            </div>
                            <p className='w-[110px] h-[16px] mt-[7px] font-[Inter] font-normal text-[12px] leading-[15.73px] ml-[5px] text-[#181817]'>+234 804 567 9876</p>
                            <p className='w-[60px] h-[16px] mt-[7px] font-[Inter] font-normal text-[12px] leading-[15.73px] ml-[30px] text-[#181817]'>Niger state</p>
                            <p className='w-[61px] h-[16px] mt-[7px] font-[Inter] font-normal text-[12px] leading-[15.73px] ml-[40px]  text-[#181817]'>Sulej/Tafa</p>
                            <p className='w-[121px] h-[16px] mt-[7px] font-[Inter] font-normal text-[12px] leading-[15.73px] ml-[55px] text-[#181817]'>Tundan wada south</p>
                            <p className='w-[78px] h-[16px] mt-[7px] font-[Inter] font-normal text-[12px] leading-[15.73px] ml-[35px] text-[#181817]'>Six (6) Years</p>
                        </div>
                        <div className='w-[16px] h-[16px] mt-[7px] ml-[60px]' >
                        <BiMessageSquareDots className='w-[13.33px] h-[13.33px] mt-[1.33px] ml-[1.33px] text-[#181817]'/>
                        </div>
                </div>
                <hr/>
            </div>
            <div className='h-[33px] w-[870px] gap-[3px]  '>
                <div className='w-[852px] h-[30px] flex'>
                        <div className='w-[786px] h-[30px] flex'>
                            <div className='w-[18px] h-[18px] mt-[6px]'>
                            <input type="checkbox" className='w-[18px]  rounded-[5px] border-[1px] opacity-[50%] text-[#88A1B3]' />
                            </div>
                            <div className='w-[180px]  h-[30px] gap-[9px] flex'>
                                    <div className='w-[20px] h-[20px] '><CgProfile className='w-[18.95px] h-[18.95px] mt-[5.53px] ml-[5.53px] text-[#168DE2]'/></div>
                           <a href='/User' className='w-[160px] h-[16px] font-[Inter] text-[12px] leading-[15.73px] text-[#181817] mt-[6.53px]' >Muhammad Isah Abdulkadir</a>
                            </div>
                            <p className='w-[110px] h-[16px] mt-[7px] font-[Inter] font-normal text-[12px] leading-[15.73px] ml-[5px] text-[#181817]'>+234 804 567 9876</p>
                            <p className='w-[60px] h-[16px] mt-[7px] font-[Inter] font-normal text-[12px] leading-[15.73px] ml-[30px] text-[#181817]'>Niger state</p>
                            <p className='w-[61px] h-[16px] mt-[7px] font-[Inter] font-normal text-[12px] leading-[15.73px] ml-[40px]  text-[#181817]'>Sulej/Tafa</p>
                            <p className='w-[121px] h-[16px] mt-[7px] font-[Inter] font-normal text-[12px] leading-[15.73px] ml-[55px] text-[#181817]'>Tundan wada south</p>
                            <p className='w-[78px] h-[16px] mt-[7px] font-[Inter] font-normal text-[12px] leading-[15.73px] ml-[35px] text-[#181817]'>Six (6) Years</p>
                        </div>
                        <div className='w-[16px] h-[16px] mt-[7px] ml-[60px]' >
                        <BiMessageSquareDots className='w-[13.33px] h-[13.33px] mt-[1.33px] ml-[1.33px] text-[#181817]'/>
                        </div>
                </div>
                <hr/>
            </div>
            <div className='h-[33px] w-[870px] gap-[3px]  '>
                <div className='w-[852px] h-[30px] flex'>
                        <div className='w-[786px] h-[30px] flex'>
                            <div className='w-[18px] h-[18px] mt-[6px]'>
                            <input type="checkbox" className='w-[18px]  rounded-[5px] border-[1px] opacity-[50%] text-[#88A1B3]' />
                            </div>
                            <div className='w-[180px]  h-[30px] gap-[9px] flex'>
                                    <div className='w-[20px] h-[20px] '><CgProfile className='w-[18.95px] h-[18.95px] mt-[5.53px] ml-[5.53px] text-[#168DE2]'/></div>
                           <a href='/User' className='w-[160px] h-[16px] font-[Inter] text-[12px] leading-[15.73px] text-[#181817] mt-[6.53px]' >Muhammad Isah Abdulkadir</a>
                            </div>
                            <p className='w-[110px] h-[16px] mt-[7px] font-[Inter] font-normal text-[12px] leading-[15.73px] ml-[5px] text-[#181817]'>+234 804 567 9876</p>
                            <p className='w-[60px] h-[16px] mt-[7px] font-[Inter] font-normal text-[12px] leading-[15.73px] ml-[30px] text-[#181817]'>Niger state</p>
                            <p className='w-[61px] h-[16px] mt-[7px] font-[Inter] font-normal text-[12px] leading-[15.73px] ml-[40px]  text-[#181817]'>Sulej/Tafa</p>
                            <p className='w-[121px] h-[16px] mt-[7px] font-[Inter] font-normal text-[12px] leading-[15.73px] ml-[55px] text-[#181817]'>Tundan wada south</p>
                            <p className='w-[78px] h-[16px] mt-[7px] font-[Inter] font-normal text-[12px] leading-[15.73px] ml-[35px] text-[#181817]'>Six (6) Years</p>
                        </div>
                        <div className='w-[16px] h-[16px] mt-[7px] ml-[60px]' >
                        <BiMessageSquareDots className='w-[13.33px] h-[13.33px] mt-[1.33px] ml-[1.33px] text-[#181817]'/>
                        </div>
                </div>
                <hr/>
            </div>
            <div className='h-[33px] w-[870px] gap-[3px]  '>
                <div className='w-[852px] h-[30px] flex'>
                        <div className='w-[786px] h-[30px] flex'>
                            <div className='w-[18px] h-[18px] mt-[6px]'>
                            <input type="checkbox" className='w-[18px]  rounded-[5px] border-[1px] opacity-[50%] text-[#88A1B3]' />
                            </div>
                            <div className='w-[180px]  h-[30px] gap-[9px] flex'>
                                    <div className='w-[20px] h-[20px] '><CgProfile className='w-[18.95px] h-[18.95px] mt-[5.53px] ml-[5.53px] text-[#168DE2]'/></div>
                           <a href='/User' className='w-[160px] h-[16px] font-[Inter] text-[12px] leading-[15.73px] text-[#181817] mt-[6.53px]' >Muhammad Isah Abdulkadir</a>
                            </div>
                            <p className='w-[110px] h-[16px] mt-[7px] font-[Inter] font-normal text-[12px] leading-[15.73px] ml-[5px] text-[#181817]'>+234 804 567 9876</p>
                            <p className='w-[60px] h-[16px] mt-[7px] font-[Inter] font-normal text-[12px] leading-[15.73px] ml-[30px] text-[#181817]'>Niger state</p>
                            <p className='w-[61px] h-[16px] mt-[7px] font-[Inter] font-normal text-[12px] leading-[15.73px] ml-[40px]  text-[#181817]'>Sulej/Tafa</p>
                            <p className='w-[121px] h-[16px] mt-[7px] font-[Inter] font-normal text-[12px] leading-[15.73px] ml-[55px] text-[#181817]'>Tundan wada south</p>
                            <p className='w-[78px] h-[16px] mt-[7px] font-[Inter] font-normal text-[12px] leading-[15.73px] ml-[35px] text-[#181817]'>Six (6) Years</p>
                        </div>
                        <div className='w-[16px] h-[16px] mt-[7px] ml-[60px]' >
                        <BiMessageSquareDots className='w-[13.33px] h-[13.33px] mt-[1.33px] ml-[1.33px] text-[#181817]'/>
                        </div>
                </div>
                <hr/>
            </div>
          

    </div>

    
    
   
         
    
   
    

    </div>


    </div>

    
      
      </div>
   
   
  )
}

export default MList