import React from 'react'
import { assets } from '../assets/assets'
import { toast } from 'react-toastify'

const Footer = () => {

    const subscribed = () => {
        toast.success("You have subscribed!");
    }
    return (
        <div className='pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden' id='Footer'>
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center" >
                <div className="w-full md:w-1/3 mb-8 md:mb-0">
                    <img src={assets.logo_dark} alt="" className="" />
                    <p className="text-gray-400 mt-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, odit iure rem voluptates consequuntur dolores eligendi quaerat atque error consectetur nihil eos id ipsum dicta hic blanditiis, optio nobis cupiditate corrupti quos? Quidem, sunt numquam?
                    </p>
                </div>
                <div className="w-full md:w-1/5 mb-8 md:mb-0">
                    <h3 className="text-white text-lg font-bold mb-4">Company</h3>
                    <ul className='flex flex-col gap-2 text-gray-400'>
                        <a href="#Header" className='hover:text-white'>Home</a>
                        <a href="#About" className='hover:text-white'>About Us</a>
                        <a href="#Contact" className='hover:text-white'>Contact Us</a>
                        <a href="#About" className='hover:text-white'>Privacy Policy</a>
                    </ul>
                </div>
                <div className="w-full md:w-1/3">
                    <h3 className="text-white text-lg font-bold mb-4">Subscribe to Our Newsletter</h3>
                    <p className="text-gray-400 mb-4 max-w-80">
                        The latest news, articles and resources can be sent to your inbox catered to your preferences.
                    </p>
                    <div className="flex gap-2">
                        <input type="email" placeholder='Enter your email...' className='p-2 rounded bg-gray-800 text-gray-400 border border-gray-700 focus:outline-none w-full md:w-auto' />
                        <button onClick={subscribed} className='bg-blue-600 hover:bg-blue-500 transition-colors duration-500 text-white rounded px-8 py-2'>Subscribe</button>
                    </div>
                </div>
            </div>
            <div className="border-t border-gray-700 py-4 mt-10 text-center text-gray-500">
                Copyright 2024 @ RealStack. All Rights Reserved.
            </div>
        </div>
    )
}

export default Footer
