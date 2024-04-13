import React, { useEffect, useState } from "react";
import { CiMail, CiChat1, CiPhone, CiLocationOn } from "react-icons/ci";
import { motion } from "framer-motion";
import Helpmodal from "./Helpmodal";
import { useRouter } from "next/router";

const Help = ({ scrollLength, currHeight }) => {
  const [close, setClose] = useState(false);
  const [category, setCategory] = useState();

  const router = useRouter();

  return (
    <>
      <div className="w-full h-screen lg:h-[60vh] flex items-center justify-center  z-[1] relative">
        <div className="lg:w-[80%] w-[90%] h-[60%] border bg-[#392346] flex flex-col items-center justify-evenly rounded-[30px] drop-shadow-xl   duration-300 hover:scale-[1.05]">
          <motion.h1
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            animate={{ y: -50 }}
            transition={{ duration: 1 }}
            className="text-[20px] relative top-[50px] text-white"
          >
            Need more helps?
          </motion.h1>
          <div className="lg:w-[60%] w-[80%] h-[50%] grid grid-cols-1 lg:grid-cols-2 gap-5">
            <motion.div
              onClick={() => {
                setClose(true);
                setCategory("email");
              }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              animate={{ y: -50 }}
              transition={{ duration: 1 }}
              className="border bg-white border-black rounded-full flex items-center justify-center gap-5 font-[100] duration-500 hover:scale-[1.05] hover:bg-yellow-500 hover:text-white relative top-[50px] cursor-pointer"
            >
              <CiMail size={20} /> <p>Email us</p>
            </motion.div>
            <motion.div
              onClick={() => {
                router.push("/contact");
              }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              animate={{ y: -50 }}
              transition={{ duration: 1 }}
              className="border bg-white border-black rounded-full flex items-center justify-center gap-5 font-[100] duration-500 hover:scale-[1.05] hover:bg-yellow-500 hover:text-white relative  top-[50px] cursor-pointer"
            >
              <CiChat1 size={20} /> <p>Chat with us</p>
            </motion.div>
            <motion.div
              onClick={() => {
                setClose(true);
                setCategory("call");
              }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              animate={{ y: -50 }}
              transition={{ duration: 1 }}
              className="border bg-white border-black rounded-full flex items-center justify-center gap-5 font-[100] duration-500 hover:scale-[1.05] hover:bg-yellow-500 cursor-pointer hover:text-white relative top-[50px]"
            >
              <CiPhone size={20} /> <p>Call</p>
            </motion.div>
            <motion.div
              onClick={() => {
                setClose(true);
                setCategory("find");
              }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              animate={{ y: -50 }}
              transition={{ duration: 1 }}
              className="border bg-white border-black rounded-full flex items-center justify-center gap-5 font-[100] duration-500 hover:scale-[1.05] hover:bg-yellow-500 cursor-pointer hover:text-white relative top-[50px]"
            >
              <CiLocationOn size={20} />
              <p>Find us</p>
            </motion.div>
          </div>
        </div>
      </div>
      {close && (
        <Helpmodal close={close} setClose={setClose} category={category} />
      )}
    </>
  );
};

export default Help;
