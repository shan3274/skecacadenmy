"use client";
import React, { useEffect, useState, Suspense } from "react";

import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Header from "./Header";

const Layout1 = ({ data }) => {
  const [scrollLength, setScrollLength] = useState(0);
  useEffect(() => {
    setScrollLength(100);
  }, [scrollLength]);

  return (
    <>
      <Header scrollLength={scrollLength} />
      <div className="w-full h-[70vh] flex  justify-center overflow-hidden relative">
        <div className="w-[100%] h-full  bg-no-repeat bg-cover  relative z-[-1]">
          <div className="absolute w-full h-full inset-0 bg-black/20"></div>
          {data?.nameplate && (
            <div className="absolute bottom-[10vh]  left-[10vh] w-[40vw] h-[20vh] bg-white/50 backdrop-blur-md rounded-md flex flex-col p-5 justify-around z-[10]">
              <h1 className="text-[30px] font-titlefont  text-[#332388]">
                {data?.nameplate?.h1}
              </h1>
            </div>
          )}

          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="w-full h-full relative z-[0]"
          >
            {data?.bg?.map((item, index) => (
              <SwiperSlide key={index}>
                <div
                  className="lg:w-full w-[100vw] h-full relative z-[0] bg-no-repeat bg-cover"
                  style={{ backgroundImage: `url(${item})` }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <motion.div
          animate={{ x: 50 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="sidel1 w-[35.7%] h-[71vh]   absolute right-12 top-0 p-0  z-[10] bg-[#144272]/80 backdrop-blur-lg text-white"
        >
          <div className="w-full h-full relative  flex items-start pt-[5vh] pl-[6vw] justify-center  flex-col gap-5">
            <h1 className="text-[30px] font-serif">{data?.h1}</h1>
            <p className="text-[10px] w-[90%] text-justify font-serif">
              {data?.p1}
            </p>
            <h1 className="text-[15px] w-[90%] text-justify font-serif">
              {data?.h2}
            </h1>
            <p className="text-[10px] w-[90%] text-justify font-serif">
              {data?.p2}
            </p>
            <p className="text-[10px] w-[90%] text-justify font-serif">
              {data?.p3}
            </p>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Layout1;
