import React, { useState } from 'react'
import { navLinks } from '../constants'

const NavItems =() =>{
    return (
        <ul className='nav-ul'>
            {navLinks.map(({id, href, name})=>(
                <li key={id} className='nav-li'>
                    <a href={href} className='nav-li_a' 
                    onClick={() =>{}}>
                        {name}
                    </a>
                </li>
            ))}
        </ul>
    )
}

const Navbar = ()=>{
    const [isOpen, setIsOpen] = useState()

    const toggleMenu =()=> setIsOpen((prevIsOpen)=>!prevIsOpen)

  return(
    <heaader className='fixed top-0 left -0 right 0 z-50
    bg-black/9-0'>
        <div className='max-w-7xl mx-auto'>
            <div className='flex justfy-between
            items-center py-5 mx-auto c-space' >
                <a href="/" className='text-neutral-400 font-bold
                text-xl hover:text-white transition-colors'>
                    Ayaka
                </a>

                <button onClick= {toggleMenu} className='text-netural-400 hover: text-white
                focus:outline-none sm: hidden flex' aria-lable ="Toggle menu">
                    <img src={isOpen? "assets/close.svg":"assets/menu.svg"} alt="toggle"
                    className='w-6 h-6' />
                </button>
                <nav className='sm:flex hidden'></nav>
              <NavItems />
            </div>
            </div>
            </heaader>
  )
}
export default Navbar