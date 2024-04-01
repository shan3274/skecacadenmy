import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  let img1 =
    "https://images.pexels.com/photos/1007066/pexels-photo-1007066.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=10";
  let img2 =
    "https://images.pexels.com/photos/3793238/pexels-photo-3793238.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=10";
  return (
    <div className="w-full min-h-[80vh] relative top-[5rem] flex items-center justify-around flex-wrap px-20">
      <div className="w-[300px] relative top-10">
        <Image
          loader={() => (img1 = img1)}
          src={img1}
          width={0}
          height={0}
          alt="img1"
          className="w-[90%] rounded-[100px] drop-shadow-xl"
        />
        <div className="absolute w-[90%] aspect-[4/6] z-[-1] border rounded-[100px] top-5 border-yellow-500"></div>
      </div>
      <div className="w-[400px] flex flex-col items-center justify-center h-[80vh] gap-5">
        <p className="text-red-500 text-[13px] font-poppins text-center ">
          Learn From Today
        </p>
        <h1 className="text-[35px] font-Comfortaa text-center">
          Best Academic Online Learning Platfrom
        </h1>
        <p className="text-[12px] font-poppins  text-center text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque harum
          odit itaque totam corrupti esse dolore, debitis rem labore veritatis.
          Molestias ea, qui ab repudiandae veritatis natus nam nesciunt nisi?
        </p>
        <Link
          href="#"
          className="w-[200px] h-[40px] text-white bg-blue-600 flex items-center justify-center rounded-full duration-300 hover:scale-105"
        >
          Know More
        </Link>
      </div>
      <div className="w-[300px] relative bottom-10">
        <Image
          loader={() => (img2 = img2)}
          src={img2}
          width={0}
          height={0}
          alt="img1"
          className="w-[90%]  rounded-[100px] drop-shadow-xl "
        />
        <div className="absolute w-[90%] aspect-[4/6] z-[-1] border rounded-[100px] bottom-5 border-yellow-500"></div>
      </div>
    </div>
  );
};

export default Hero;
