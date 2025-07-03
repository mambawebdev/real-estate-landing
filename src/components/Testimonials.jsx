import React from 'react'
import Title from './Title'
import { assets, testimonialsData } from '../assets/assets'
import { motion } from 'framer-motion'

const Testimonials = () => {
    return (
        <section className='container mx-auto py-10 lg:px-32 w-full overflow-hidden' id='Testimonials'>
            <Title title={'Customer'} title2={'Testimonials'} description={'Real Stories from Those Who Found their Forever Home Us'} />
            <motion.div
                initial={{ opacity: 0, x: 300 }}
                transition={{ duration: 1.7 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} className="flex flex-wrap justify-center gap-8">
                {/* Testimonaials */}
                {
                    testimonialsData.map((testimonial, index) => (
                        <div key={index} className="max-w-[340px] border shadow-lg rounded px-8 py-12 text-center">
                            <img className='w-20 h-20 rounded-full mx-auto mb-4' src={testimonial.image} alt={testimonial.alt} />
                            <h2 className="text-xl text-gray-700 font-medium">{testimonial.name}</h2>
                            <p className="text-gray-500 mb-4 text-sm">{testimonial.title}</p>
                            <div className="flex gap-2 justify-center text-red-500 mb-4">
                                {Array.from({ length: testimonial.rating }, (item, index) => (
                                    <img key={index} src={assets.star_icon} />
                                ))}
                            </div>
                            <p className="text-gray-600">
                                {testimonial.text}
                            </p>
                        </div>
                    ))
                }
            </motion.div>
        </section>
    )
}

export default Testimonials
