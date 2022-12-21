import React, { useState } from 'react'

const NavBar = () => {
    let Links =[
      {name:"FIGURAS",link:"/"},
      {name:"CUADROS",link:"/"},
      {name:"QUIENES SOMOS",link:"/"},
      {name:"MI CUENTA",link:"/"},
    ];
    let [open,setOpen]=useState(false);
  return (
    <div className='shadow-md w-full fixed top-0 z-10 left-0'>
      <div className='md:flex items-center justify-between py-4 md:px-48 px-7 bg-secondaryLight'>
      <div className='text-2xl cursor-pointer flex items-center text-gray-800'>
        <span className='text-3xl text-indigo-600 mr-1 pt-2'>
        <ion-icon name="logo-ionic"></ion-icon>
        </span>
        <img src="/images/Ay Caramba_color shadow.svg" alt="logoAyCaramba" className='w-32'/>
      </div>
      
    <div class="mx-auto max-w-md">


    <form action="" class="relative mx-auto w-max">
        <input type="search" 
        placeholder="Buscar"
              class="cursor-pointer relative z-10 h-12 rounded-full border bg-transparent pl-12 outline-none w-full focus:cursor-text pr-8 mr-52" />
        <svg xmlns="http://www.w3.org/2000/svg" class="absolute inset-y-0 my-auto h-8 w-12 px-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </form>


    </div>
      
      <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
      <ion-icon name={open ? 'close':'menu'}></ion-icon>
      </div>

      <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
        {
          Links.map((link)=>(
            <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
              <a href={link.link} className='text-gray-800 hover:text-gray-400 duration-500'>{link.name}</a>
            </li>
          ))
        }
      </ul>
      </div>
    </div>
  )
}

export { NavBar }