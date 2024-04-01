import React, { useEffect, useState } from "react";

import { FaHandshake } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import useScroll from "@/hooks/useScroll";
import Header from "./Header";
import { getElement } from "@/utils/firebase";

const Hero = () => {
  let bg = "/bg.mp4";
  const [count, setCount] = useState(0);
  const [data, setData] = useState({
    tiedUpWithVELS: {
      title: "Somthing intresting",
      image1:
        "https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=10",
      image2:
        "https://images.pexels.com/photos/2305098/pexels-photo-2305098.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=10",
      description:
        "Sree Krishna College of Engineering in Vellore was inaugurated in August 2010 by Vellore District Collector Mr.S. Rajendran. SKCE is managed by Lord Sree Krishna Trust. The founder of the Trust, Dr. A. Aranganathan, is a socialist with rich experience in Educational Institutions.",
    },
    admissionsAnnouncement: {
      title: "Admissions open April 24, 2024",
      buttonText: "Apply Now",
    },
  });

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i >= 6) i = 0;
      let value = i++;
      setCount(value);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollLength = useScroll();

  return (
    <div id="hero-content" className="w-full h-screen relative">
      <Header scrollLength={scrollLength} />
      <main className="w-full h-screen bg-[#bababa] flex items-center justify-center overflow-hidden text-white cursor-default relative">
        <div className="absolute flex items-center w-full h-[40px] bg-black/30 backdrop-blur-sm z-[2] bottom-5">
          <div className="marquee-container">
            <div className="marquee-content">
              {data.tiedUpWithVELS.description}
            </div>
          </div>
        </div>

        <AnimatePresence>
          <motion.div
            key="admissions"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute w-[90%] lg:w-[50%] h-[40%] bg-black/30 z-[3] rounded-[50px] top-[30%] flex flex-col items-center justify-center gap-5 duration-300"
          >
            <h1 className="lg:text-[40px] text-[30px]  lg:w-[60%] text-center font-[700] font-titlefont">
              {data.admissionsAnnouncement.title}
            </h1>
            <button className="lg:text-[25px] font-sans px-5 py-3 bg-yellow-500 rounded-lg hover:scale-[1.05] duration-75 hover:bg-blue-500">
              {data.admissionsAnnouncement.buttonText}
            </button>
          </motion.div>
        </AnimatePresence>
        <video
          src={bg}
          autoPlay
          loop
          muted
          className="h-[100vh] w-[100vw] object-cover absolute z-[1]"
        ></video>
      </main>
    </div>
  );
};

export default Hero;
