import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React, { useEffect, useState } from "react";

const index = () => {
  const [scrollLength, setScrollLength] = useState();
  useEffect(() => {
    setScrollLength(100);
  }, []);
  return (
    <div>
      <Header scrollLength={scrollLength} />
      <div className="w-full min-h-screen flex items-center justify-center relative top-[10rem] mb-[10rem]">
        <div className="w-[60%] min-h-screen flex flex-col gap-10 p-10">
          <h1 className="text-[40px] font-Comfortaa">
            College Registration From
          </h1>
          <div className="w-full flex flex-col gap-5">
            <label htmlFor="name" className="font-poppins">
              Name
            </label>
            <div className="w-full flex items-center justify-between">
              <input
                id="name"
                type="text"
                className="w-[48%] h-[40px] border pl-5 rounded-md"
                placeholder="First"
              />
              <input
                type="text"
                className="w-[48%] h-[40px] border pl-5 rounded-md"
                placeholder="Last"
              />
            </div>
          </div>
          <div className="w-full flex flex-col gap-5">
            <label htmlFor="date" className="font-poppins">
              Date
            </label>
            <div className="w-full flex items-center justify-between">
              <input
                id="date"
                type="date"
                className="w-[100%] h-[40px] border pl-5 rounded-md"
              />
            </div>
          </div>
          <div className="w-full flex flex-col gap-5">
            <label htmlFor="email" className="font-poppins">
              Email
            </label>
            <div className="w-full flex items-center justify-between">
              <input
                id="email"
                type="email"
                className="w-[100%] h-[40px] border pl-5 rounded-md"
              />
            </div>
          </div>
          <div className="w-full flex flex-col gap-5">
            <label className="font-poppins" htmlFor="fname">
              Father's name
            </label>
            <div className="w-full flex items-center justify-between">
              <input
                id="fname"
                type="text"
                className="w-[48%] h-[40px] border pl-5 rounded-md"
                placeholder="First"
              />
              <input
                type="text"
                className="w-[48%] h-[40px] border pl-5 rounded-md"
                placeholder="Last"
              />
            </div>
          </div>
          <div className="w-full flex flex-col gap-5">
            <label htmlFor="mname" className="font-poppins">
              Mother's name
            </label>
            <div className="w-full flex items-center justify-between">
              <input
                id="mname"
                type="text"
                className="w-[48%] h-[40px] border pl-5 rounded-md"
                placeholder="First"
              />
              <input
                type="text"
                className="w-[48%] h-[40px] border pl-5 rounded-md"
                placeholder="Last"
              />
            </div>
          </div>
          <div className="w-full flex flex-col gap-5">
            <label className="font-poppins">Gender</label>
            <div className="flex gap-4">
              {" "}
              <input id="M" type="radio" placeholder="First" />
              <label htmlFor="M">M</label>
            </div>
            <div className="flex gap-4">
              {" "}
              <input id="F" type="radio" placeholder="First" />
              <label htmlFor="M">F</label>
            </div>
          </div>
          <div className="w-full flex flex-col gap-5">
            <label htmlFor="nat" className="font-poppins">
              Nationality
            </label>
            <div className="w-full flex items-center justify-between">
              <input
                id="nat"
                type="Text"
                className="w-[100%] h-[40px] border pl-5 rounded-md"
              />
            </div>
          </div>
          <div className="w-full flex flex-col gap-5">
            <label htmlFor="ha" className="font-poppins">
              Home Address
            </label>
            <div className="w-full flex items-center justify-between">
              <input
                id="ha"
                type="Text"
                className="w-[100%] h-[40px] border pl-5 rounded-md"
                placeholder="Street Address"
              />
            </div>
            <div className="w-full flex items-center justify-between">
              <input
                type="text"
                className="w-[48%] h-[40px] border pl-5 rounded-md"
                placeholder="City"
              />
              <input
                type="text"
                className="w-[48%] h-[40px] border pl-5 rounded-md"
                placeholder="Country"
              />
            </div>
          </div>
          <div className="w-full flex flex-col gap-5">
            <label htmlFor="th" className="font-poppins">
              Telephone - Home
            </label>
            <div className="w-full flex items-center justify-between">
              <input
                id="th"
                type="Text"
                className="w-[100%] h-[40px] border pl-5 rounded-md"
                placeholder="### ### ####"
              />
            </div>
          </div>
          <div className="w-full flex flex-col gap-5">
            <label htmlFor="tm" className="font-poppins">
              Telephone - Mobile
            </label>
            <div className="w-full flex items-center justify-between">
              <input
                id="tm"
                type="Text"
                className="w-[100%] h-[40px] border pl-5 rounded-md"
                placeholder="### ### ####"
              />
            </div>
          </div>

          <button className="w-[150px] h-[40px] bg-green-500 text-white rounded-lg duration-300 hover:scale-105">
            Submit
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default index;
