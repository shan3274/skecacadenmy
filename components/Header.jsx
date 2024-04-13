import React, { useState, useRef, useEffect, memo } from "react";
import logo from "@/public/logo.png";
import Image from "next/image";
import Link from "next/link";

import { CiSearch, CiMenuBurger, CiInstagram } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import Searchbox from "./Searchbox";

import Phoneheader from "./Phoneheader";

import {
  AiFillClockCircle,
  AiFillFacebook,
  AiFillInstagram,
  AiFillMail,
  AiFillPhone,
  AiFillTwitterSquare,
  AiFillYoutube,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const Header = ({ scrollLength, currHeight, value = 0, department }) => {
  const [search, setSearch] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [subMenu, setSubMenu] = useState(false);

  const [about, setAbout] = useState([
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
  ]);

  const [program, seProgram] = useState([
    { name: "MBA", pathName: "/programs/mba" },
    { name: "BBA", pathName: "/programs/bba" },
    { name: "B.Com", pathName: "/programs/bcom" },
    { name: "B.A (Hons) Economics", pathName: "/programs/bahonseconomics" },
    { name: "B.A (Hons) English", pathName: "/programs/bahonsenglish" },
    {
      name: "B.Sc Visual Comumunication",
      pathName: "/programs/bscvisualcomununication",
    },
    { name: "B.Sc Animation", pathName: "/programs/bscanimation" },
    {
      name: "M.Sc Visual Comumunication",
      pathName: "/programs/mscvisualcomununication",
    },
    {
      name: "Diploma in Hotel & Catering Management",
      pathName: "/programs/diplomahotelcateringmanagement",
    },

    {
      name: "B.Sc Hotel & Catering Management",
      pathName: "/programs/bschotelcateringmanagement",
    },
    {
      name: "B.Sc Food Service Management & Applied Nutrition",
      pathName: "/programs/bscfoodservicemanagementappliednutrition",
    },
    {
      name: "M.Sc Hotel & Catering Management",
      pathName: "/programs/mschotelcateringmanagement",
    },

    { name: "B.Sc Yoga", pathName: "/programs/bscyoga" },
    { name: "M.Sc Yoga", pathName: "/programs/mscyoga" },
    { name: "Diploma Yoga", pathName: "/programs/diplomayoga" },
    { name: "M.A Astrology", pathName: "/programs/mscastrology" },
    { name: "Diploma in Astrology", pathName: "/programs/diplomainastrology" },

    {
      name: "B.A Western Classical Music",
      pathName: "/programs/bawesternclassicalmusic",
    },
    { name: "M.A Karnatic Music", pathName: "/programs/makarnaticmusic" },
    { name: "M.A Bharatanatyam", pathName: "/programs/mabharatanatyam" },
  ]);

  const [disData, setDisData] = useState([]);

  const [activebtn, setActivebtn] = useState(value);

  useEffect(() => {
    setActivebtn(value);
  }, [value]);
  return (
    <>
      <div className="lg:hidden">
        <Phoneheader currHeight={currHeight} scrollLength={scrollLength} />
      </div>

      <div className="hidden lg:block relative">
        <div className="w-full flex flex-col gap-10 items-center justify-center bg-transparent absolute top-0 ">
          <div
            className={
              scrollLength < 10
                ? "w-full h-[2rem]  bg-[#392346] z-[999] relative flex items-center justify-center text-white"
                : "hidden"
            }
          >
            <div className="absolute left-5 text-[12px] flex gap-2 items-center text-[#ae8949]">
              {" "}
              <p className="flex gap-1 items-center">
                {" "}
                <AiFillMail /> info@sreekrishnaengcollege.com
              </p>{" "}
              <p className="flex gap-1 items-center">
                | <AiFillPhone /> 9894216849 / 9443322420
              </p>
            </div>
            <p className="text-[12px] font-Comfortaa text-[#ae8949]">
              SKC GROUP OF INSTITUTION
            </p>
            <div className="absolute right-5 text-[12px] flex gap-2 items-center">
              <p className="flex gap-1 items-center text-[#ae8949]">
                <AiFillClockCircle /> COUNSELLING CODE - 1438
              </p>
            </div>
          </div>
          <div
            className={
              scrollLength > 70
                ? "w-[100%] h-[5rem] bg-[#392346] z-[9999] fixed top-0 duration-700 flex items-center justify-evenly text-white rounded-none "
                : "w-[60%] h-[5rem] bg-[#392346] z-[9999] sticky top-0 duration-700  flex  items-center justify-evenly text-white rounded-lg  rounded-br-none "
            }
          >
            <div className="w-full h-full relative flex items-center justify-evenly">
              {/*sub menu for all*/}
              {subMenu && (
                <div
                  onMouseEnter={() => setSubMenu(true)}
                  onMouseLeave={() => setSubMenu(false)}
                  className="w-full left-0 min-h-[100%] absolute top-[100%] bg-white z-[999] flex items-center justify-around flex-wrap gap-5 p-5"
                >
                  {disData.map((item, key) => {
                    return (
                      <Link
                        className={
                          activebtn != key
                            ? "text-black px-2 py-1 rounded-full text-[10px] font-poppins  after:duration-300 relative after:absolute after:w-0 after:h-[1px] after:bg-black after:top-[100%] after:left-0 after:hover:w-full "
                            : "text-black px-2 py-1 rounded-full text-[10px] font-poppins relative  "
                        }
                        href={item.pathName}
                        onClick={() => {
                          setActivebtn(key);
                        }}
                        style={{
                          backgroundColor: key == activebtn ? "black" : "white",
                          color: key == activebtn ? "white" : "black",
                        }}
                      >
                        {item.name}
                      </Link>
                    );
                  })}
                </div>
              )}
              <div className="absolute w-[30%] h-[2rem] bg-[#ae8949] right-0 top-[100%] rounded-sm ">
                <div className="w-full h-full relative bg-[#ae8949] flex items-center justify-around rounded-sm ">
                  <div
                    className={
                      scrollLength > 70
                        ? "clippath absolute w-[2rem] h-full bg-[#ae8949] left-[-1.9rem]"
                        : "clippath absolute w-[2rem] h-full bg-[#ae8949] left-[-1.9rem]"
                    }
                  ></div>
                  <div className="flex gap-5 text-white">
                    <AiFillFacebook size={20} />
                    <AiFillTwitterSquare size={20} />
                    <AiFillYoutube size={20} />
                    <AiFillInstagram size={20} />
                    <FaLinkedinIn size={20} />
                  </div>
                </div>
              </div>
              <Link href="/">
                <Image
                  src={logo}
                  width={200}
                  className="cursor-pointer relative z-[9999] w-[200px]"
                />
              </Link>
              <ul
                className={
                  scrollLength > 70
                    ? "lg:flex  h-full hidden gap-2 text-[12px] items-center justify-evenly font-poppins"
                    : "lg:flex h-full  hidden gap-2 text-[10px] items-center justify-evenly font-poppins"
                }
              >
                <li className="relative  hover:bg-white hover:text-black h-[30px] px-[1vw] flex items-center justify-center  duration-300 rounded-lg hover:scale-[1.05] z-[10]">
                  <Link
                    href="/trust"
                    className="hover:scale-[1.02] duration-300  font-poppins text-[#ae8949]"
                  >
                    TRUST
                  </Link>
                </li>

                <li className="relative  hover:bg-white hover:text-black h-[30px] px-[1vw] flex items-center justify-center  duration-300 rounded-lg hover:scale-[1.05] z-[10]">
                  <Link
                    href="/"
                    className="hover:scale-[1.02] duration-300  font-poppins"
                  >
                    HOME
                  </Link>
                </li>
                <li
                  className="relative  hover:bg-white hover:text-black h-[30px] px-[1vw] flex items-center justify-center  duration-300 rounded-lg hover:scale-[1.05] z-[10]"
                  onMouseEnter={() => {
                    setDisData(about);
                    setSubMenu(true);
                  }}
                >
                  <Link
                    href="/about"
                    className="hover:scale-[1.02] duration-300  font-poppins"
                    onMouseEnter={() => {
                      if (department != "about") {
                        setActivebtn(0);
                      } else {
                        setActivebtn(value);
                      }
                    }}
                  >
                    ABOUT SKC
                  </Link>
                </li>

                <li
                  className=" relative hover:bg-white  hover:text-black h-[30px] px-[1vw] flex items-center justify-center  duration-300 rounded-lg hover:scale-[1.05] z-[10]"
                  onMouseEnter={() => {
                    setDisData(program);
                    setSubMenu(true);
                  }}
                >
                  <Link
                    href="/programs"
                    className="hover:scale-[1.02] duration-300 font-poppins"
                    onMouseEnter={() => {
                      if (department != "program") {
                        setActivebtn(0);
                      } else {
                        setActivebtn(value);
                      }
                    }}
                  >
                    PROGRAMS
                  </Link>
                </li>
                <li className="relative  hover:bg-white hover:text-black h-[30px] px-[1vw] flex items-center justify-center  duration-300 rounded-lg hover:scale-[1.05] z-[10]">
                  <Link href="/admission" className="font-poppins">
                    ADMISSIONS
                  </Link>
                </li>
                <li className="relative  hover:bg-white hover:text-black h-[30px] px-[1vw] flex items-center justify-center  duration-300 rounded-lg hover:scale-[1.05] z-[10]">
                  <Link href="/gallery" className="font-poppins">
                    GALLERY
                  </Link>
                </li>
                <li className="relative  hover:bg-white hover:text-black h-[30px] px-[1vw] flex items-center justify-center  duration-300 rounded-lg hover:scale-[1.05] z-[10]">
                  <Link href="/contact" className="font-poppins">
                    CONTACT US
                  </Link>
                </li>
              </ul>
              {scrollLength > 70 && (
                <div className=" flex items-center justify-center absolute right-[15%] lg:right-[5%]">
                  <button>
                    <CiSearch
                      size={20}
                      onClick={() => setSearch(true)}
                      className="z-[999]"
                    />
                  </button>
                </div>
              )}
              {scrollLength > 70 && (
                <div className="absolute right-[5%] lg:hidden">
                  {!isMenuOpen ? (
                    <CiMenuBurger
                      size={20}
                      onClick={() => setIsMenuOpen(true)}
                      className="cursor-pointer"
                    />
                  ) : (
                    <IoMdClose
                      size={20}
                      onClick={() => setIsMenuOpen(false)}
                      className="cursor-pointer lg:hidden"
                    />
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
        {search && (
          <Searchbox
            scrollLength={scrollLength}
            currHeight={currHeight}
            setSearchs={setSearch}
          />
        )}

        {scrollLength > 70 && (
          <div
            className={
              isMenuOpen
                ? "fixed w-full h-[50vh] bg-[#951022] z-[969] top-[5.5rem] lg:hidden duration-500 overflow-hidden flex flex-col text-white pl-5 pt-5"
                : "fixed w-full h-0 bg-[#951022] z-[969] top-[5.1rem] lg:hidden duration-300 overflow-hidden text-white pl-5 pt-5"
            }
          ></div>
        )}
      </div>
    </>
  );
};

export default Header;
