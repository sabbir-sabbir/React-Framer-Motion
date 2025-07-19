/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";

const Box = ({ text }) => {
  return (
    <motion.div
    initial={{opacity: 0, x: -50}}
    whileInView={{opacity: 1, x: 0, transition: {
        duration: 2
    }}}
    className="w-[200px] h-[200px] mt-2 ml-2 flex items-center justify-center border-2 bg-orange-400">
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
