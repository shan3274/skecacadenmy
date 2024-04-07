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
          <h1 className="text-[35px] font-Comfortaa text-center">
            {datas?.title}
          </h1>
          <p className="text-[12px] font-poppins  text-center text-gray-500">
            {datas?.paragraph1}
          </p>
          <Link
            href="#"
            className="w-[200px] h-[40px] text-white bg-blue-600 flex items-center justify-center rounded-full duration-300 hover:scale-105 gap-2"
          >
            Next <FaArrowRight />
          </Link>
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
            <Link href="" className="flex items-center gap-2">
              Read more{" "}
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M21 12C21 12.5523 20.5523 13 20 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H20C20.5523 11 21 11.4477 21 12Z"
                  fill="black"
                />
                <path
                  d="M18.9722 12C18.8789 11.8452 18.6833 11.5671 18.4695 11.3251C18.0437 10.8432 17.457 10.2928 16.8445 9.76105C16.237 9.23357 15.6265 8.74365 15.1661 8.38437C14.9365 8.20515 14.5402 7.90576 14.407 7.80521C13.9624 7.47768 13.8674 6.85173 14.1949 6.40706C14.5224 5.96236 15.1484 5.86736 15.5931 6.19487L15.5968 6.19767C15.7412 6.30672 16.1598 6.62291 16.3966 6.80767C16.8737 7.18002 17.5132 7.69303 18.1557 8.25084C18.7932 8.80434 19.4565 9.4216 19.9682 10.0008C20.2231 10.2892 20.4615 10.5918 20.6417 10.8906C20.8053 11.162 21.0001 11.5568 21.0001 12C21.0001 12.4431 20.8053 12.838 20.6417 13.1094C20.4615 13.4082 20.2231 13.7108 19.9682 13.9992C19.4565 14.5784 18.7932 15.1957 18.1557 15.7492C17.5132 16.307 16.8737 16.82 16.3966 17.1923C16.1598 17.3771 15.7415 17.6931 15.5971 17.8021L15.5931 17.8051C15.1484 18.1326 14.5224 18.0376 14.1949 17.5929C13.8674 17.1483 13.9624 16.5223 14.407 16.1948C14.5402 16.0942 14.9365 15.7948 15.1661 15.6156C15.6265 15.2564 16.237 14.7664 16.8445 14.2389C17.457 13.7072 18.0437 13.1568 18.4695 12.6749C18.6833 12.4329 18.8789 12.1548 18.9722 12Z"
                  fill="black"
                />
              </svg>
            </Link>
            <div className=" relative">
              <Image
                loader={() => (img5 = img5)}
                src={img5}
                width={0}
                height={0}
                alt=""
                className="w-[60%] rounded-lg drop-shadow-xl"
              />
              <div className="absolute w-[200px] h-[200px] bg-gray-100 drop-shadow-xl -top-10 right-[100px] flex flex-col p-5 gap-3">
                <h1 className="text-[15px] font-poppins">Inside overview</h1>
                <div className="w-[160px] h-[30px] flex p-2 justify-between text-[10px] bg-white">
                  <p>Compaings</p>
                  <p className="bg-green-200 px-2 rounded-md">1552</p>
                </div>
                <div className="w-[160px] h-[30px] flex p-2 justify-between text-[10px] bg-white">
                  <p>Compaings</p>
                  <p className="bg-green-200 px-2 rounded-md">1552</p>
                </div>
                <div className="w-[160px] h-[30px] flex p-2 justify-between text-[10px] bg-white">
                  <p>Compaings</p>
                  <p className="bg-green-200 px-2 rounded-md">1552</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[600px] h-[500px] bg-[#c4ffff] flex flex-col gap-5 p-5">
            <h1 className="text-[20px] font-poppins font-[500] pt-10">
              {datas?.section3heading2}
            </h1>
            <p className="text-[12px] w-[80%] text-gray-500">
              {datas?.section3paragrap2}
            </p>
            <Link href="" className="flex items-center gap-2">
              Read more{" "}
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M21 12C21 12.5523 20.5523 13 20 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H20C20.5523 11 21 11.4477 21 12Z"
                  fill="black"
                />
                <path
                  d="M18.9722 12C18.8789 11.8452 18.6833 11.5671 18.4695 11.3251C18.0437 10.8432 17.457 10.2928 16.8445 9.76105C16.237 9.23357 15.6265 8.74365 15.1661 8.38437C14.9365 8.20515 14.5402 7.90576 14.407 7.80521C13.9624 7.47768 13.8674 6.85173 14.1949 6.40706C14.5224 5.96236 15.1484 5.86736 15.5931 6.19487L15.5968 6.19767C15.7412 6.30672 16.1598 6.62291 16.3966 6.80767C16.8737 7.18002 17.5132 7.69303 18.1557 8.25084C18.7932 8.80434 19.4565 9.4216 19.9682 10.0008C20.2231 10.2892 20.4615 10.5918 20.6417 10.8906C20.8053 11.162 21.0001 11.5568 21.0001 12C21.0001 12.4431 20.8053 12.838 20.6417 13.1094C20.4615 13.4082 20.2231 13.7108 19.9682 13.9992C19.4565 14.5784 18.7932 15.1957 18.1557 15.7492C17.5132 16.307 16.8737 16.82 16.3966 17.1923C16.1598 17.3771 15.7415 17.6931 15.5971 17.8021L15.5931 17.8051C15.1484 18.1326 14.5224 18.0376 14.1949 17.5929C13.8674 17.1483 13.9624 16.5223 14.407 16.1948C14.5402 16.0942 14.9365 15.7948 15.1661 15.6156C15.6265 15.2564 16.237 14.7664 16.8445 14.2389C17.457 13.7072 18.0437 13.1568 18.4695 12.6749C18.6833 12.4329 18.8789 12.1548 18.9722 12Z"
                  fill="black"
                />
              </svg>
            </Link>
            <div className=" relative">
              <Image
                loader={() => (img6 = img6)}
                src={img6}
                width={0}
                height={0}
                alt=""
                className="w-[60%] rounded-lg drop-shadow-xl"
              />
              <div className="absolute w-[200px] h-[200px] bg-gray-100 drop-shadow-xl -top-10 right-[100px] flex flex-col p-5 gap-3">
                <h1 className="text-[15px] font-poppins">Inside overview</h1>
                <div className="w-[160px] h-[30px] flex p-2 justify-between text-[10px] bg-white">
                  <p>Compaings</p>
                  <p className="bg-green-200 px-2 rounded-md">1552</p>
                </div>
                <div className="w-[160px] h-[30px] flex p-2 justify-between text-[10px] bg-white">
                  <p>Compaings</p>
                  <p className="bg-green-200 px-2 rounded-md">1552</p>
                </div>
                <div className="w-[160px] h-[30px] flex p-2 justify-between text-[10px] bg-white">
                  <p>Compaings</p>
                  <p className="bg-green-200 px-2 rounded-md">1552</p>
                </div>
              </div>
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


