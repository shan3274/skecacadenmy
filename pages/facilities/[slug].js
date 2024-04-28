import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Image from "next/image";

import {
  affordableFees,
  cafeteria,
  labFacilities,
  onlineEngineeringCounseling,
  onlineScholarshipApplication,
  placementSupport,
  transportation,
} from "@/utils/facilitiesdata";

const Page = () => {
  const [scrollLength, setScrollLength] = useState();
  useEffect(() => {
    setScrollLength(100);
  }, []);

  const [data, setDatas] = useState();
  let [image, setImage] = useState();
  let [image2, setImage2] = useState();

  useEffect(() => {
    if (router.query.slug === "scholarships") {
      setDatas(onlineScholarshipApplication);
      setImage(onlineScholarshipApplication?.image1);
      setImage2(onlineScholarshipApplication?.image2);
    }
    if (router.query.slug === "counseling") {
      setDatas(onlineEngineeringCounseling);
      setImage(onlineEngineeringCounseling?.image1);
      setImage2(onlineEngineeringCounseling?.image2);
    }
    if (router.query.slug === "transportation") {
      setDatas(transportation);
      setImage(transportation?.image1);
      setImage2(transportation?.image2);
    }
    if (router.query.slug === "placement") {
      setDatas(placementSupport);
      setImage(placementSupport?.image1);
      setImage2(placementSupport?.image2);
    }
    if (router.query.slug === "fees") {
      setDatas(affordableFees);
      setImage(affordableFees?.image1);
      setImage2(affordableFees?.image2);
    }
    if (router.query.slug === "labs") {
      setDatas(labFacilities);
      setImage(labFacilities?.image1);
      setImage2(labFacilities?.image2);
    }
    if (router.query.slug === "cafeteria") {
      setDatas(cafeteria);
      setImage(cafeteria?.image1);
      setImage2(cafeteria?.image2);
    }
  }, []);

  const router = useRouter();
  return (
    <div>
      <Header scrollLength={scrollLength} />
      <div className="w-full min-h-screen relative top-[5rem] flex items-center justify-center flex-col gap-5 mt-[10vh]  mb-[20vh]">
        <div className="w-[80%] min-h-screen flex items-center justify-center gap-10 flex-col">
          <h1 className="lg:text-[40px] text-[25px] lg:text-start text-center font-Comfortaa">
            {data?.title}
          </h1>
          <div className="w-full min-h-[50vh] flex items-center justify-around flex-wrap gap-5">
            <Image
              loader={() => (image = image)}
              src={image}
              width={500}
              height={0}
              className="rounded-lg drop-shadow-xl"
            />
            <div className="lg:w-[450px] w-full h-full flex flex-col  p-5 gap-5">
              <h1 className="font-Comfortaa lg:text-[25px] text-[20px] w-full text-center lg:text-start">
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
            <h1 className="font-Comfortaa lg:text-[35px] text-[20px] text-center lg:text-start">
              {data?.heading2}
            </h1>
            <Image
              loader={() => (image2 = image2)}
              src={image2}
              width={0}
              height={0}
              className="rounded-lg drop-shadow-xl lg:w-[60%] w-full"
            />
            <p className="w-full text-[17px] text-gray-500 font-poppins mt-10 text-center">
              {data?.paragraph3}
              {data?.paragraph4}
              {data?.paragraph5}
            </p>
          </div>
          <div className="w-full min-h-[50vh] flex items-center flex-col justify-around flex-wrap ">
            <h1 className="font-Comfortaa lg:text-[35px] text-[20px] text-center lg:text-start">
              {data?.heading3}
            </h1>

            <p className="w-full text-[17px] text-gray-500 font-poppins -mt-20  text-center">
              {data?.paragraph6}
              {data?.paragraph7}
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
