import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { FaArrowRight, FaClock } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import {
  muppadiAcademy,
  sreeKrishnaArtsAndScience,
  sreeKrishnaCivilServices,
  sreeKrishnaDistanceEducation,
  sreeKrishnaIAS_IPSAcademy,
  sreeKrishnaInternationalCBSESchool,
  sreeKrishnaInternationalICSchool,
  sreeKrishnaNEET_JEE_Apache,
} from "@/utils/data";

const Page = () => {
  const router = useRouter();

  const [datas, setDatas] = useState();
  const [value, setValue] = useState();

  useEffect(() => {
    if (router.query.slug === "ias-ips") {
      setDatas(sreeKrishnaIAS_IPSAcademy);
      setValue(0);
    }
    if (router.query.slug === "artandscience") {
      setDatas(sreeKrishnaArtsAndScience);
      setValue(1);
    }
    if (router.query.slug === "cbseschool") {
      setDatas(sreeKrishnaInternationalCBSESchool);
      setValue(2);
    }
    if (router.query.slug === "icseschool") {
      setDatas(sreeKrishnaInternationalICSchool);
      setValue(3);
    }
    if (router.query.slug === "armytraining") {
      setDatas(muppadiAcademy);
      setValue(4);
    }
    if (router.query.slug === "civilservice") {
      setDatas(sreeKrishnaCivilServices);
      setValue(4);
    }
    if (router.query.slug === "jee-apache") {
      setDatas(sreeKrishnaNEET_JEE_Apache);
      setValue(5);
    }

    if (router.query.slug === "distanceEducation") {
      setDatas(sreeKrishnaDistanceEducation);
      setValue(6);
    }
  }, [router.query.slug]);

  const [scrollLength, setScrollLength] = useState(0);
  let img1 = datas?.img3;
  let img2 = datas?.img4;
  let img3 = datas?.img1;
  let img4 = datas?.img2;
  let img5 = datas?.img5;
  let img6 = datas?.img6;

  const data = [
    {
      h1: datas?.section2heading1,
      p1: datas?.section2paragraph1,
      button: "Student Affairs",
      img: datas?.img7,
    },
    {
      h1: datas?.section2heading2,
      p1: datas?.section2paragraph2,
      button: "Residential & Dining Enterprises",
      img: datas?.img8,
    },
    {
      h1: datas?.section2heading3,
      p1: datas?.section2paragraph3,
      button: "Graduate Life Office",
      img: datas?.img9,
    },
  ];

  const data2 = [
    {
      img: datas?.img10,
      title: datas?.section4heading1,
      text: datas?.section4paragraph1,
    },
    {
      img: datas?.img11,
      title: datas?.section4heading2,
      text: datas?.section4paragraph2,
    },
    {
      img: datas?.img12,
      title: datas?.section4heading3,
      text: datas?.section4paragraph3,
    },
  ];

  useEffect(() => {
    setScrollLength(100);
  }, []);

  const dep = "about";
  return (
    <div>
      <Header scrollLength={scrollLength} value={value} department={dep} />
      {/*section*/}
      <div className="w-full min-h-[80vh] relative top-[5rem] flex items-center justify-around flex-wrap px-20">
        <div className="w-[300px] relative top-10">
          <Image
            loader={() => (img3 = img3)}
            src={img3}
            width={0}
            height={0}
            alt="img1"
            className="w-[90%] aspect-[4/6] rounded-[100px] drop-shadow-xl"
          />
          <div className="absolute w-[90%] aspect-[4/6] z-[-1] border rounded-[100px] top-5 border-yellow-500"></div>
        </div>
        <div className="w-[400px] flex flex-col items-center justify-center h-[80vh] gap-5">
          <h1 className="lg:text-[35px] text-[20px] font-Comfortaa text-center">
            {datas?.title}
          </h1>
          <p className="text-[12px] font-poppins  text-center text-gray-500">
            {datas?.paragraph1}
          </p>
          {datas?.nextPath && (
            <Link
              href={datas?.nextPath}
              className="w-[200px] h-[40px] text-white bg-blue-600 flex items-center justify-center rounded-full duration-300 hover:scale-105 gap-2"
            >
              Next <FaArrowRight />
            </Link>
          )}
        </div>
        <div className="w-[300px] relative bottom-10">
          <Image
            loader={() => (img4 = img4)}
            src={img4}
            width={0}
            height={0}
            alt="img1"
            className="w-[90%] aspect-[4/6] rounded-[100px] drop-shadow-xl "
          />
          <div className="absolute w-[90%] aspect-[4/6] z-[-1] border rounded-[100px] bottom-5 border-yellow-500"></div>
        </div>
      </div>
      {/*section1*/}
      <div className="w-full min-h-[70vh] flex items-center justify-center relative top-5">
        <div className="xl:w-[90%] w-[100%] flex items-start justify-around">
          <div className="w-[90%] h-[60vh] flex items-center justify-center gap-10 flex-wrap">
            <div className="w-[300px] overflow-hidden rounded-[50px] relative drop-shadow-xl">
              {" "}
              <Image
                loader={() => (img1 = img1)}
                src={img1}
                width={0}
                height={0}
                alt=""
                className="w-full drop-shadow-xl"
              />
              <div className="absolute w-full aspect-[4/6] bg-black/10 top-0 flex flex-col justify-end pb-10 text-white pl-2">
                <p className="text-[10px] font-poppins w-[90%] text-justify">
                  {datas?.section1paragraph1}
                </p>
              </div>
            </div>
            <div className="w-[700px] h-[80%] flex items-center justify-center gap-10">
              <div className="w-[50%] overflow-hidden  min-h-full py-5 border bg-white rounded-[30px] flex items-center justify-center flex-col gap-5 drop-shadow-xl">
                <Image
                  loader={() => (img2 = img2)}
                  src={img2}
                  width={0}
                  height={0}
                  className="w-[90%] rounded-md aspect-[4/3]"
                />
                <div className="w-[90%] flex justify-between text-[10px] font-poppins text-gray-500 font-[200]">
                  <p>some text</p>
                  <p>20-05-2000</p>
                </div>
                <h1 className="w-[90%] font-Comfortaa">
                  {datas?.section1heading1}
                </h1>
                <p className="text-[10px] w-[90%] font-poppins text-gray-500 text-justify">
                  {datas?.section1paragraph2}
                </p>
              </div>
              <div className="w-[50%]  h-full flex flex-col items-center justify-center gap-5">
                <div className="w-full overflow-hidden py-5 min-h-[50%] flex items-center justify-center flex-col gap-5 border bg-white drop-shadow-xl rounded-[30px]">
                  <div className="w-[90%] flex justify-between text-[10px] font-poppins text-gray-500 font-[200]">
                    <p>some text</p>
                    <p>20-05-2000</p>
                  </div>
                  <h1 className="w-[90%] font-Comfortaa">
                    {datas?.section1heading2}
                  </h1>
                  <p className="text-[10px] w-[90%] font-poppins text-gray-500 text-justify">
                    {datas?.section1paragraph2}
                  </p>
                </div>
                <div className="w-full py-5 min-h-[50%] flex items-center justify-center flex-col gap-5 border bg-white drop-shadow-xl rounded-[30px]">
                  <div className="w-[90%] flex justify-between text-[10px] font-poppins text-gray-500 font-[200]">
                    <p>some text</p>
                    <p>20-05-2000</p>
                  </div>
                  <h1 className="w-[90%] font-Comfortaa">
                    {datas?.section1heading3}
                  </h1>
                  <p className="text-[10px] w-[90%] font-poppins text-gray-500 text-justify">
                    {datas?.section1paragraph3}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*sectionumber*/}
      <div className="w-full h-[30vh] flex items-center justify-evenly flex-wrap relative  after:absolute after:w-[80%] after:h-[.5px] after:bg-gray-600 after:bottom-10 before:absolute before:w-[80%] before:h-[.5px] before:bg-gray-600 before:top-10">
        <div className=" h-full flex flex-col items-center justify-center gap-2">
          <p className="text-[30px] font-poppins text-gray-500 text-center">
            {datas?.title}
          </p>
        </div>
      </div>
      {/*section2*/}
      <div className="w-full h-[90vh] flex flex-col items-center justify-center gap-3">
        <div className="w-[80%] h-[10%] flex items-center justify-center relative top-10">
          <h1 className="text-[40px] font-Comfortaa">{datas?.section2title}</h1>
        </div>
        <div className="w-[80%] h-[70%] flex items-center justify-around gap-5 flex-wrap">
          {data.map((item) => {
            return (
              <div className="w-[360px] h-[60%] flex flex-col items-center justify-center gap-10 ">
                <Image
                  loader={() => (item.img = item.img)}
                  src={item.img}
                  width={0}
                  height={0}
                  className="w-[100%]"
                />
                <div className="w-full flex flex-col  gap-5">
                  <h1 className="text-[25px] font-Comfortaa">{item.h1}</h1>
                  <p className="text-[12px] w-[90%] font-poppins text-gray-500">
                    {item.p1}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/*section3*/}
      <div className="w-full min-h-[65vh] flex items-center justify-center gap-5 flex-col">
        <h1 className="text-[40px] font-Comfortaa">Features</h1>
        <div className="w-[100%] min-h-[60vh] flex items-center justify-center flex-wrap gap-10 mb-10">
          <div className="w-[600px] h-[500px] bg-[#ffe7d7] flex flex-col gap-5 p-5">
            <h1 className="text-[20px] font-poppins font-[500] pt-10">
              {datas?.section3heading1}
            </h1>
            <p className="text-[12px] w-[80%] text-gray-500">
              {datas?.section3paragrap1}
            </p>

            <div className=" relative">
              <Image
                loader={() => (img5 = img5)}
                src={img5}
                width={0}
                height={0}
                alt=""
                className="w-[60%] rounded-lg drop-shadow-xl"
              />
            </div>
          </div>
          <div className="w-[600px] h-[500px] bg-[#c4ffff] flex flex-col gap-5 p-5">
            <h1 className="text-[20px] font-poppins font-[500] pt-10">
              {datas?.section3heading2}
            </h1>
            <p className="text-[12px] w-[80%] text-gray-500">
              {datas?.section3paragrap2}
            </p>

            <div className=" relative">
              <Image
                loader={() => (img6 = img6)}
                src={img6}
                width={0}
                height={0}
                alt=""
                className="w-[60%] rounded-lg drop-shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
      {/*section4*/}
      <div className="w-full min-h-[50vh] flex flex-col items-center justify-center gap-5">
        <div className="w-[70%] min-h-[10vh] flex items-center justify-between">
          <h1 className="text-[35px] w-full text-center font-poppins">
            Facilities
          </h1>
        </div>
        <div className="w-[80%] min-h-[40vh] gap-y-10 flex items-center justify-around flex-wrap mb-10">
          {data2.map((item) => {
            return (
              <div className="w-[300px] h-[400px] bg-gray-100 rounded-xl flex pl-5 justify-center flex-col gap-5 duration-300 hover:scale-105">
                <Image
                  loader={() => (item.img = item.img)}
                  src={item.img}
                  width={0}
                  height={0}
                  className="w-[90%] rounded-md"
                />
                <h1 className="text-[20px] font-poppins">{item.title}</h1>
                <p className="text-[12px] w-[90%] text-gray-500 font-[200] font-poppins">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
