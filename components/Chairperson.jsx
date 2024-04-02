import Image from "next/image";
import Link from "next/link";
import React from "react";
import img1 from "@/public/chairman.jpeg";

const Chairperson = () => {
  return (
    <div className="w-full min-h-[60vh] flex items-center justify-center bg-[#9af69a] my-10">
      <div className="w-[100%] min-h-[60vh] flex items-center justify-around gap-5 flex-wrap bg-[#c0b9dd] relative overflow-hidden">
        <img
          src="/6.png"
          alt=""
          className="absolute left-[50vw] top-[15vh] w-[100vw]"
        />
        <div className="w-[600px] h-[60vh] flex justify-center flex-col gap-5">
          <h1 className="text-[40px] font-Comfortaa">
            Dr.G.SARAVANAN <span className="text-[20px]">(M.B.A,Ph.D)</span>
          </h1>
          <h2 className="font-poppins text-[20px] ">
            CHAIRMAN/MANAGING TRUSTEE
          </h2>
          <p className="text-[12px] text-gray-500 font-poppins w-[90%]">
            WE ARE IN THE BUSINESS OF EDUCATIONAL INSTITUTIONS, TRAINING
            ACADEMIES, HEALTHCARE AND TRANSPORT. SKC WAS STARTED IN THE YEAR OF
            2010 AND OFFERS 5 DISCIPLINES OF EDUCATION. WE HAVE 616 STUDENTS
            PRESENTLY STUDYING.
          </p>
          <Link
            href="/"
            className="w-[150px] h-[40px] text-[13px] font-Comfortaa bg-[#392346] text-white flex items-center justify-center rounded-full duration-300 hover:scale-105"
          >
            Know more
          </Link>
        </div>
        <div className="w-[600px] h-[60vh] flex items-center justify-center">
          <Image
            src={img1}
            width={0}
            height={0}
            className="w-[60%] rounded-lg drop-shadow-xl relative"
          />
        </div>
      </div>
    </div>
  );
};

export default Chairperson;
