import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { trustPageData } from "@/utils/trust";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const trust = () => {
  const [scrollLength, setScrollLength] = useState();
  useEffect(() => {
    setScrollLength(100);
  }, []);
  let [image, setImage] = useState(trustPageData?.image);
  let [image2, setImage2] = useState(trustPageData?.image2);

  const [data, setDatas] = useState(trustPageData);
  return (
    <div>
      <Header scrollLength={scrollLength} />
      <div className="w-full min-h-screen relative top-[5rem] flex items-center justify-center flex-col gap-5 mt-[10vh]  mb-[20vh]">
        <div className="w-[80%] min-h-screen flex items-center justify-center gap-10 flex-col">
          <h1 className="text-[40px] font-Comfortaa">{data?.title}</h1>
          <div className="w-full min-h-[50vh] flex items-center justify-around flex-wrap gap-5">
            <Image
              loader={() => (image = image)}
              src={image}
              width={500}
              height={0}
              className="rounded-lg drop-shadow-xl"
            />
            <div className="w-[450px] h-full flex flex-col  p-5 gap-5">
              <h1 className="font-Comfortaa text-[25px] w-full">
                {" "}
                {data?.heading1}
              </h1>
              <p className="w-full text-[17px] text-gray-500 font-poppins">
                {data?.paragraph1}
                {data?.paragraph2}
              </p>
            </div>
          </div>
          <div className="w-full min-h-[50vh] flex items-center flex-col justify-around flex-wrap gap-5">
            <h1 className="font-Comfortaa text-[35px] ">{data?.heading2}</h1>
            <Image
              loader={() => (image2 = image2)}
              src={image2}
              width={0}
              height={0}
              className="rounded-lg drop-shadow-xl w-[60%]"
            />
            <p className="w-full text-[17px] text-gray-500 font-poppins mt-10 text-center">
              {data?.paragraph3}
              {data?.paragraph4}
              {data?.paragraph5}
              {data?.paragraph6}
              {data?.paragraph7}
              {data?.paragraph8}
              {data?.paragraph9}
              {data?.paragraph10}
            </p>
          </div>
          <div className="w-full min-h-[50vh] flex items-center flex-col justify-around flex-wrap ">
            <h1 className="font-Comfortaa text-[35px] ">{data?.heading3}</h1>

            <p className="w-full text-[17px] text-gray-500 font-poppins -mt-10  text-center">
              {data?.paragraph11}
              {data?.paragraph12}
              {data?.paragraph13}
              {data?.paragraph14}
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default trust;
