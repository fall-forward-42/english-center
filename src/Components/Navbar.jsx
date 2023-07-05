import {React, useState} from 'react'
import {navLinks} from '../constants'
import {menu,close} from '../assets'
const Navbar = () => {
    const [toggle,setToggle] = useState(false);
  return (
    <nav className=' w-full flex py-6 justify-between items-center navbar font-main bg-main px-6 fixed z-[10]'>
        <img src='https://y9g9y3d6.stackpathcdn.com/wp-content/uploads/2020/09/Logo-ENGLISH-CENTRE.jpg' className='w-[124px] h-[32px] object-contain' alt='logo_navbar'></img>
        <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
            {navLinks.map((nav,index)=>(
                <li
                    key={nav.id}
                    className={`font-main font-normal cursor-pointer text-white text-[16px]  textHover ${index===navLinks.length - 1 ? 'mr-1' : 'mr-10'}`}
                >
                     <a href={`#${nav.id}`}>{nav.title}</a>
                </li>   
            ))}
        </ul>
        <div className='sm:hidden flex flex-1 justify-end items-center cursor-pointer'>
            <img src={toggle ?   close : menu} className='fill-white h-[24px] w-[24px]  onject-contain mr-10 ' alt='toggle' 
                onClick={()=>setToggle((prev)=> !prev)} ></img>
        </div>

        <div className={`${toggle ? 'flex' : 'hidden' } lg:hidden p-6 bg-main-2 absolute  top-[70px] right-0 mx-6 my-2 min-w-[120px]  rounded-b-xl sidebar`}>
            <ul className='list-none flex flex-col justify-end items-center '>
                {navLinks.map((nav,index)=>(
                    <li 
                        key={nav.id}
                        className={`font-main font-normal cursor-pointer text-white items-center text-[16px] ${index===navLinks.length - 1 ? 'mr-0' : 'mb-4'}`}
                    >
                        <a href={`#${nav.id}`}>{nav.title}</a>
                    </li>
                ))}
            </ul>
        </div>
    </nav>
  )
}

export default Navbar