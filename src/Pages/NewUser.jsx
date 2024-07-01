import React from 'react'
import {MdOutlineCancel} from "react-icons/md"
import {CiImport} from 'react-icons/ci'

const NewUser = () => {
  return (
    <div className='w-[800px] h-[1152px] mt-[50px] ml-[300px] rounded-[20px] pt-[33px] pb-[23px] pl-[33px] pr-[23px] gap-[10px] flex flex-col bg-gray-200 '>
          <div className='w-[754] h-[1086px] gap-[31px] flex flex-col'>
            <div className='w-[754] h-[20px] justify-between flex' >
                <h1 className='w-[83px] h-[20px] font-[Roboto] font-semibold text-[17px] leading-[19.92px] text-[#181817]'>New Miner</h1>
                
                    <a href='/Miners'><MdOutlineCancel className='text-[#88A1B3] w-[20px] h-[20px] ml-[29px]'/></a>
                
            </div>

            <div className='w-[800px] h-[1035px] gap-[50px] flex flex-col'>
               <div className='[800px] h-[835px] gap-[30px] flex flex-col'>
                    <div className='w-[800px] h-[75px] gap-[13px] flex flex-col'>
                        <div className='w-[800px] h-[75px] rounded-[10px] flex flex-col'>
                            <p className='w-[70px] h-[18px] font-[Inter] font-normal text-[15px] leading-[18.15px] text-[#181817]'>Full Name</p>
                            <div>
                            <input type="text" className='w-[745px] h-[50px] mt-[25px] rounded-[10px] bg-[#F4F6F9] outline-none '/>
                           </div>
                        </div>
                    </div>
                    <div className='w-[800px] h-[75px] gap-[13px] flex flex-col'>
                        <div className='w-[800px] h-[75px] rounded-[10px] flex flex-col'>
                            
                            <p className='w-[106px] h-[18px] font-[Inter] font-normal text-[15px] leading-[18.15px] text-[#181817]'>Phone Number</p>
                            <div>
                            <input type="number" className='w-[745px] h-[50px] mt-[25px] rounded-[10px] bg-[#F4F6F9]  outline-none'/>
                            </div>
                        </div>
                    </div>
                    <div className='w-[800px] h-[75px] gap-[13px] flex flex-col'>
                        <div className='w-[800px] h-[75px] rounded-[10px] flex flex-col'>
                            
                            <p className='w-[38px] h-[18px] font-[Inter] font-normal text-[15px] leading-[18.15px] text-[#181817]'>State</p>
                            <div>
                            <input type="text" className='w-[745px] h-[50px] mt-[25px] rounded-[10px] bg-[#F4F6F9]  outline-none'/>
                                </div>
                        </div>
                    </div>
                    <div className='w-[800px] h-[75px] gap-[16px] flex'>
                        <div className='w-[193px] h-[75px] gap-[13px] flex flex-col '>
                            <div className='w-[193px] h-[75px] rounded-[10px]'>
                        <p className='w-[29px] h-[18px] font-[Inter] font-normal text-[15px] leading-[18.15px] text-[#181817]'>LGA</p>
                        <div>
                        <input type="text"  className='w-[330px] h-[50px] mt-[10px] rounded-[10px] bg-[#F4F6F9]  outline-none'/>
                        </div>
                        </div>
                        </div>
                        <div className='w-[193px] h-[75px] gap-[13px] flex flex-col '>
                            <div className='w-[193px] h-[75px] rounded-[10px]'>
                        <p className='w-[29px] h-[18px] ml-[185px] font-[Inter] font-normal text-[15px] leading-[18.15px] text-[#181817]'>Ward</p>
                        <div>
                        <input type="text"  className='w-[350px] h-[50px] mt-[10px] ml-[185px] rounded-[10px] bg-[#F4F6F9]  outline-none'/>
                        </div>
                        </div>
                        </div>
                        
                    </div>
                                
                    <div className='w-[800px] h-[75px] gap-[13px] flex flex-col'>
                        <div className='w-[800px] h-[75px] rounded-[10px] flex flex-col'>
                            
                            <p className='w-[140px] h-[18px] font-[Inter] font-normal text-[15px] leading-[18.15px] text-[#181817]'>Permanent Address</p>
                            <div>
                            <input type="text" className='w-[745px] h-[50px] mt-[25px] rounded-[10px] bg-[#F4F6F9]  outline-none'/>
                                </div>
                        </div>
                    </div>
                    <div className='w-[800px] h-[75px] gap-[13px] flex flex-col'>
                        <div className='w-[800px] h-[75px] rounded-[10px] flex flex-col'>
                            
                            <p className='w-[201px] h-[18px] font-[Inter] font-normal text-[15px] leading-[18.15px] text-[#181817]'>Years of working experience</p>
                            <div>
                            <input type="text" className='w-[745px] h-[50px] mt-[25px] rounded-[10px] bg-[#F4F6F9]  outline-none'/>
                                </div>
                        </div>
                    </div>
                    <div className='w-[800px] h-[75px] gap-[13px] flex flex-col'>
                        <div className='w-[800px] h-[75px] rounded-[10px] flex flex-col'>
                            
                            <p className='w-[128px] h-[18px] font-[Inter] font-normal text-[15px] leading-[18.15px] text-[#181817]'>Minning Company</p>
                            <div>
                            <input type="text" className='w-[745px] h-[50px] mt-[25px] rounded-[10px] bg-[#F4F6F9]  outline-none'/>
                                </div>
                        </div>
                    </div>
                    <div className='w-[800px] h-[75px] gap-[13px] flex flex-col'>
                        <div className='w-[800px] h-[75px] rounded-[10px] flex flex-col'>
                            
                            <p className='w-[179px] h-[18px] font-[Inter] font-normal text-[15px] leading-[18.15px] text-[#181817]'>Guarantor Phone number</p>
                            <div>
                            <input type="text" className='w-[745px] h-[50px] mt-[25px] rounded-[10px] bg-[#F4F6F9]  outline-none'/>
                                </div>
                        </div>
                    </div>

                </div>  
                <div className='w-[800px] h-[99px] gap-[8px] mt-[-20px] flex flex-col'>
                    <p className='w-[95px] h-[20px] font-[Poppins] font-normal text-[13px] leading-[19.5px] tracking-[-2%] text-[#181817]'>Upload  Picture</p>
                    <div className='w-[745px] h-[71px] rounded-[8px] border-[0.5px] bg-[#F4F6F9] border-[#607087] text-center'>
                            <div className='w-[45px] h-[45px] mt-[18px] ml-[350px]'>
                            <label for="firstimg"><CiImport className='w-[33.33px] h-[33.33px] mt-[5.83] ml-[5.83] text-[#607087] border-[0.95px]'/></label>
                            </div>
                            <input type="file"  name='' id='firstimg' className='hidden'/>
                    </div>
                </div> 
                  <div className='w-[800px] h-[41px] gap-[370px] flex'>
                      <div className='w-[177px] h-[18px] gap-[10px] flex'>
                        <div className='w-[18px] h-[18px] '>
                            <input type="checkbox" className='w-[15px] h-[15px] mt-[1.64px] ml-[1.64px] rounded-[3px] border-[1px] accent-[#168DE2]'/>
                        </div>
                        <div className='w-[149px] h-[16px] gap-[9px] flex '>
                            <p className='w-[149px] h-[16px] font-[Roboto] font-normal text-[13px] leading-[15.73px] mt-[3px] text-[#181817]'>Create new after submit</p>
                        </div>
                        </div> 

                        <div className='w-[192px] h-[41px] rounded-[8px] bg-[#168DE2]'>
                            <div className='w-[87px] h-[17px] mt-[11.5px] ml-[52px] gap-[12px] flex '>
                                <div className='w-[87px] h-[17px] mt-[-3px]'>
                                     <a href='/Updated' className='w-[87px] h-[17px] font-[Inter] font-medium text-[14px] leading-[16.94px] text-white'>Create Miner</a>   
                                </div>
                            </div>
                            </div> 
                  </div>
            </div>
            </div>  

    </div>
  )
}

export default NewUser