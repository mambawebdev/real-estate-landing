import React from 'react'
import { motion } from 'framer-motion'

const Title = ({ title, title2, description }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 1.5 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
        >
            <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>{title} <span className='underline underline-offset-4 decoration-1 under font-light'>{title2}</span></h1>
            <p className='text-center text-gray-500 mb-8 max-w-80 mx-auto'>{description}</p>
        </motion.div>
    )
}

export default Title
