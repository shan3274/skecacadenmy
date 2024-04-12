// "use client";
// import useElementYPosition from "@/hooks/useElementYPosition";
// import { motion } from "framer-motion";
// import React, { useEffect, useRef, useState } from "react";
// import { ImagesSlider } from "./ImageSlider";
// import { chairmaindata } from "@/utils/data";

// const Chairman = () => {
//   const elementRef1 = useRef(null);
//   const position1 = useElementYPosition(elementRef1);
//   const [screenHeight, setScreenHiegth] = useState(0);

//   useEffect(() => {
//     setScreenHiegth(window.innerHeight);
//   }, []);
//   const scrollTrigger = screenHeight - screenHeight / 10;

//   const images = [
//     "https://plus.unsplash.com/premium_photo-1663079426406-1b82fed16a79?q=80&w=1815&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   ];

//   return (
//     <ImagesSlider className="h-[40rem]" images={images}>
//       <motion.div
//         initial={{ y: -20, opacity: 0 }}
//         transition={{ duration: 0.5 }}
//         animate={{
//           y: scrollTrigger > position1 ? 0 : -20,
//           opacity: scrollTrigger > position1 ? 1 : 0,
//         }}
//         ref={elementRef1}
//         className="z-50 flex flex-col justify-center items-center w-full rounded-3xl"
//       >
//         <p className=" font-titlefont text-[20px] text-[#ffffff]">Welcome To</p>
//         <motion.p className="font-[700] text-4xl text-[#f5cf47]  text-center bg-clip-text  py-4 pr-5">
//           SKC GROUP OF INSTITUTION
//         </motion.p>
//         <p className=" w-[60%] text-white text-[15px] text-center bg-black/30 backdrop-blur-lg px-5 py-5 rounded-3xl">
//           {chairmaindata.paragraph1}
//         </p>
//         <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
//           <span>Read more →</span>
//           <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
//         </button>
//       </motion.div>
//     </ImagesSlider>
//   );
// };

// export default Chairman;

import React from "react";
import Image from "next/image";

let img =
  "https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

const Chairman = () => {
  let bgvideo = "/bgmba.mp4";

  const datas = {
    h1: "SKC GROUP OF INSTITUTION",
    p1: "We mould our students technologically Superior, ethically strong and want them to be recognized as an international leader in academic education, cutting-edge research, and the application of knowledge to benefit society locally and globally. The college aims prepares students for employment and assists them in pursuing their educational, carrier and personal goals through a variety of learning opportunities. We always committed to achieve student- centered learning, academic excellence, innovations, integrity and effective communication among students.",
  };
  return (
    <div className="w-full min-h-[80vh] relative flex items-center justify-center">
      <video
        src={bgvideo}
        autoPlay
        loop
        muted
        className="h-[80vh] w-[100vw] top-0 object-cover absolute"
      ></video>

      <div className="w-[80%]  h-[60vh]  z-[10] relative  bg-white/70 backdrop-blur-lg flex items-center justify-around rounded-lg">
        <div className="w-[50%] h-full flex flex-col p-10 justify-center gap-5">
          <h1 className="w-[90%] font-Comfortaa text-[25px]">{datas.h1}</h1>
          <p className="text-[12px] font-poppins text-gray-500 w-[90%]">
            {datas.p1}
          </p>
          <button className="w-[150px] h-[40px] font-poppins border border-black rounded-full text-[15px]">
            Know more
          </button>
        </div>
        <div className="w-[50%] h-full flex flex-col p-10 justify-center gap-5">
          <Image
            loader={() => (img = img)}
            src={img}
            width={0}
            height={0}
            alt="no img"
            loading="lazy"
            className="w-full rounded-lg drop-shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Chairman;
