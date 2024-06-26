// import Image from "next/image";
// import Link from "next/link";
// import React from "react";
// import img1 from "@/public/chairman.jpeg";

// const Chairperson = () => {
//   return (
//     <div className="w-full min-h-[60vh] flex items-center justify-center bg-[#9af69a] my-10">
//       <div className="w-[100%] min-h-[60vh] flex items-center justify-around gap-5 flex-wrap bg-[#c0b9dd] relative overflow-hidden">
//         <img
//           src="/6.png"
//           alt=""
//           className="absolute left-[50vw] top-[15vh] w-[100vw]"
//         />
//         <div className="w-[600px] h-[60vh] flex justify-center flex-col gap-5">
//           <h1 className="text-[40px] font-Comfortaa">
//             Dr.G.SARAVANAN <span className="text-[20px]">(M.B.A,Ph.D)</span>
//           </h1>
//           <h2 className="font-poppins text-[20px] ">
//             CHAIRMAN/MANAGING TRUSTEE
//           </h2>
//           <p className="text-[12px] text-gray-500 font-poppins w-[90%]">
//             WE ARE IN THE BUSINESS OF EDUCATIONAL INSTITUTIONS, TRAINING
//             ACADEMIES, HEALTHCARE AND TRANSPORT. SKC WAS STARTED IN THE YEAR OF
//             2010 AND OFFERS 5 DISCIPLINES OF EDUCATION. WE HAVE 616 STUDENTS
//             PRESENTLY STUDYING.
//           </p>
//           <Link
//             href="/"
//             className="w-[150px] h-[40px] text-[13px] font-Comfortaa bg-[#392346] text-white flex items-center justify-center rounded-full duration-300 hover:scale-105"
//           >
//             Know more
//           </Link>
//         </div>
//         <div className="w-[600px] h-[60vh] flex items-center justify-center">
//           <Image
//             src={img1}
//             width={0}
//             height={0}
//             className="w-[60%] rounded-lg drop-shadow-xl relative"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Chairperson;

import { mba } from "@/utils/data";
import React, { useState } from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { useRouter } from "next/router";

const Chairperson = () => {
  const route = useRouter();
  let image = "https://www.sreekrishnaengcollege.com/assets/img/chairman.jpg";
  const [datas, seyDatas] = useState(mba);
  return (
    <div>
      <div className="w-full h-[70vh] flex items-center justify-center mt-20">
        <div className="w-[80%] h-[70vh] flex flex-col items-center justify-center gap-0 relative">
          <div className="w-full h-[10%] flex items-center justify-center">
            <h1 className="text-[40px] font-Comfortaa ">CHAIRMAN</h1>
          </div>
          <div className="w-full h-[90%]  flex lg:flex-row flex-col gap-5 items-center justify-center drop-shadow-xl">
            <div className="lg:w-[50%] w-full rounded-l-xl h-[70%] overflow-hidden relative flex items-center justify-center">
              <Image
                loader={() => (image = image)}
                src={image}
                width={0}
                height={0}
                className="w-[90%]   rounded-lg"
              />
            </div>
            <div className="lg:w-[70%] w-full h-[70%] flex flex-col p-5 lg:pl-20 justify-center rounded-r-xl gap-5 bg-gray-100">
              <h1 className=" lg:text-[40px] text-[20px] font-Comfortaa">
                Dr.G.SARAVANAN,{" "}
                <span className="lg:text-[20px] text-[10px]">MBA,.PhD</span>
              </h1>
              <h2 className="lg:text-[17px] font-poppins text-blue-500">
                CHAIRMAN/MANAGING TRUSTEE
              </h2>
              <p className="text-[15px] text-gray-500 font-poppins">
                WE ARE IN THE BUSINESS OF EDUCATIONAL INSTITUTIONS, TRAINING
                ACADEMIES, HEALTHCARE AND TRANSPORT. SKC WAS STARTED IN THE YEAR
                OF 2010 AND OFFERS 5 DISCIPLINES OF EDUCATION. WE HAVE 616
                STUDENTS PRESENTLY STUDYING.
              </p>
              <button
                onClick={() => route.push("Chairman")}
                className="w-[150px] h-[40px] relative flex items-center justify-center gap-2 text-[13px] font-poppins bg-blue-500 text-white rounded-full duration-300 hover:scale-105"
              >
                Know more <FaArrowRight size={12} />{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chairperson;
