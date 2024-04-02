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
      <div className="absolute left-0 top-0 w-[400px] h-[20px]   bg-[#392346]">
        <div className="relative w-full h-full">
          <div className="absolute right-[-20px] bg-[#392346] top-0 w-[20px] h-[20px] ryttri"></div>
        </div>
      </div>

      <div className="absolute right-0 bottom-0 w-[400px] h-[20px]   bg-[#392346]">
        <div className="relative w-full h-full">
          <div className="absolute left-[-20px] bg-[#392346] top-0 w-[20px] h-[20px] ryttri1"></div>
        </div>
      </div>
      <motion.h1
        animate={{ scale: position1 < scrollTrigger ? 1 : 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="lg:text-[35px] text-[20px]  lg:w-[60%] text-center  font-Comfortaa z-[1]"
      >
        SKC GROUP OF INSTITUTION PROVIDES A LOT OF FACILITIES
      </motion.h1>
      <div className="w-[200px] h-[1px] bg-yellow-500 mb-5"></div>
      <div className="w-[70%] flex justify-around flex-wrap gap-y-3">
        <motion.a
          animate={{ y: position1 < scrollTrigger ? 50 : 0 }}
          transition={{ type: "spring", stiffness: 100 }}
          ref={elementRef1}
          href="/"
          download
          className="w-[180px] h-[80px] bg-[#392346] relative top-[-50px] rounded-lg flex flex-col items-center justify-center gap-2 hover:scale-[1.1]  cursor-pointer"
        >
          <div className="absolute left-[-20%]">
            {" "}
            <Bubble />
          </div>
          <IoBookSharp color="white" size={40} />
          <p className="text-white font-titlefont text-[12px]">
            Academic Facilities
          </p>
        </motion.a>
        <motion.a
          animate={{ y: position1 < scrollTrigger ? 50 : 0 }}
          transition={{ type: "spring", stiffness: 100 }}
          href="/"
          className="w-[180px] h-[80px] bg-[#392346] relative top-[-50px] rounded-lg flex flex-col items-center justify-center gap-2 hover:scale-[1.1]  cursor-pointer"
        >
          <div className="absolute right-[-60%]">
            {" "}
            <Bubble />
          </div>
          <FaSwatchbook color="white" size={40} />
          <p className="text-white font-titlefont text-[12px]">
            Student Services
          </p>
        </motion.a>
        <motion.a
          animate={{ y: position1 < scrollTrigger ? 50 : 0 }}
          transition={{ type: "spring", stiffness: 100 }}
          ref={elementRef1}
          href="/"
          download
          className="w-[180px] h-[80px] bg-[#392346] relative top-[-50px] rounded-lg flex flex-col items-center justify-center gap-2 hover:scale-[1.1]  cursor-pointer"
        >
          <div className="absolute right-[-80%]">
            {" "}
            <Bubble />
          </div>
          <FaComputer color="white" size={40} />
          <p className="text-white font-titlefont text-[12px]">
            Technology and Infrastructure
          </p>
        </motion.a>
        <motion.a
          animate={{ y: position1 < scrollTrigger ? 50 : 0 }}
          transition={{ type: "spring", stiffness: 100 }}
          ref={elementRef1}
          href="/"
          download
          className="w-[180px] h-[80px] bg-[#392346] relative top-[-50px] rounded-lg flex flex-col items-center justify-center gap-2 hover:scale-[1.1]  cursor-pointer"
        >
          <div className="absolute right-[-50%]">
            {" "}
            <Bubble />
          </div>
          <GiWorld color="white" size={40} />
          <p className="text-white font-titlefont text-[12px]">
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
