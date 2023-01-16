import React, { useState } from 'react'
import { Link } from "react-router-dom"
import "./NavBar.css"

const NavBar = () => {
    let Links =[
      {name:"HOME",link:"/"},
      {name:"FIGURAS",link:"/categoria/figuras"},
      {name:"CUADROS",link:"/categoria/cuadros"},
      {name:"NOSOTROS",link:"/nosotros"},
      {name:"CONTACTO",link:"/contacto"},
    ];
    let [open,setOpen]=useState(false);
  return (
    <div className='shadow-md w-full fixed top-0 z-10 left-0'>
      <div className='sm:flex items-center py-5 px-10  bg-secondaryLight'>
      <div className='text-2xl cursor-pointer flex items-center text-gray-800 xl:mr-16 md:mr-0'>
        <Link to="/">
          <img src="/images/Ay Caramba_color shadow.svg" alt="logoAyCaramba" className='max-w-none w-[185px]'/>
        </Link>
      </div>
      
      <div onClick={()=>setOpen(!open)} className='text-5xl absolute right-10 top-[78px] cursor-pointer lg:hidden bottom'>
      <ion-icon name={open ? 'close':'menu'}></ion-icon>
      </div>

      <ul className={`bg-secondaryLight lg:flex lg:items-center lg:pb-0 pb-2 absolute lg:static lg:z-auto z-[-1] left-0 w-full lg:w-auto lg:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-52 ':'top-[-490px]'}`}>
        {
          Links.map((link)=>(
            <li key={link.name} className=' text-2xl xl:my-0 my-7 sm:mx-2'>
              <a href={link.link} className='font-sans3 font-semibold text-tertiary px-3 nav'>{link.name}</a>
            </li>
          ))
        }
      </ul>
      </div>
    </div>
  )
}

export { NavBar }