/* eslint-disable no-unused-vars */
import React from 'react'
import { motion }from 'framer-motion'

const Simple = () => {
  return (
    <motion.div
    initial={{opacity: 0, scale: 0.5 }}
    animate={{opacity: 1, scale: 1}}
    transition={{duration: 1.5}}
    className=" my-2 ml-2  w-[180px] h-[180px] rounded-[50%] bg-red-500 hover:w-[210px] hover:h-[205px] duration-500 "></motion.div>
  )
}

export default Simple