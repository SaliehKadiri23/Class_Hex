import React from 'react'
import { motion } from "motion/react";


const JoinUs = () => {
  return (
    <div className="w-full bg-blue-300">
      <motion.div
        initial={{
          opacity: 0,
          y: 200,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            delay: 0.24,
            duration: 0.4,
          },
        }}
        viewport={{ once: true }}
        className="w-full py-10 px-3"
      >
        <div className="w-full flex flex-col gap-5 justify-center items-center">
          <h4 className="text-lg font-bold text-black sm:text-2xl md:mb-2 md:text-3xl">
            Join 5,000,000+ students transforming their careers
          </h4>
          <div className="ripple-wrapper">
            <div className="ripple"></div>
            <div className="ripple ripple2"></div>
            <button
              className="heartbeat my-2 font-extrabold text-lg bg-blue-700 p-2 rounded-lg text-white hover:bg-white hover:text-blue-800 hover:border-1 hover:border-blue-800 hover:scale-105 transition-all duration-300"
              style={{ position: "relative", zIndex: 1 }}
            >
              Get Started
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default JoinUs