import Footer from "@/components/Footer";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import gsap from "gsap";
import imgdata from "@/utils/imgdata";
import Header from "@/components/Header";


const index = () => {
  const [scrollLength, setScrollLength] = useState(0);

  const [currHeight, setCurrHeight] = useState(0);

  const [mouseX, setMouseX] = useState(0);
  useEffect(() => {
    setCurrHeight(window.innerHeight);
    setScrollLength(100);

    const mousex = document.querySelector("#nav");
    const hover = document.querySelector("#hover");
    const link = document.querySelector("link");

    link?.addEventListener("mouseenter", (path) => {
      gsap.to(hover, {
        color: "white",
      });
    });
    mousex.addEventListener("mousemove", (path) => {
      gsap.to(hover, {
        x: path.pageX - 200,
        background: "black",
      });
    });
    mousex.addEventListener("mouseenter", (path) => {
      gsap.to(hover, {
        x: 0,
      });
    });
    mousex.addEventListener("mouseleave", (path) => {
      gsap.to(hover, {
        x: 0,
        background: "transparent",
      });
    });
  }, [setMouseX]);
  const [mouse, active] = useState(false);

  return (
    <div>
      <Header scrollLength={scrollLength} />
      <div className="w-full min-h-screen overflow-scroll flex flex-col items-center justify-start gap-5 relative top-[15vh] ">
        <div
          className="w-[80%] lg:text-[12px] text-[10px] h-[3rem] bg-white rounded-2xl drop-shadow-xl flex items-center justify-around  relative text-black"
          id="nav"
        >
          <div
            id="hover"
            className="absolute w-[100px] h-[60%]  z-[1]  rounded-full"
            style={{
              left: active && "0",
            }}
          ></div>
          <Link
            id="link"
            className="z-[2] hover:text-white duration-300 h-full flex items-center"
            href="#"
          >
            Republic day
          </Link>
          <Link
            id="link"
            className="z-[2] hover:text-white duration-300 h-full flex items-center"
            href="#"
          >
            SKCE Magazine
          </Link>
          <Link
            id="link"
            className="z-[2] hover:text-white duration-300 h-full flex items-center"
            href="#"
          >
            Programmes
          </Link>
          <Link
            id="link"
            className="z-[2] hover:text-white duration-300 h-full flex items-center"
            href="#"
          >
            Teacher's day
          </Link>
          <Link
            id="link"
            className="z-[2] hover:text-white duration-300 h-full flex items-center"
            href="#"
          >
            College Views
          </Link>
          <Link
            id="link"
            title=" Health Awareness COVID & National Leprosy Eradication Programme 13.04.2022"
            className="z-[2] hover:text-white duration-300 h-full flex items-center"
            href="#"
          >
            Photo – Gallery
          </Link>
          <Link
            id="link"
            className="z-[2] hover:text-white duration-300 h-full flex items-center"
            href="#"
          >
            MSME Program
          </Link>
          <Link
            id="link"
            className="z-[2] hover:text-white duration-300 h-full flex items-center"
            href="#"
          >
            HACNLEP
          </Link>
          <Link
            id="link"
            className="z-[2] hover:text-white duration-300 h-full flex items-center"
            href="#"
          >
            Agnipath Yojana
          </Link>
        </div>
        <div className="w-[80%] pb-[30vh] flex flex-wrap items-center justify-center gap-5">
          {imgdata.map((item, key) => {
            return (
              <>
                <img
                  src={item.css}
                  className="w-[300px] object-cover rounded hover:scale-[1.5] duration-300"
                  style={{
                    width: key % 2 === 1 && "400px",
                  }}
                />
              </>
            );
          })}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default index;
