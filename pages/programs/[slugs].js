import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ProgramContext } from "@/context/Programcontext";
import img1 from "@/public/img1.jpeg";
import img2 from "@/public/img2.jpeg";
import { bba, mba } from "@/utils/data";
import { db } from "@/utils/firebase";
import { collection, getDocs, query } from "firebase/firestore";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState, useContext } from "react";

const Page = () => {
  const router = useRouter();
  const [scrollLength, setScrollLength] = useState();

  const programdetails = useContext(ProgramContext);

  console.log(programdetails.data);
  let img11 =
    "https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  let img2 =
    "https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

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
      setImg(datas[0]?.img);
      setSect1image(datas[0]?.s1img);
      setSect2image(datas[0]?.s2img);
      sets3limg(datas[0]?.s3limg);
      sets3rimg(datas[0]?.s3rimg);
    }
  }, [router.query.slugs, datas]);

  const calldata = async () => {
    try {
      await getDocs(collection(db, router.query.slugs)).then((response) => {
        setDatas(
          response.docs.map((res) => {
            return { ...res.data(), id: res.id };
          })
        );
      });
    } catch (error) {}
  };

  let bgvideo = "/bgmba.mp4";

  return (
    datas !== undefined && (
      <div className="w-full flex items-center justify-center flex-col">
        <Header scrollLength={scrollLength} />
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
              <h1 className="w-[90%] font-Comfortaa text-[25px]">
                {datas[0]?.h1}
              </h1>
              <p className="text-[12px] font-poppins text-gray-500 w-[90%]">
                {datas[0]?.p1}
              </p>
              <button className="w-[150px] h-[40px] font-poppins border border-black rounded-full text-[15px]">
                Know more
              </button>
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
            <h1 className="text-[40px] font-Comfortaa">{datas[0]?.s1title}</h1>
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
              <h1 className="text-[25px] font-Comfortaa">{datas[0]?.s1h1}</h1>
              <p className="text-[15px] text-gray-500 font-poppins">
                {datas[0]?.s1p1}
              </p>
              <h1 className="text-[25px] font-Comfortaa">{datas[0]?.s1h2}</h1>
              <p className="text-[15px] text-gray-500 font-poppins">
                {datas[0]?.s1p2}
              </p>
              <h1 className="text-[25px] font-Comfortaa">{datas[0]?.s1h3}</h1>
              <p className="text-[15px] text-gray-500 font-poppins">
                {datas[0]?.s1p3}
              </p>
            </div>
          </div>
        </div>
        <div className="w-[80%] h-[50vh] bg-[#d3f8fc] drop-shadow-lg relative -top-20 rounded-lg flex items-center justify-around">
          <div className="w-[50%] h-full flex flex-col justify-center gap-5 p-10">
            <h1 className="w-[90%] font-Comfortaa text-[35px]">
              {datas[0]?.s2title}
            </h1>
            <p className="text-[15px] font-poppins text-gray-500 w-[90%]">
              {datas[0]?.s2p1}
            </p>
            <button className="w-[100px] h-[30px] font-poppins border border-black rounded-full text-[10px]">
              Know more
            </button>
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
          <h1 className="text-[40px] font-titlefont">Features</h1>
          <div className="w-[100%] min-h-[60vh] flex items-center justify-center flex-wrap gap-10 mb-10">
            <div className="w-[600px] h-[500px] bg-[#ffe7d7] flex flex-col gap-5 p-5">
              <h1 className="text-[20px] font-poppins font-[500] pt-10">
                {datas[0]?.s3lh1}
              </h1>
              <p className="text-[12px] w-[80%] text-gray-500">
                {datas[0]?.s3lp1}
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
                  loader={() => (s3limg = s3limg)}
                  src={s3limg}
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
                {datas[0]?.s3rh1}
              </h1>
              <p className="text-[12px] w-[80%] text-gray-500">
                {datas[0]?.s3rp1}
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
                  loader={() => (s3rimg = s3rimg)}
                  src={s3rimg}
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
        <Footer />
      </div>
    )
  );
};

export default Page;
