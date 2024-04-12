import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

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

const Programs = () => {
  const router = useRouter();
  const [program, seProgram] = useState([
    { name: "MBA", pathName: "#", database: "mba" },
    { name: "BBA", pathName: "#", database: "bba" },
    { name: "B.Com", pathName: "#", database: "bcom" },
    { name: "B.Sc Yoga", pathName: "#", database: "bscyoga" },
    { name: "M.Sc Yoga", pathName: "#", database: "mscyoga" },
    { name: "Diploma Yoga", pathName: "#", database: "diplomayoga" },
    { name: "M.A Astrology", pathName: "#", database: "mscastrology" },
    { name: "B.Sc Animation", pathName: "#", database: "bscanimation" },
    { name: "B.A (Hons) English", pathName: "#", database: "bahonsenglish" },
    { name: "M.A Karnatic Music", pathName: "#", database: "makarnaticmusic" },
    { name: "M.A Bharatanatyam", pathName: "#", database: "mabharatanatyam" },
    {
      name: "Diploma in Astrology",
      pathName: "#",
      database: "diplomainastrology",
    },
    {
      name: "B.A (Hons) Economics",
      pathName: "#",
      database: "bahonseconomics",
    },
    {
      name: "B.Sc Visual Comumunication",
      pathName: "#",
      database: "bscvisualcomununication",
    },
    {
      name: "M.Sc Visual Comumunication",
      pathName: "#",
      database: "mscvisualcomununication",
    },
    {
      name: "B.A Western Classical Music",
      pathName: "#",
      database: "bawesternclassicalmusic",
    },
    {
      name: "M.Sc Hotel & Catering Management",
      pathName: "#",
      database: "mschotelcateringmanagement",
    },
    {
      name: "B.Sc Hotel & Catering Management",
      pathName: "#",
      database: "bschotelcateringmanagement",
    },
    {
      name: "Diploma in Hotel & Catering Management",
      pathName: "#",
      database: "diplomahotelcateringmanagement",
    },
    {
      name: "B.Sc Food Service Management & Applied Nutrition",
      pathName: "#",
      database: "bscfoodservicemanagementappliednutrition",
    },
  ]);

  const [data, setData] = useState();
  let [img, setImg] = useState();
  const [url, setUrl] = useState("mba");

  const calldata = async () => {
    if (url == "mba") {
      setData(mba);
    }
    if (url == "bba") {
      setData(bba);
    }
    if (url == "bcom") {
      setData(bcom);
    }
    if (url == "bscyoga") {
      setData(bscYoga);
    }
    if (url == "bahonsenglish") {
      setData(baHonsEnglish);
    }
    if (url == "mscyoga") {
      setData(mscYoga);
    }
    if (url == "diplomayoga") {
      setData(diplomaYoga);
    }
    if (url == "mscastrology") {
      setData(maAstrology);
    }
    if (url == "bscanimation") {
      setData(bscAnimation);
    }
    if (url == "makarnaticmusic") {
      setData(maKarnaticMusic);
    }
    if (url == "mabharatanatyam") {
      setData(maBharatanatyam);
    }
    if (url == "diplomainastrology") {
      setData(diplomaAstrology);
    }
    if (url == "bahonseconomics") {
      setData(baHonsEconomics);
    }
    if (url == "bscvisualcomununication") {
      setData(bscVisualCommunication);
    }
    if (url == "mscvisualcomununication") {
      setData(mscVisualCommunication);
    }
    if (url == "bawesternclassicalmusic") {
      setData(baWesternClassicalMusic);
    }
    if (url == "mschotelcateringmanagement") {
      setData(mscHotelCateringManagement);
    }
    if (url == "bschotelcateringmanagement") {
      setData(bscHotelCateringManagement);
    }
    if (url == "diplomahotelcateringmanagement") {
      setData(diplomaHotelCateringManagement);
    }
    if (url == "bscfoodservicemanagementappliednutrition") {
      setData(bscFoodServiceManagement);
    }
  };

  const [activebtn, setActivebtn] = useState(0);

  console.log(activebtn);

  useEffect(() => {
    calldata();
    if (data !== undefined) {
      setImg(data.img);
    }
  }, [url, data]);

  console.log(data);
  return (
    data !== undefined && (
      <div className="w-full min-h-[80vh] flex items-center justify-center flex-col relative">
        <h1 className="relative top-20 font-Comfortaa text-[40px] after:absolute after:w-[50%] after:left-[25%] after:h-[1px] after:bg-blue-500 after:top-[120%]">
          Programs
        </h1>
        <div className="w-[90%] min-h-[90vh] flex items-center justify-center flex-wrap gap-2">
          <Image
            loader={() => (img = img)}
            src={img}
            width={0}
            height={0}
            className="w-[600px] aspect-[4/3] rounded-lg"
          />
          <div className="w-[600px] h-[60vh] flex flex-col p-10 justify-center gap-5 relative">
            <h1 className="text-[25px] font-Comfortaa">{data.h1}</h1>

            <p className="text-[13px] font-poppins text-gray-500">{data.p1}</p>
            <p className="text-[13px] font-poppins text-gray-500">{data.p2}</p>
            <svg
              width="178"
              height="56"
              viewBox="0 0 178 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="cursor-pointer"
              onClick={() => router.push(data.pathName)}
            >
              <rect
                x="0.5"
                y="0.5"
                width="177"
                height="55"
                rx="27.5"
                fill="white"
              />
              <rect
                x="0.5"
                y="0.5"
                width="177"
                height="55"
                rx="27.5"
                stroke="black"
              />
              <path
                d="M29.4545 33H26.0043V22.8182H29.5241C30.535 22.8182 31.4034 23.022 32.1293 23.4297C32.8584 23.834 33.4186 24.4157 33.8097 25.1747C34.2008 25.9337 34.3963 26.8419 34.3963 27.8991C34.3963 28.9598 34.1991 29.8712 33.8047 30.6335C33.4136 31.3958 32.8485 31.9808 32.1094 32.3885C31.3736 32.7962 30.4886 33 29.4545 33ZM27.8487 31.4041H29.3651C30.0743 31.4041 30.666 31.2749 31.1399 31.0163C31.6139 30.7545 31.9702 30.3651 32.2088 29.848C32.4474 29.3277 32.5668 28.678 32.5668 27.8991C32.5668 27.1203 32.4474 26.474 32.2088 25.9602C31.9702 25.4432 31.6172 25.0571 31.1499 24.8018C30.6858 24.5433 30.1091 24.4141 29.4197 24.4141H27.8487V31.4041ZM36.0692 33V25.3636H37.869V33H36.0692ZM36.9741 24.2798C36.689 24.2798 36.4438 24.1854 36.2383 23.9964C36.0328 23.8042 35.93 23.5739 35.93 23.3054C35.93 23.0336 36.0328 22.8033 36.2383 22.6143C36.4438 22.4221 36.689 22.326 36.9741 22.326C37.2624 22.326 37.5077 22.4221 37.7099 22.6143C37.9154 22.8033 38.0181 23.0336 38.0181 23.3054C38.0181 23.5739 37.9154 23.8042 37.7099 23.9964C37.5077 24.1854 37.2624 24.2798 36.9741 24.2798ZM45.7551 27.3821L44.1145 27.5611C44.0681 27.3954 43.9869 27.2396 43.8709 27.0938C43.7582 26.9479 43.6058 26.8303 43.4135 26.7408C43.2213 26.6513 42.986 26.6065 42.7076 26.6065C42.333 26.6065 42.0182 26.6877 41.763 26.8501C41.5111 27.0125 41.3868 27.223 41.3901 27.4815C41.3868 27.7036 41.468 27.8842 41.6337 28.0234C41.8027 28.1626 42.0811 28.277 42.4689 28.3665L43.7715 28.6449C44.494 28.8007 45.031 29.0476 45.3823 29.3857C45.7369 29.7237 45.9159 30.1662 45.9192 30.7131C45.9159 31.1937 45.775 31.6179 45.4966 31.9858C45.2215 32.3504 44.8387 32.6354 44.3482 32.8409C43.8577 33.0464 43.2942 33.1491 42.6578 33.1491C41.7232 33.1491 40.9708 32.9536 40.4007 32.5625C39.8307 32.1681 39.4909 31.6196 39.3816 30.9169L41.1365 30.7479C41.2161 31.0926 41.3851 31.3527 41.6436 31.5284C41.9022 31.7041 42.2386 31.7919 42.6529 31.7919C43.0804 31.7919 43.4235 31.7041 43.682 31.5284C43.9438 31.3527 44.0748 31.1357 44.0748 30.8771C44.0748 30.6584 43.9902 30.4777 43.8212 30.3352C43.6555 30.1927 43.397 30.0833 43.0456 30.0071L41.7431 29.7337C41.0106 29.5812 40.4687 29.3243 40.1174 28.9631C39.766 28.5985 39.592 28.1378 39.5953 27.581C39.592 27.1103 39.7196 26.7027 39.9782 26.358C40.24 26.0099 40.6029 25.7415 41.0669 25.5526C41.5343 25.3603 42.0729 25.2642 42.6827 25.2642C43.5776 25.2642 44.2819 25.4548 44.7956 25.8359C45.3127 26.2171 45.6325 26.7325 45.7551 27.3821ZM50.7342 33.1491C49.9719 33.1491 49.3173 32.9818 48.7704 32.647C48.2269 32.3123 47.8076 31.8499 47.5126 31.2599C47.2209 30.6667 47.0751 29.9839 47.0751 29.2116C47.0751 28.4361 47.2243 27.7517 47.5225 27.1584C47.8208 26.5618 48.2418 26.0978 48.7853 25.7663C49.3322 25.4316 49.9785 25.2642 50.7243 25.2642C51.344 25.2642 51.8926 25.3786 52.3699 25.6072C52.8504 25.8326 53.2333 26.1525 53.5183 26.5668C53.8033 26.9777 53.9657 27.4583 54.0055 28.0085H52.2853C52.2157 27.6406 52.05 27.334 51.7882 27.0888C51.5297 26.8402 51.1833 26.7159 50.7491 26.7159C50.3812 26.7159 50.0581 26.8153 49.7797 27.0142C49.5012 27.2098 49.2842 27.4915 49.1284 27.8594C48.9759 28.2273 48.8997 28.6681 48.8997 29.1818C48.8997 29.7022 48.9759 30.1496 49.1284 30.5241C49.2808 30.8954 49.4946 31.1821 49.7697 31.3842C50.0481 31.5831 50.3746 31.6825 50.7491 31.6825C51.0143 31.6825 51.2512 31.6328 51.46 31.5334C51.6722 31.4306 51.8495 31.2831 51.992 31.0909C52.1345 30.8987 52.2323 30.665 52.2853 30.3899H54.0055C53.9624 30.9302 53.8033 31.4091 53.5282 31.8267C53.2531 32.241 52.8786 32.5658 52.4047 32.8011C51.9307 33.0331 51.3739 33.1491 50.7342 33.1491ZM58.8143 33.1491C58.0685 33.1491 57.4222 32.9851 56.8754 32.657C56.3285 32.3288 55.9042 31.8698 55.6026 31.2798C55.3043 30.6899 55.1552 30.0005 55.1552 29.2116C55.1552 28.4228 55.3043 27.7318 55.6026 27.1385C55.9042 26.5452 56.3285 26.0845 56.8754 25.7564C57.4222 25.4283 58.0685 25.2642 58.8143 25.2642C59.56 25.2642 60.2063 25.4283 60.7532 25.7564C61.3001 26.0845 61.7227 26.5452 62.021 27.1385C62.3226 27.7318 62.4734 28.4228 62.4734 29.2116C62.4734 30.0005 62.3226 30.6899 62.021 31.2798C61.7227 31.8698 61.3001 32.3288 60.7532 32.657C60.2063 32.9851 59.56 33.1491 58.8143 33.1491ZM58.8242 31.7074C59.2286 31.7074 59.5666 31.5964 59.8384 31.3743C60.1102 31.1489 60.3124 30.8473 60.445 30.4695C60.5808 30.0916 60.6488 29.6707 60.6488 29.2067C60.6488 28.7393 60.5808 28.3168 60.445 27.9389C60.3124 27.5578 60.1102 27.2545 59.8384 27.0291C59.5666 26.8037 59.2286 26.6911 58.8242 26.6911C58.4099 26.6911 58.0652 26.8037 57.7901 27.0291C57.5183 27.2545 57.3145 27.5578 57.1786 27.9389C57.046 28.3168 56.9798 28.7393 56.9798 29.2067C56.9798 29.6707 57.046 30.0916 57.1786 30.4695C57.3145 30.8473 57.5183 31.1489 57.7901 31.3743C58.0652 31.5964 58.4099 31.7074 58.8242 31.7074ZM70.5621 25.3636L67.8427 33H65.854L63.1346 25.3636H65.0536L66.8086 31.0362H66.8881L68.6481 25.3636H70.5621ZM74.9284 33.1491C74.1628 33.1491 73.5016 32.9901 72.9448 32.6719C72.3913 32.3504 71.9654 31.8963 71.6671 31.3097C71.3688 30.7197 71.2196 30.0253 71.2196 29.2266C71.2196 28.4411 71.3688 27.7517 71.6671 27.1584C71.9687 26.5618 72.3896 26.0978 72.9299 25.7663C73.4701 25.4316 74.1048 25.2642 74.834 25.2642C75.3046 25.2642 75.7488 25.3404 76.1664 25.4929C76.5873 25.642 76.9585 25.8741 77.28 26.1889C77.6048 26.5038 77.86 26.9048 78.0456 27.392C78.2312 27.8759 78.324 28.4527 78.324 29.1222V29.674H72.0648V28.4609H76.5989C76.5956 28.1162 76.521 27.8097 76.3752 27.5412C76.2293 27.2694 76.0255 27.0556 75.7637 26.8999C75.5051 26.7441 75.2035 26.6662 74.8588 26.6662C74.4909 26.6662 74.1678 26.7557 73.8894 26.9347C73.611 27.1103 73.3939 27.3423 73.2381 27.6307C73.0856 27.9157 73.0078 28.2289 73.0044 28.5703V29.6293C73.0044 30.0734 73.0856 30.4545 73.248 30.7727C73.4105 31.0876 73.6375 31.3295 73.9292 31.4986C74.2208 31.6643 74.5622 31.7472 74.9533 31.7472C75.2151 31.7472 75.4521 31.7107 75.6642 31.6378C75.8764 31.5616 76.0603 31.4505 76.2161 31.3047C76.3719 31.1589 76.4895 30.9782 76.5691 30.7628L78.2495 30.9517C78.1434 31.3958 77.9412 31.7836 77.6429 32.1151C77.348 32.4432 76.9701 32.6984 76.5094 32.8807C76.0487 33.0597 75.5217 33.1491 74.9284 33.1491ZM79.8466 33V25.3636H81.5916V26.6364H81.6712C81.8104 26.1955 82.049 25.8558 82.3871 25.6172C82.7285 25.3752 83.1179 25.2543 83.5554 25.2543C83.6548 25.2543 83.7659 25.2592 83.8885 25.2692C84.0144 25.2758 84.1188 25.2874 84.2017 25.304V26.9595C84.1255 26.933 84.0045 26.9098 83.8388 26.8899C83.6764 26.8667 83.5189 26.8551 83.3665 26.8551C83.0384 26.8551 82.7434 26.9264 82.4815 27.0689C82.223 27.2081 82.0192 27.402 81.87 27.6506C81.7209 27.8991 81.6463 28.1858 81.6463 28.5107V33H79.8466ZM97.3168 22.8182V33H95.6761L90.8786 26.0646H90.794V33H88.9496V22.8182H90.6001L95.3928 29.7585H95.4822V22.8182H97.3168ZM102.578 33.1491C101.832 33.1491 101.186 32.9851 100.639 32.657C100.092 32.3288 99.6679 31.8698 99.3663 31.2798C99.068 30.6899 98.9189 30.0005 98.9189 29.2116C98.9189 28.4228 99.068 27.7318 99.3663 27.1385C99.6679 26.5452 100.092 26.0845 100.639 25.7564C101.186 25.4283 101.832 25.2642 102.578 25.2642C103.324 25.2642 103.97 25.4283 104.517 25.7564C105.064 26.0845 105.486 26.5452 105.785 27.1385C106.086 27.7318 106.237 28.4228 106.237 29.2116C106.237 30.0005 106.086 30.6899 105.785 31.2798C105.486 31.8698 105.064 32.3288 104.517 32.657C103.97 32.9851 103.324 33.1491 102.578 33.1491ZM102.588 31.7074C102.992 31.7074 103.33 31.5964 103.602 31.3743C103.874 31.1489 104.076 30.8473 104.209 30.4695C104.345 30.0916 104.412 29.6707 104.412 29.2067C104.412 28.7393 104.345 28.3168 104.209 27.9389C104.076 27.5578 103.874 27.2545 103.602 27.0291C103.33 26.8037 102.992 26.6911 102.588 26.6911C102.174 26.6911 101.829 26.8037 101.554 27.0291C101.282 27.2545 101.078 27.5578 100.942 27.9389C100.81 28.3168 100.743 28.7393 100.743 29.2067C100.743 29.6707 100.81 30.0916 100.942 30.4695C101.078 30.8473 101.282 31.1489 101.554 31.3743C101.829 31.5964 102.174 31.7074 102.588 31.7074ZM109.122 33L106.964 25.3636H108.799L110.141 30.733H110.211L111.583 25.3636H113.397L114.77 30.7031H114.844L116.167 25.3636H118.006L115.843 33H113.969L112.537 27.8395H112.433L111.001 33H109.122Z"
                fill="black"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M150 28C150 28.5523 149.552 29 149 29H133C132.448 29 132 28.5523 132 28C132 27.4477 132.448 27 133 27H149C149.552 27 150 27.4477 150 28Z"
                fill="black"
              />
              <path
                d="M147.972 28C147.879 27.8452 147.683 27.5671 147.469 27.3251C147.044 26.8432 146.457 26.2928 145.844 25.761C145.237 25.2336 144.626 24.7436 144.166 24.3844C143.936 24.2051 143.54 23.9058 143.407 23.8052C142.962 23.4777 142.867 22.8517 143.195 22.4071C143.522 21.9624 144.148 21.8674 144.593 22.1949L144.597 22.1977C144.741 22.3067 145.16 22.6229 145.397 22.8077C145.874 23.18 146.513 23.693 147.156 24.2508C147.793 24.8043 148.456 25.4216 148.968 26.0008C149.223 26.2892 149.461 26.5918 149.642 26.8906C149.805 27.162 150 27.5568 150 28C150 28.4431 149.805 28.838 149.642 29.1094C149.461 29.4082 149.223 29.7108 148.968 29.9992C148.456 30.5784 147.793 31.1957 147.156 31.7492C146.513 32.307 145.874 32.82 145.397 33.1923C145.16 33.3771 144.741 33.6931 144.597 33.8021L144.593 33.8051C144.148 34.1326 143.522 34.0376 143.195 33.5929C142.867 33.1483 142.962 32.5223 143.407 32.1948C143.54 32.0942 143.936 31.7948 144.166 31.6156C144.626 31.2564 145.237 30.7664 145.844 30.2389C146.457 29.7072 147.044 29.1568 147.469 28.6749C147.683 28.4329 147.879 28.1548 147.972 28Z"
                fill="black"
              />
            </svg>
          </div>
        </div>
        <div className="w-[80%] relative bottom-20 min-h-[100%] border-t border-t-black border-b border-b-black   bg-white z-[999] flex items-center justify-around flex-wrap gap-5 p-5">
          {program.map((item, key) => {
            return (
              <button
                onClick={() => {
                  if (item.database !== undefined) {
                    setUrl(item.database);
                    setActivebtn(key);
                    calldata();
                  }
                }}
                className={
                  activebtn != key
                    ? "text-black  text-[13px] font-poppins px-2 py-1 rounded-full  after:duration-300 relative after:absolute after:w-0 after:h-[1px] after:bg-black after:top-[110%] after:left-0 after:hover:w-full "
                    : "text-black  text-[13px] font-poppins px-2 py-1 rounded-full  after:duration-300 relative "
                }
                style={{
                  backgroundColor: key == activebtn ? "black" : "white",
                  color: key == activebtn ? "white" : "black",
                }}
              >
                {item.name}
              </button>
            );
          })}
        </div>
      </div>
    )
  );
};

export default Programs;
