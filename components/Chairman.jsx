"use client";
import useElementYPosition from "@/hooks/useElementYPosition";
import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { ImagesSlider } from "./ImageSlider";
import { chairmaindata } from "@/utils/data";

const Chairman = () => {
  const elementRef1 = useRef(null);
  const position1 = useElementYPosition(elementRef1);
  const [screenHeight, setScreenHiegth] = useState(0);

  useEffect(() => {
    setScreenHiegth(window.innerHeight);
  }, []);
  const scrollTrigger = screenHeight - screenHeight / 10;

  const images = [
    "https://plus.unsplash.com/premium_photo-1663079426406-1b82fed16a79?q=80&w=1815&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  return (
    <ImagesSlider className="h-[40rem]" images={images}>
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        transition={{ duration: 0.5 }}
        animate={{
          y: scrollTrigger > position1 ? 0 : -20,
          opacity: scrollTrigger > position1 ? 1 : 0,
        }}
        ref={elementRef1}
        className="z-50 flex flex-col justify-center items-center w-full rounded-3xl"
      >
        <p className=" font-titlefont text-[20px] text-[#ffffff]">Welcome To</p>
        <motion.p className="font-[700] text-4xl text-[#f5cf47]  text-center bg-clip-text  py-4 pr-5">
          SKC GROUP OF INSTITUTION
        </motion.p>
        <p className=" w-[60%] text-white text-[15px] text-center bg-black/30 backdrop-blur-lg px-5 py-5 rounded-3xl">
          {chairmaindata.paragraph1}
        </p>
        <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
          <span>Read more →</span>
          <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
        </button>
      </motion.div>
    </ImagesSlider>
  );
};

export default Chairman;
