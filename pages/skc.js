import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { skcdata } from "@/utils/skcdata";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const skc = () => {
  const [scrollLength, setScrollLength] = useState();
  useEffect(() => {
    setScrollLength(100);
  }, []);

  const [data, setDatas] = useState(skcdata);
  return (
    <div>
      <Header scrollLength={scrollLength} />
      <div className="w-full min-h-screen relative top-[5rem] flex items-center justify-center flex-col gap-5 mt-[10vh]  mb-[20vh]">
        <div className="w-[80%] min-h-screen flex items-center justify-center gap-10 flex-col">
          <h1 className="text-[40px] font-Comfortaa">{data?.title}</h1>

          <div className="w-full min-h-[20vh] flex items-start flex-col justify-around flex-wrap gap-5 ">
            <h1 className="font-Comfortaa text-blue-600 text-[25px] ">
              {" "}
              {data?.heading1}
            </h1>

            <p className="w-full text-[15px] text-gray-500 font-poppins  text-start">
              {data?.paragraph1}
            </p>
          </div>
          <div className="w-full min-h-[20vh] flex items-start flex-col justify-around flex-wrap gap-5 ">
            <h1 className="font-Comfortaa text-blue-600 text-[25px] ">
              {" "}
              {data?.heading2}
            </h1>

            <p className="w-full text-[15px] text-gray-500 font-poppins  text-start">
              {data?.paragraph2}
            </p>
          </div>
          <div className="w-full min-h-[20vh] flex items-start flex-col justify-around flex-wrap gap-5 ">
            <h1 className="font-Comfortaa text-blue-600 text-[25px] ">
              {" "}
              {data?.heading3}
            </h1>

            <p className="w-full text-[15px] text-gray-500 font-poppins  text-start">
              {data?.paragraph3}
            </p>
          </div>
          <div className="w-full min-h-[20vh] flex items-start flex-col justify-around flex-wrap gap-5 ">
            <h1 className="font-Comfortaa text-blue-600 text-[25px] ">
              {" "}
              {data?.heading4}
            </h1>

            <p className="w-full text-[15px] text-gray-500 font-poppins  text-start">
              {data?.paragraph4}
            </p>
          </div>
          <div className="w-full min-h-[20vh] flex items-start flex-col justify-around flex-wrap gap-5 ">
            <h1 className="font-Comfortaa text-blue-600 text-[25px] ">
              {" "}
              {data?.heading5}
            </h1>

            <p className="w-full text-[15px] text-gray-500 font-poppins  text-start">
              {data?.paragraph5}
            </p>
          </div>
          <div className="w-full min-h-[20vh] flex items-start flex-col justify-around flex-wrap gap-5 ">
            <h1 className="font-Comfortaa text-blue-600 text-[25px] ">
              {" "}
              {data?.heading6}
            </h1>

            <p className="w-full text-[15px] text-gray-500 font-poppins  text-start">
              {data?.paragraph6}
            </p>
          </div>
          <div className="w-full min-h-[20vh] flex items-start flex-col justify-around flex-wrap gap-5 ">
            <h1 className="font-Comfortaa text-blue-600 text-[25px] ">
              {" "}
              {data?.heading7}
            </h1>

            <p className="w-full text-[15px] text-gray-500 font-poppins  text-start">
              {data?.paragraph7}
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default skc;
