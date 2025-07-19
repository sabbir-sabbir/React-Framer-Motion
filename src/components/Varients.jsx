/* eslint-disable no-unused-vars */
import React from 'react'
import { motion }from 'framer-motion'

const Varients = () => {
    const circleVariants = {
        initial: {
            opacity: 0,
            y: "-100vh",

        },
        animate: {
              opacity: 1,
              y: 1,
              transition: {
               delay: 1,
               duration: 1,
               type: 'spring'
        }
        }
        
    }
  return (
    <motion.div
    variants={circleVariants}
    initial= "initial"
    animate="animate"
    className="w-[150px] h-[150px] rounded-full bg-sky-400  ml-2 mt-2 flex justify-center items-center"
    >Varients</motion.div>
  )
}

export default Varients