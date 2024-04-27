// import Link from "next/link";
// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";

// const Footer = () => {
//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       whileInView={{ opacity: 1 }}
//       animate={{ y: 50 }}
//       transition={{ duration: 1 }}
//       className="w-full min-h-[60vh] overflow-hidden  border-t drop-shadow-lg flex flex-col items-center justify-center z-[999] bg-[#1f1f1f] relative bottom-[50px] text-white"
//     >
//       <>
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           animate={{ y: -50 }}
//           transition={{ duration: 1 }}
//           className="w-[80%] min-h-[54vh] flex items-center justify-center relative top-[50px] lg:flex-row flex-col "
//         >
//           <div className="lg:w-[60%] min-h-[54vh]  flex items-center justify-evenly ">
//             <div className="w-[45%] h-[50vh] flex flex-col justify-evenly text-[13px] ">
//               <h1 className="text-[17px] font-[700]">OUR CAMPUS</h1>
//               <Link href="#">About The College</Link>
//               <Link href="#">SKCE Staff Details</Link>
//               <Link href="#">Mission And Vision</Link>
//               <Link href="#">From The Principal’s Desk</Link>
//               <Link href="#">AICTE Essentials</Link>
//             </div>

//             <div className="w-[45%] h-[50vh] flex flex-col justify-evenly text-[13px] ">
//               <h1 className="text-[17px] font-[700]">Institutions</h1>
//               <Link href="#">Sree Krishna IAS / IPS academy</Link>
//               <Link href="#">SREE Krishna arts & science</Link>
//               <Link href="#">SREE Krishna international CBSE school</Link>
//               <Link href="#">SREE Krishna international ICSE school</Link>
//               <Link href="#">SREE Krishna Civil services</Link>
//               <Link href="#">Muppadi academy ( army training)</Link>
//               <Link href="#">SREE Krishna neet /jee/Apache</Link>
//               <Link href="#">SREE Krishna distance education</Link>
//             </div>
//           </div>
//           <div className="lg:w-[40%] w-[100%] h-[80%] flex flex-col justify-evenly lg:gap-0 gap-2 mb-10 lg:items-center text-[15px] relative">
//             <h1>Contact us</h1>
//             <input
//               type="text"
//               className="bg-transparent border-b p-5 lg:w-[80%] h-[40px]"
//               placeholder="Name"
//             />
//             <input
//               type="Email"
//               className="bg-transparent border-b p-5 lg:w-[80%] h-[40px]"
//               placeholder="Email"
//             />
//             <input
//               type="text"
//               className="bg-transparent border-b p-5 lg:w-[80%] h-[40px]"
//               placeholder="phone"
//             />
//             <textarea
//               name=""
//               placeholder="Reason"
//               className="resize-none bg-transparent border-b p-5 lg:w-[80%] h-[100px]"
//             ></textarea>
//             <button className="lg:w-[80%] h-[40px] border duration-500 hover:bg-white hover:text-black">
//               send
//             </button>
//           </div>
//         </motion.div>
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           animate={{ y: -50 }}
//           transition={{ duration: 1 }}
//           className="w-full h-[10vh] lg:h-[10%] flex items-center justify-center border-t relative top-[50px]"
//         >
//           <p className="">© 2024 SKCE GROUP OF INSTITUTION</p>
//         </motion.div>
//       </>
//     </motion.div>
//   );
// };

// export default Footer;

import React from "react";
import Link from "next/link";

const trustAndNavigationLinks = [
  { name: "TRUST", pathName: "/trust" },
  { name: "HOME", pathName: "/" },
  { name: "ABOUT SKC", pathName: "/about" },
  { name: "PROGRAMS", pathName: "/programs" },
  { name: "ADMISSIONS", pathName: "/admission" },
  { name: "GALLERY", pathName: "/gallery" },
  { name: "CONTACT US", pathName: "/contact" },
];

const institutions = [
  { name: "Sree Krishna IAS / IPS academy", pathName: "/academy/ias-ips" },
  { name: "SREE Krishna arts & science", pathName: "/academy/artandscience" },
  {
    name: "SREE Krishna international CBSE school",
    pathName: "/academy/cbseschool",
  },
  {
    name: "SREE Krishna international ICSE school",
    pathName: "/academy/icseschool",
  },
  {
    name: "Muppadi academy ( army training)",
    pathName: "/academy/armytraining",
  },
  { name: "SREE Krishna neet /jee/Apache", pathName: "/academy/jee-apache" },
  {
    name: "SREE Krishna distance education",
    pathName: "/academy/distanceEducation",
  },
  ,
];

const facilities = [
  {
    name: "Assist for online engineering counselling application",
    pathName: "/facilities/counseling",
  },
  {
    name: "Assistance for online application for scholarship",
    pathName: "/facilities/scholarships",
  },
  { name: "Transport", pathName: "/facilities/transportation" },
  { name: "Placement", pathName: "/facilities/placement" },
  { name: "Affordable fees", pathName: "/facilities/fees" },
  { name: "Lab facilities", pathName: "/facilities/labs" },
  { name: "Cafeteria", pathName: "/facilities/cafeteria" },
];

const Footer = () => {
  return (
    <div className="w-full min-h-[80vh] relative flex items-center justify-center mt-10">
      <div className="lg:w-[80%] lg:h-[50vh] bg-gray-100 border relative z-10 rounded-lg drop-shadow-2xl bottom-10 lg:bottom-0 flex lg:items-center pb-4 justify-around">
        <div className="w-[30%] h-[80%] flex flex-col lg:items-center items-start pl-2 pt-5 gap-5 text-blue-600">
          <h1 className="font-Comfortaa text-[12px] lg:text-[15px]">
            OUR CAMPUS
          </h1>
          {trustAndNavigationLinks.map((item) => {
            return (
              <Link
                className="text-[10px] lg:text-[12px] font-poppins text-gray-500 duration-300 hover:text-black"
                href={item.pathName}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
        <div className="w-[30%] h-[80%] flex flex-col items-center pt-5 gap-5">
          <h1 className="font-Comfortaa text-[12px] lg:text-[15px] text-blue-600">
            INSTITUTIONS
          </h1>
          {institutions.map((item) => {
            return (
              <Link
                className="text-[10px] lg:text-[12px] font-poppins text-gray-500 duration-300 hover:text-black"
                href={item.pathName}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
        <div className="w-[30%] h-[80%] flex flex-col  lg:items-center items-start pt-5 gap-5">
          <h1 className="font-Comfortaa text-[12px] lg:text-[15px] text-blue-600">
            FACILITIES
          </h1>
          {facilities.map((item) => {
            return (
              <Link
                className="text-[10px] lg:text-[12px] font-poppins text-gray-500 duration-300 hover:text-black"
                href={item.pathName}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>
      <div className="w-full h-[30vh] absolute bottom-0 ">
        <div className="relative w-full h-full bg-[#18181B] flex items-center justify-around">
          <div className="w-[80%] h-[15vh] absolute bottom-0 flex items-center justify-between">
            <p className="text-[12px] font-poppins text-gray-500">
              © Copyright 2024, All Rights Reserved
            </p>
            <p className="text-[12px] font-poppins text-gray-500">
              SKC GROUP OF INSTITUTION
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
