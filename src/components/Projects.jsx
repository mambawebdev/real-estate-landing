import React, { useEffect, useState } from 'react'
import Title from './Title'
import { assets, projectsData } from '../assets/assets'
import { motion } from 'framer-motion'


const Projects = () => {

    const [curIndex, setCurIndex] = useState(0);
    const [cardToShow, setCardToShow] = useState(1);

    useEffect(() => {
        const updateCardToShow = () => {
            if (window.innerWidth >= 1024) {
                setCardToShow(projectsData.length)
            } else {
                setCardToShow(1);
            }
        }

        updateCardToShow();

        window.addEventListener('resize', updateCardToShow);
        return () => {
            window.removeEventListener('resize', updateCardToShow);
        }

    }, [])

    const nextProject = () => {
        setCurIndex((prevIndex) => (prevIndex + 1) % projectsData.length)
    }

    const prevProject = () => {
        setCurIndex((prevIndex) => prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1)
    }

    return (
        <section className='container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden' id="Projects">
            <Title title={'Projects'} title2={'Completed'} description={'Crafting Spaces, Explore our Dream Homes'} />
            {/* SLIDER */}
            <div className="flex justify-end items-center mb-8">
                <button onClick={prevProject} className='p-3 bg-gray-200 rounded mr-2' aria-label='Previous Project'>
                    <img src={assets.left_arrow} alt="Previous" />
                </button>
                <button onClick={nextProject} className='p-3 bg-gray-200 rounded mr-2' aria-label='Next Project'>
                    <img src={assets.right_arrow} alt="Right" />
                </button>
            </div>
            {/* Project Silder Container */}
            <motion.div
                initial={{ opacity: 0, y: 300 }}
                transition={{ duration: 2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="overflow-hidden">
                <div className="flex gap-8 transition-transform duration-500 ease-in-out"
                    style={{
                        transform: `translateX(-${(curIndex * 100) / cardToShow}%)`
                    }}
                >
                    {
                        projectsData.map((project, ind) => (
                            <div key={ind} className="relative flex-shrink-0 w-full sm:w-1/4">
                                <img src={project.image} alt={project.title} className="w-full h-auto mb-14" />
                                <div className="absolute left-0 right-0 bottom-5 flex justify-center">
                                    <div className="inline-block bg-white w-3/4 px-4 py-2 shadow-md">
                                        <h2 className='text-xl font-semibold text-gray-800'>{project.title}</h2>
                                        <p className="text-gray-500 text-sm">
                                            {project.price} <span className='px-1'> | </span> {project.location}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </motion.div>
        </section>
    )
}

export default Projects
