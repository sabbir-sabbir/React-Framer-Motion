/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";

const Box = ({ text }) => {
  return (
    <motion.div
    initial={{opacity: 0, x: -20}}
    whileInView={{opacity: 1, x: 0, transition: {
        duration: 2
    }}}
    className="w-[150px] h-[150px] mt-2 ml-2 flex items-center justify-center border-2 bg-orange-400  hover:w-[175px] duration-700 ">
      {text}
    </motion.div>
  );
};

const ScrollReavel = () => {
  const greetings = ["Hello", "How", "Are", "You", "Today", "?", "Tell", "Me", "About", "Your", "Day"];
  return (
    <>
      <div>
        {greetings.map((item, index) => (
          <Box key={index} text={item} />
        ))}
      </div>
    </>
  );
};

export default ScrollReavel;
