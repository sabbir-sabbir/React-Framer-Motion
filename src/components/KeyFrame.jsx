/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";

const KeyFrame = () => {
  return (
    <>
      {/* // <motion.div
    // className="ml-2 mt-2 w-[120px] h-[120px] bg-blue-400 rounded-full"
    // animate={{
    //      borderRadius: ["100%", "80%", "70%", "60%", "85%", "75%", "65", "55", "45", "35", "55", "85", "100%"],
    //      rorate: [0, 90, 60, 50, 30, 20, 0],
    //      scale: [1,2,4,5,4,3,2,1]
        
    // }}
    
    //  transition={{
    //         duration: 20
    //      }}
    // ></motion.div> */}

      <motion.button 
      whileTap={{
        scale: 0.9
      }}
      className="w-[120px] h-auto  bg-black text-white ml-2 mt-2 py-1 px-1 shadow-xl shadow-blue-200 backdrop-blur-2xl focus:text-red-400">
        Button
      </motion.button>
      <motion.button 
      whileHover={{
        scale: 1.4
      }}
      className="w-[120px] h-auto  bg-black text-white ml-2 mt-2 py-1 px-1 shadow-xl shadow-blue-200 backdrop-blur-2xl focus:text-red-400">
        Button
      </motion.button>
      <motion.button 
      whileHover={{
        scale: 1.4,
        transition: {yoyo: Infinity},
      }}
      className="w-[120px] h-auto  bg-black text-white ml-2 mt-2 py-1 px-1 shadow-xl shadow-blue-200 backdrop-blur-2xl focus:text-red-400">
        Button
      </motion.button>
    </>
  );
};

export default KeyFrame;
