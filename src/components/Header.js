import React from 'react'
import { FaAngellist } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";


const Header = () => {
  return (
    <div className=' relative flex justify-between items-center p-5 w-[78vw] h-[13vh] ml-[20vw] border-2 border-black'>
      
      <div className=' flex justify-center items-center '>
          <p className=" text-[1.2rem] font-semibold ">Divyam Here</p>
          <FaAngellist className=" text-[1.2rem] font-bold text-yellow-500 "/>
      </div>

      <div className=' relative w-[17vw] h-[7vh] bg-slate-400 rounded-xl flex items-center'>
        <input
          type='text'
          placeholder='Search'
          className='w-full h-full rounded-xl pl-2 placeholder-slate-600 font-bold focus:outline-slate-600'
        />
        <div className='absolute top-0 right-0 p-2 sm:flex items-center gap-2  hidden'>
          <FaSearch className='text-[1.1rem] text-slate-600 ' />
        </div>
      </div>
    </div>
  )
}

export default Header