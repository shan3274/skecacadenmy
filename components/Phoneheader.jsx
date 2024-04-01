import Link from "next/link";
import React, { useState } from "react";
import logo from "@/public/logo.png";
import { CiMenuBurger, CiSearch } from "react-icons/ci";
import Image from "next/image";
import Searchbox from "./Searchbox";
import { IoMdClose } from "react-icons/io";


const Phoneheader = ({ scrollLength, currHeight }) => {
  const [search, setSearch] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [stdAreana, setstdAreana] = useState(false);
  const [about, setAbout] = useState(false);
  const [adm, setAdm] = useState(false);
  const [gallery, setGallery] = useState(false);
  const [contact, setContact] = useState(false);
  return (
    <div className="fixed top-0 left-0 z-[999] w-full">
      <div className="w-full flex flex-col gap-10 items-center justify-center bg-transparent absolute top-0 lg:hidden">
        <div className="w-full h-[3rem]  bg-[#351790] z-[999] relative flex items-center justify-center text-white">
          Sree krishna college of engineering
        </div>
        <div
          className={
            scrollLength > 70
              ? "w-[100%] h-[5rem] bg-[#1f104e] z-[999] fixed top-0 duration-700 flex items-center justify-evenly text-white rounded-none"
              : "w-[60%] h-[5rem] bg-[#1f104e] z-[999] sticky top-0 duration-700  flex  items-center justify-evenly text-white rounded-lg"
          }
        >
          <Link href="/">
            <Image
              src={logo}
              width={200}
              className="cursor-pointer relative z-[9999]"
            />
          </Link>

          {scrollLength > 70 && (
            <button className=" flex items-center justify-center absolute right-[15%] lg:right-[5%]">
              <button onClick={() => setSearch(true)} className="z-[999]">
                <CiSearch size={20} />
              </button>
            </button>
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
              ? "fixed w-full h-[80vh] overflow-scroll max-h-[100vh] bg-[#1f104e] z-[969] top-[5.5rem] lg:hidden duration-500  flex flex-col text-white"
              : "fixed w-full h-0 bg-[#1f104e] z-[969] top-[5.1rem] lg:hidden duration-300 overflow-hidden text-white "
          }
        >
          <ul className="w-full">
            <li
              className="w-full h-[60px] flex items-center  border-b relative pl-5 cursor-pointer mt-5"
              onClick={() => {
                setAbout(!about);
                setstdAreana(false);
                setAdm(false);
                setGallery(false);
                setContact(false);
              }}
            >
              About
            </li>

            <ul
              className={
                about
                  ? "flex flex-col h-[200px] w-full duration-300 overflow-hidden pl-5 pt-5 gap-3 border-b"
                  : "flex flex-col h-[0px] w-full duration-300 overflow-hidden  gap-3"
              }
            >
              <h2 className="text-[15px] font-[700] ">About us</h2>
              <li>
                <Link href="/about">About The College </Link>
              </li>
              <li>
                <Link href="/about/Staffdetails">SKCE Staff Details </Link>
              </li>
              <li>
                <Link href="/about/Misionandvision">Mission And Vision </Link>
              </li>
              <li>
                <Link href="/about/Fromchairman">
                  From The Chairman’s Desk{" "}
                </Link>
              </li>
              <li>
                <Link href="/about/Fromprinciple">
                  From The Principal’s Desk{" "}
                </Link>
              </li>
              <li>
                <Link href="/about/Aicteesen">AICTE Essentials</Link>
              </li>
            </ul>
            <ul
              className={
                about
                  ? "flex flex-col h-[300px] w-full duration-300 overflow-hidden pl-5 pt-5 gap-3 border-b pb-5"
                  : "flex flex-col h-[0px] w-full duration-300 overflow-hidden pl-5 pt-5 gap-3"
              }
            >
              <h2 className="text-[15px] font-[700]">DEPARTMENTSs</h2>
              <li>
                <Link href="/about/department/Becivil">
                  B.E. Civil Engineering <br /> (Naan Mudalvan Scheme){" "}
                </Link>
              </li>
              <li>
                <Link href="/about/department/Becse">
                  B.E- Computer Science <br /> (Naan Mudalvan Scheme){" "}
                </Link>
              </li>
              <li>
                <Link href="/about/department/Beelectrics">
                  B.E Electronics And Communication <br />
                  (Naan Mudalvan Scheme){" "}
                </Link>
              </li>
              <li>
                <Link href="/about/department/Beelectricandelec">
                  B.E Electrical And Electronics <br />
                  (Naan Mudalvan Scheme)
                </Link>
              </li>
              <li>
                <Link href="/about/department/Bemechabical">
                  B.E Mechanical Engineering <br /> (Naan Mudalvan Scheme){" "}
                </Link>
              </li>
              <li>
                <Link href="/about/department/Scienceandhuman">
                  Science And Humanities
                </Link>
              </li>
              <li>
                <Link href="#">MBA & MCA</Link>
              </li>
            </ul>
            <ul
              className={
                about
                  ? "flex flex-col h-[300px] w-full duration-300 overflow-hidden pl-5 pt-5 gap-3 border-b "
                  : "flex flex-col h-[0px] w-full duration-300 overflow-hidden  gap-3"
              }
            >
              <h2 className="text-[15px] font-[700]">DEPARTMENTSs</h2>
              <li>
                <Link href="/about/department/Becivil">
                  B.E. Civil Engineering <br /> (Naan Mudalvan Scheme){" "}
                </Link>
              </li>
              <li>
                <Link href="/about/department/Becse">
                  B.E- Computer Science <br /> (Naan Mudalvan Scheme){" "}
                </Link>
              </li>
              <li>
                <Link href="/about/department/Beelectrics">
                  B.E Electronics And Communication <br />
                  (Naan Mudalvan Scheme){" "}
                </Link>
              </li>
              <li>
                <Link href="/about/department/Beelectricandelec">
                  B.E Electrical And Electronics <br />
                  (Naan Mudalvan Scheme)
                </Link>
              </li>
              <li>
                <Link href="/about/department/Bemechabical">
                  B.E Mechanical Engineering <br /> (Naan Mudalvan Scheme){" "}
                </Link>
              </li>
              <li>
                <Link href="/about/department/Scienceandhuman">
                  Science And Humanities
                </Link>
              </li>
              <li>
                <Link href="#">MBA & MCA</Link>
              </li>
            </ul>
            <li
              className="w-full h-[60px] flex items-center  border-b relative pl-5 cursor-pointer"
              onClick={() => {
                setstdAreana(!stdAreana);
                setAdm(false);
                setGallery(false);
                setContact(false);
                setAbout(false);
              }}
            >
              STUDENT ARENA
            </li>
            <ul
              className={
                stdAreana
                  ? "flex flex-col h-[150px] w-full duration-300 overflow-hidden pl-5 pt-5 gap-3 border-b"
                  : "flex flex-col h-[0px] w-full duration-300 overflow-hidden pl-5 pt-5 gap-3"
              }
            >
              <li>
                <Link href="/student/Feedback">Student Feedback</Link>
              </li>
              <li>
                <Link href="/student/Enquery">Student Enquery</Link>
              </li>
              <li>
                <Link href="#">example</Link>
              </li>
            </ul>
            <li
              className="w-full h-[60px] flex items-center  border-b relative pl-5 cursor-pointer"
              onClick={() => {
                setAdm(!adm);
                setstdAreana(false);
                setGallery(false);
                setContact(false);
                setAbout(false);
              }}
            >
              ADMISSIONS
            </li>
            <ul
              className={
                adm
                  ? "flex flex-col h-[150px] w-full duration-300 overflow-hidden pl-5 pt-5 gap-3 border-b"
                  : "flex flex-col h-[0px] w-full duration-300 overflow-hidden pl-5 pt-5 gap-3"
              }
            >
              <li>
                <Link href="#">example</Link>
              </li>
              <li>
                <Link href="#">example</Link>
              </li>
              <li>
                <Link href="#">example</Link>
              </li>
            </ul>
            <li
              className="w-full h-[60px] flex items-center  border-b relative pl-5 cursor-pointer"
              onClick={() => {
                setGallery(!gallery);
                setstdAreana(false);
                setAdm(false);
                setContact(false);
                setAbout(false);
              }}
            >
              GALLERY
            </li>
            <ul
              className={
                gallery
                  ? "flex flex-col h-[150px] w-full duration-300 overflow-hidden pl-5 pt-5 gap-3 border-b"
                  : "flex flex-col h-[0px] w-full duration-300 overflow-hidden pl-5 pt-5 gap-3"
              }
            >
              <li>
                <Link href="#">example</Link>
              </li>
              <li>
                <Link href="#">example</Link>
              </li>
              <li>
                <Link href="#">example</Link>
              </li>
            </ul>
          </ul>
          <li className="w-full h-[60px] flex items-center  border-b relative pl-5 cursor-pointer">
            <Link href="/contact">CONTACT</Link>
          </li>
        </div>
      )}
    </div>
  );
};

export default Phoneheader;
