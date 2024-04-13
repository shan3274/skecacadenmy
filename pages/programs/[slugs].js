import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ProgramContext } from "@/context/Programcontext";
import {
  baHonsEconomics,
  baHonsEnglish,
  baWesternClassicalMusic,
  bba,
  bcom,
  bscAnimation,
  bscFoodServiceManagement,
  bscHotelCateringManagement,
  bscVisualCommunication,
  bscYoga,
  diplomaAstrology,
  diplomaHotelCateringManagement,
  diplomaYoga,
  maAstrology,
  maBharatanatyam,
  maKarnaticMusic,
  mba,
  mscHotelCateringManagement,
  mscVisualCommunication,
  mscYoga,
} from "@/utils/data";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState, useContext } from "react";

const Page = () => {
  const router = useRouter();

  const programdetails = useContext(ProgramContext);

  console.log(programdetails.data);
  let img11 =
    "https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  let img2 =
    "https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  const [scrollLength, setScrollLength] = useState();
  useEffect(() => {
    setScrollLength(100);
  }, []);

  let [img, setImg] = useState();
  const [pdata, setPdata] = useState(mba);
  const [datas, setDatas] = useState();
  let [sect1image, setSect1image] = useState();
  let [sect2image, setSect2image] = useState();

  let [s3rimg, sets3rimg] = useState();
  let [s3limg, sets3limg] = useState();
  useEffect(() => {
    if (router.query.slugs === "mba") {
      setPdata(mba);
    }
    if (router.query.slugs === "bba") {
      setPdata(bba);
    }
    calldata();
    if (datas !== undefined) {
      setImg(datas.img);
      setSect1image(datas.s1img);
      setSect2image(datas.s2img);
      sets3limg(datas.s3limg);
      sets3rimg(datas.s3rimg);
    }
  }, [router.query.slugs, datas]);
  const [value, setValue] = useState();

  const calldata = async () => {
    if (router.query.slugs == "mba") {
      setDatas(mba);
      setValue(0);
    }
    if (router.query.slugs == "bba") {
      setDatas(bba);
      setValue(1);
    }
    if (router.query.slugs == "bcom") {
      setDatas(bcom);
      setValue(2);
    }
    if (router.query.slugs == "bahonseconomics") {
      setDatas(baHonsEconomics);
      setValue(3);
    }
    if (router.query.slugs == "bahonsenglish") {
      setDatas(baHonsEnglish);
      setValue(4);
    }
    if (router.query.slugs == "bscvisualcomununication") {
      setDatas(bscVisualCommunication);
      setValue(5);
    }
    if (router.query.slugs == "bscanimation") {
      setDatas(bscAnimation);
      setValue(6);
    }
    if (router.query.slugs == "mscvisualcomununication") {
      setDatas(mscVisualCommunication);
      setValue(7);
    }
    if (router.query.slugs == "diplomahotelcateringmanagement") {
      setDatas(diplomaHotelCateringManagement);
      setValue(8);
    }
    if (router.query.slugs == "bschotelcateringmanagement") {
      setDatas(bscHotelCateringManagement);
      setValue(9);
    }
    if (router.query.slugs == "bscfoodservicemanagementappliednutrition") {
      setDatas(bscFoodServiceManagement);
      setValue(10);
    }
    if (router.query.slugs == "mschotelcateringmanagement") {
      setDatas(mscHotelCateringManagement);
      setValue(11);
    }
    if (router.query.slugs == "bscyoga") {
      setDatas(bscYoga);
      setValue(12);
    }
    if (router.query.slugs == "mscyoga") {
      setDatas(mscYoga);
      setValue(13);
    }
    if (router.query.slugs == "diplomayoga") {
      setDatas(diplomaYoga);
      setValue(14);
    }
    if (router.query.slugs == "mscastrology") {
      setDatas(maAstrology);
      setValue(15);
    }
    if (router.query.slugs == "diplomainastrology") {
      setDatas(diplomaAstrology);
      setValue(16);
    }
    if (router.query.slugs == "bawesternclassicalmusic") {
      setDatas(baWesternClassicalMusic);
      setValue(17);
    }
    if (router.query.slugs == "makarnaticmusic") {
      setDatas(maKarnaticMusic);
      setValue(18);
    }
    if (router.query.slugs == "mabharatanatyam") {
      setDatas(maBharatanatyam);
      setValue(19);
    }
  };

  let bgvideo = "/bgmba.mp4";

  const dep = "program";

  return (
    datas !== undefined && (
      <div className="w-full flex items-center justify-center flex-col">
        <Header scrollLength={scrollLength} value={value} department={dep} />
        <div className="w-full h-screen flex items-center justify-center relative ">
          <video
            src={bgvideo}
            autoPlay
            loop
            muted
            className="h-[80vh] w-[100vw] top-0 object-cover absolute"
          ></video>

          <div className="w-[80%]  h-[60vh]  z-[10] relative bottom-10 bg-[#fbe8e8] flex items-center justify-around rounded-lg">
            <div className="w-[50%] h-full flex flex-col p-10 justify-center gap-5">
              <h1 className="w-[90%] font-Comfortaa text-[25px]">{datas.h1}</h1>
              <p className="text-[12px] font-poppins text-gray-500 w-[90%]">
                {datas.p1}
              </p>
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
        <div className="w-[80%] h-screen flex flex-col items-center justify-center gap-0 relative bottom-[20vh]">
          <div className="w-full h-[10%] flex items-center justify-center">
            <h1 className="text-[40px] font-Comfortaa">{datas.s1title}</h1>
          </div>
          <div className="w-full h-[70%] flex items-center justify-center">
            <div className="w-[50%] h-full relative flex items-center justify-center">
              <Image
                loader={() => (sect1image = sect1image)}
                src={sect1image}
                width={0}
                height={0}
                className="w-[110%] absolute left-10 top-20 rounded-lg"
              />
            </div>
            <div className="w-[50%] h-full flex flex-col p-10 pl-20 justify-center gap-5 bg-gray-100">
              <h1 className="text-[25px] font-Comfortaa">{datas.s1h1}</h1>
              <p className="text-[15px] text-gray-500 font-poppins">
                {datas.s1p1}
              </p>
              <h1 className="text-[25px] font-Comfortaa">{datas.s1h2}</h1>
              <p className="text-[15px] text-gray-500 font-poppins">
                {datas.s1p2}
              </p>
              <h1 className="text-[25px] font-Comfortaa">{datas.s1h3}</h1>
              <p className="text-[15px] text-gray-500 font-poppins">
                {datas.s1p3}
              </p>
            </div>
          </div>
        </div>
        <div className="w-[80%] h-[50vh] bg-[#d3f8fc] drop-shadow-lg relative -top-20 rounded-lg flex items-center justify-around">
          <div className="w-[50%] h-full flex flex-col justify-center gap-5 p-10">
            <h1 className="w-[90%] font-Comfortaa text-[35px]">
              {datas.s2title}
            </h1>
            <p className="text-[15px] font-poppins text-gray-500 w-[90%]">
              {datas.s2p1}
            </p>
          </div>
          <div className="w-[50%] h-full">
            <Image
              loader={() => (sect2image = sect2image)}
              src={sect2image}
              width={0}
              height={0}
              className="w-full h-full rounded-r-lg"
            />
          </div>
        </div>

        <div className="w-full min-h-[65vh] flex items-center justify-center gap-5 flex-col">
          <h1 className="text-[40px] font-Comfortaa">Features</h1>
          <div className="w-[100%] min-h-[60vh] flex items-center justify-center flex-wrap gap-10 mb-10">
            <div className="w-[600px] h-[500px] bg-[#ffe7d7] flex flex-col gap-5 p-5">
              <h1 className="text-[20px] font-poppins font-[500] pt-10">
                {datas.s3lh1}
              </h1>
              <p className="text-[12px] w-[80%] text-gray-500">{datas.s3lp1}</p>

              <div className=" relative">
                <Image
                  loader={() => (s3limg = s3limg)}
                  src={s3limg}
                  width={0}
                  height={0}
                  alt=""
                  className="w-[60%] rounded-lg drop-shadow-xl"
                />
              </div>
            </div>
            <div className="w-[600px] h-[500px] bg-[#c4ffff] flex flex-col gap-5 p-5">
              <h1 className="text-[20px] font-poppins font-[500] pt-10">
                {datas.s3rh1}
              </h1>
              <p className="text-[12px] w-[80%] text-gray-500">{datas.s3rp1}</p>

              <div className=" relative">
                <Image
                  loader={() => (s3rimg = s3rimg)}
                  src={s3rimg}
                  width={0}
                  height={0}
                  alt=""
                  className="w-[60%] rounded-lg drop-shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  );
};

export default Page;
