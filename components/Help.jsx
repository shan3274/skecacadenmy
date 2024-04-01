import React, { useEffect, useState } from "react";
import { CiMail, CiChat1, CiPhone, CiLocationOn } from "react-icons/ci";
import { motion } from "framer-motion";

const Help = ({ scrollLength, currHeight }) => {
  return (
    <div className="w-full h-screen lg:h-[60vh] flex items-center justify-center  z-[1] relative">
      <div className="lg:w-[80%] w-[90%] h-[60%] border bg-[#e6e6e6] flex flex-col items-center justify-evenly rounded-[30px] drop-shadow-xl   duration-300 hover:scale-[1.05]">
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          animate={{ y: -50 }}
          transition={{ duration: 1 }}
          className="text-[20px] relative top-[50px]"
        >
          Need more helps?
        </motion.h1>
        <div className="lg:w-[60%] w-[80%] h-[50%] grid grid-cols-1 lg:grid-cols-2 gap-5">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            animate={{ y: -50 }}
            transition={{ duration: 1 }}
            className="border border-black rounded-full flex items-center justify-center gap-5 font-[100] duration-500 hover:scale-[1.05] hover:bg-black hover:text-white relative top-[50px]"
          >
            <CiMail size={20} /> <p>Email us</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            animate={{ y: -50 }}
            transition={{ duration: 1 }}
            className="border border-black rounded-full flex items-center justify-center gap-5 font-[100] duration-500 hover:scale-[1.05] hover:bg-black hover:text-white relative top-[50px]"
          >
            <CiChat1 size={20} /> <p>Chat with us</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            animate={{ y: -50 }}
            transition={{ duration: 1 }}
            className="border border-black rounded-full flex items-center justify-center gap-5 font-[100] duration-500 hover:scale-[1.05] hover:bg-black hover:text-white relative top-[50px]"
          >
            <CiPhone size={20} /> <p>Client Services 1800 103 9988</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            animate={{ y: -50 }}
            transition={{ duration: 1 }}
            className="border border-black rounded-full flex items-center justify-center gap-5 font-[100] duration-500 hover:scale-[1.05] hover:bg-black hover:text-white relative top-[50px]"
          >
            <CiLocationOn size={20} />
            <p>Find us</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Help;
