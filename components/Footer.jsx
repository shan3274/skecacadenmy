import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      animate={{ y: 50 }}
      transition={{ duration: 1 }}
      className="w-full min-h-[60vh] overflow-hidden  border-t drop-shadow-lg flex flex-col items-center justify-center z-[999] bg-[#1f1f1f] relative bottom-[50px] text-white"
    >
      <>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          animate={{ y: -50 }}
          transition={{ duration: 1 }}
          className="w-[80%] min-h-[54vh] flex items-center justify-center relative top-[50px] lg:flex-row flex-col "
        >
          <div className="lg:w-[60%] min-h-[54vh]  flex items-center justify-evenly ">
            <div className="w-[45%] h-[50vh] flex flex-col justify-evenly text-[13px] ">
              <h1 className="text-[17px] font-[700]">OUR CAMPUS</h1>
              <Link href="#">About The College</Link>
              <Link href="#">SKCE Staff Details</Link>
              <Link href="#">Mission And Vision</Link>
              <Link href="#">From The Principal’s Desk</Link>
              <Link href="#">AICTE Essentials</Link>
            </div>

            <div className="w-[45%] h-[50vh] flex flex-col justify-evenly text-[13px] ">
              <h1 className="text-[17px] font-[700]">DEPARTMENTS</h1>
              <Link href="#">B.E. Civil Engineering(Naan Mudalvan Scheme)</Link>
              <Link href="#">B.E- Computer Science(Naan Mudalvan Scheme)</Link>
              <Link href="#">
                B.E Electronics And Communication(Naan Mudalvan Scheme)
              </Link>
              <Link href="#">
                B.E Electrical And Electronics(Naan Mudalvan Scheme)
              </Link>
              <Link href="#">
                B.E Mechanical Engineering(Naan Mudalvan Scheme)
              </Link>
              <Link href="#">Science And Humanities</Link>
              <Link href="#">MBA & MCA</Link>
            </div>
          </div>
          <div className="lg:w-[40%] w-[100%] h-[80%] flex flex-col justify-evenly lg:gap-0 gap-2 mb-10 lg:items-center text-[15px] relative">
            <h1>Contact us</h1>
            <input
              type="text"
              className="bg-transparent border-b p-5 lg:w-[80%] h-[40px]"
              placeholder="Name"
            />
            <input
              type="Email"
              className="bg-transparent border-b p-5 lg:w-[80%] h-[40px]"
              placeholder="Email"
            />
            <input
              type="text"
              className="bg-transparent border-b p-5 lg:w-[80%] h-[40px]"
              placeholder="phone"
            />
            <textarea
              name=""
              placeholder="Reason"
              className="resize-none bg-transparent border-b p-5 lg:w-[80%] h-[100px]"
            ></textarea>
            <button className="lg:w-[80%] h-[40px] border duration-500 hover:bg-white hover:text-black">
              send
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          animate={{ y: -50 }}
          transition={{ duration: 1 }}
          className="w-full h-[10vh] lg:h-[10%] flex items-center justify-center border-t relative top-[50px]"
        >
          <p className="">© 2024 Sree Krishna College Of Engineering</p>
        </motion.div>
      </>
    </motion.div>
  );
};

export default Footer;
