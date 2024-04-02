import { GiWorld } from "react-icons/gi";
import React, { useEffect, useRef, useState } from "react";
import Bubble from "@/utils/bubble";
import { IoBookSharp } from "react-icons/io5";
import { FaSwatchbook } from "react-icons/fa";
import { FaComputer } from "react-icons/fa6";

import { motion } from "framer-motion";
import useElementYPosition from "@/hooks/useElementYPosition";
const Result = () => {
  const elementRef1 = useRef(null);
  const position1 = useElementYPosition(elementRef1);
  const [screenHeight, setScreenHiegth] = useState(0);
  useEffect(() => {
    setScreenHiegth(window.innerHeight);
  }, []);

  const scrollTrigger = screenHeight - screenHeight / 30;

  return (
    <div className="w-full min-h-[55vh] relative flex flex-col items-center justify-center bg-[#F6F9F5] pb-10 gap-5 overflow-hidden">
      <img src="/5.png" className="w-[50%] absolute left-[-22%] top-[-25%]" />
      <img
        src="/4.png"
        className="w-[50%] absolute right-[-28%] bottom-[-28%]"
      />
      <motion.h1
        animate={{ scale: position1 < scrollTrigger ? 1 : 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="lg:text-[35px] text-[20px]  lg:w-[60%] text-center  font-[700] z-[1]"
      >
        SKC GROUP OF INSTITUTION PROVIDES A LOT OF FACILITIES
      </motion.h1>
      <p className="font-[100] ">-------- ----</p>
      <div className="w-[70%] flex justify-around flex-wrap gap-y-3">
        <motion.a
          animate={{ y: position1 < scrollTrigger ? 50 : 0 }}
          transition={{ type: "spring", stiffness: 100 }}
          ref={elementRef1}
          href="/"
          download
          className="w-[250px] h-[100px] bg-[#392346] relative top-[-50px] rounded-lg flex flex-col items-center justify-center gap-2 hover:scale-[1.1]  cursor-pointer"
        >
          <div className="absolute left-[-20%]">
            {" "}
            <Bubble />
          </div>
          <IoBookSharp color="white" size={40} />
          <p className="text-white font-titlefont text-[15px]">
            Academic Facilities
          </p>
        </motion.a>
        <motion.a
          animate={{ y: position1 < scrollTrigger ? 50 : 0 }}
          transition={{ type: "spring", stiffness: 100 }}
          href="/"
          className="w-[250px] h-[100px] bg-[#392346] relative top-[-50px] rounded-lg flex flex-col items-center justify-center gap-2 hover:scale-[1.1]  cursor-pointer"
        >
          <div className="absolute right-[-60%]">
            {" "}
            <Bubble />
          </div>
          <FaSwatchbook color="white" size={40} />
          <p className="text-white font-titlefont text-[15px]">
            Student Services
          </p>
        </motion.a>
        <motion.a
          animate={{ y: position1 < scrollTrigger ? 50 : 0 }}
          transition={{ type: "spring", stiffness: 100 }}
          ref={elementRef1}
          href="/"
          download
          className="w-[250px] h-[100px] bg-[#392346] relative top-[-50px] rounded-lg flex flex-col items-center justify-center gap-2 hover:scale-[1.1]  cursor-pointer"
        >
          <div className="absolute right-[-80%]">
            {" "}
            <Bubble />
          </div>
          <FaComputer color="white" size={40} />
          <p className="text-white font-titlefont text-[15px]">
            Technology and Infrastructure
          </p>
        </motion.a>
        <motion.a
          animate={{ y: position1 < scrollTrigger ? 50 : 0 }}
          transition={{ type: "spring", stiffness: 100 }}
          ref={elementRef1}
          href="/"
          download
          className="w-[250px] h-[100px] bg-[#392346] relative top-[-50px] rounded-lg flex flex-col items-center justify-center gap-2 hover:scale-[1.1]  cursor-pointer"
        >
          <div className="absolute right-[-50%]">
            {" "}
            <Bubble />
          </div>
          <GiWorld color="white" size={40} />
          <p className="text-white font-titlefont text-[15px]">
            Residential Facilities
          </p>
        </motion.a>
      </div>
      <motion.button
        animate={{ y: position1 < scrollTrigger ? -50 : 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="bg-[#392346] text-white w-[220px] h-[50px] relative top-[100px]"
      >
        Know more
      </motion.button>
    </div>
  );
};

export default Result;
