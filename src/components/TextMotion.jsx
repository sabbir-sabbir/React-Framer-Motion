/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";

const TextMotion = () => {
  // const message = "TextMotion TextMotion TextMotion TextMotion";
  // const wordArray =  message.split(" ")
  return (
    // <motion.div

    // className="text-2xl m-4 text-center"
    // > {
    //     wordArray.map((word, index)=> (
    //         <motion.span
    //         initial={{
    //             opacity: 0,

    //         }}
    //         animate={{
    //             opacity: 1
    //         }}
    //         transition={{
    //             duration: 2,
    //             delay: 1

    //         }}
    //         key={index}>{word}  {' '}</motion.span>
    //     ))
    // }</motion.div>

    <>
      <motion.div
        initial={{ opacity: 0, x: "-100vh" }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5 }}
      >
        <h1>Ich will Animation lernen auch</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, facere
          neque adipisci cum pariatur praesentium sint assumenda ratione
          suscipit aliquid, nostrum consectetur culpa consequuntur velit!
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: "-100vh" }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5, type: 'spring' }}

      >
        <h1>Ich will Animation lernen auch</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, facere
          neque adipisci cum pariatur praesentium sint assumenda ratione
          suscipit aliquid, nostrum consectetur culpa consequuntur velit!
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: "-100vh" }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5, type: 'spring', bounce: 0.7 }}
      >
        <h1>Ich will Animation lernen auch</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, facere
          neque adipisci cum pariatur praesentium sint assumenda ratione
          suscipit aliquid, nostrum consectetur culpa consequuntur velit!
        </p>
      </motion.div>
    </>
  );
};

export default TextMotion;
