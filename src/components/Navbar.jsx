import React, { useEffect, useState } from 'react'
import { assets } from '../assets/assets'

const Navbar = () => {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "auto"
        }
        return () => {
            document.body.style.overflow = "auto"
        }
    }, [open])

    return (
        <div className='absolute top-0 left-0 w-full z-10'>
            <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent">
                <img src={assets.logo} alt="" />
                <ul className="hidden md:flex gap-7 text-white">
                    <a href="#Header" className="cursor-pointer hover:text-gray-400">Home</a>
                    <a href="#About" className="cursor-pointer hover:text-gray-400">About</a>
                    <a href="#Projects" className="cursor-pointer hover:text-gray-400">Projects</a>
                    <a href="#Testimonials" className="cursor-pointer hover:text-gray-400">Testimonials</a>
                </ul>
                <button className="hidden md:block bg-white px-8 py-2 rounded-full">Sign Up</button>
                <img src={assets.menu_icon} onClick={() => setOpen(true)} alt="" className='md:hidden w-7 cursor-pointer' />
            </div>
            {/* MENU MOBILE */}
            {
                open ? <div className={`md:hidden ${open ? 'fixed w-full' : "h-0 w-0"} fixed w-full right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}>
                    <div className="flex justify-end p-6 cursor-pointer">
                        <img src={assets.cross_icon} onClick={() => setOpen(false)} alt="" className="w-6 cursor-pointer" />
                    </div>
                    <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
                        <a href="#Header" onClick={() => setOpen(false)} className="px-4 py-2 rounded-full inline-block">Home</a>
                        <a href="#About" onClick={() => setOpen(false)} className="px-4 py-2 rounded-full inline-block">About</a>
                        <a href="#Projects" onClick={() => setOpen(false)} className="px-4 py-2 rounded-full inline-block">Projects</a>
                        <a href="#Testimonials" onClick={() => setOpen(false)} className="px-4 py-2 rounded-full inline-block">Testimonials</a>
                    </ul>
                </div>
                    :
                    <></>
            }
        </div>
    )
}

export default Navbar
