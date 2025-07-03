import React from 'react'
import { assets } from '../assets/assets'
import Title from './Title'
import { motion } from 'framer-motion'

const About = () => {
    return (
        <div className='flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden' id='About'>
            <Title title={'About'} title2={'Our Brand'} description={'Dedicated to pursuing great properties, with your personal touch.'} />
            <motion.div
                initial={{ opacity: 0, x: -200 }}
                transition={{ duration: 2 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row items-center md:items-start md:gap-20">
                {/* LEFT */}
                <img src={assets.brand_img} alt="" className="w-full sm:w-1/2 max-w-lg" />
                {/* RIGHT */}
                <div className="flex flex-col items-center md:items-start mt-10 text-gray-600">
                    <div className="grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28">
                        <div className="">
                            <p className="text-4xl font-medium text-gray-800">10+</p>
                            <p className="">Years of Experience</p>
                        </div>
                        <div className="">
                            <p className="text-4xl font-medium text-gray-800">15+</p>
                            <p className="">Projects Completed</p>
                        </div>
                        <div className="">
                            <p className="text-4xl font-medium text-gray-800">20+</p>
                            <p className="">Sq. Ft. Delivered</p>
                        </div>
                        <div className="">
                            <p className="text-4xl font-medium text-gray-800">40+</p>
                            <p className="">Ongoing Projects</p>
                        </div>
                    </div>
                    <p className="my-10 max-w-lg">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur aliquam odit ab, nihil ipsam deserunt cumque vitae hic dolores, impedit doloremque optio modi perspiciatis commodi esse veniam unde fuga nesciunt ad similique assumenda libero! Nam.
                    </p>
                    <button className='bg-blue-600 hover:bg-blue-500 transition-colors duration-500 text-white px-8 py-2 rounded-lg'>Learn More</button>
                </div>
            </motion.div>
        </div>
    )
}

export default About

