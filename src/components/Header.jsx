import React from 'react'
import Navbar from './Navbar'
import { motion } from 'framer-motion'

const Header = () => {
    return (
        <section className='min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden' style={{
            backgroundImage: "url('/header_img.png')"
        }} id='Header'>
            <Navbar />
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                transition={{ duration: 1.5 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white">
                <h2 className="text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl pt-20 font-semibold">Explore homes that fit your dreams.</h2>
                <div className="mt-16 space-x-6">
                    <a className="border border-white hover:bg-blue-500 transition-colors duration-500 px-8 py-3 rounded" href="#Projects">Projects</a>
                    <a className="bg-blue-600 hover:bg-blue-500 transition-colors duration-500 px-8 py-3 rounded" href="#Contact">Contact Us</a>
                </div>
            </motion.div>
        </section>
    )
}

export default Header
