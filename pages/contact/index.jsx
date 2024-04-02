import Footer from "@/components/Footer";
import Layout1 from "@/components/Layout1";
import React, { useEffect, useState } from "react";
import { AiOutlineSend } from "react-icons/ai";

const index = () => {
  const [scrollLength, setScrollLength] = useState(0);

  const [currHeight, setCurrHeight] = useState(0);
  useEffect(() => {
    setCurrHeight(window.innerHeight);
    const handleScroll = () => {
      const calculatedScrollLength = window.scrollY;
      setScrollLength(calculatedScrollLength);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollLength]);

  const data = {
    h1: "FIND US",
    h2: "SKC GROUP OF INSTITUTION",
    p1: " UNAI, ANACIUT POST, VELLORE-632101. 9894216849, 94433 22420, 90474 31438, 04162 903276 info@sreekrishnaengcollege.com",
    p2: " UNAI, ANACIUT POST, VELLORE-632101. 9894216849, 94433 22420, 90474 31438, 04162 903276 info@sreekrishnaengcollege.com",
    h3: "Trust Office: SKC GROUP OF INSTITUTION,",
    bg: [
      "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1772&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    nameplate: {
      h1: "SKC GROUP OF INSTITUTION",
    },
  };
  return (
    <div>
      <Layout1 data={data} />
      <div className="w-full h-[80vh] lg:flex-row flex-col flex items-center justify-center gap-5 bg-[#dedede]">
        <div className="w-[40%] h-[70%] flex flex-col justify-around ">
          <h1 className="text-[40px] font-titlefont">Contact Us</h1>
          <input
            type="text"
            name=""
            id=""
            placeholder="Name"
            className="w-[80%] h-[40px] rounded-md border pl-5 drop-shadow-md"
          />
          <input
            type="Email"
            name=""
            id=""
            placeholder="Email"
            className="w-[80%] h-[40px] rounded-md border pl-5 drop-shadow-md"
          />
          <input
            type="text"
            name=""
            id=""
            placeholder="Phone"
            className="w-[80%] h-[40px] rounded-md border pl-5 drop-shadow-md"
          />
          <textarea
            placeholder="Your Comments"
            className="w-[80%] h-[100px] rounded-md border p-5 drop-shadow-md resize-none"
          />
          <button className=" flex w-[150px] h-[40px] bg-blue-500 text-white items-center justify-center rounded-lg duration-300 hover:scale-[1.05] gap-2">
            Send
            <AiOutlineSend />
          </button>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.526094457245!2d78.96723507518894!3d12.873856587432616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad144bcb1d4297%3A0xafb8d6afb086d35c!2sSree%20Krishna%20College%20of%20Engineering%20(Counseling%20Code%20%3A%201438)!5e0!3m2!1sen!2sin!4v1708443757284!5m2!1sen!2sin"
          width="600"
          height="450"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          className="w-[40%] rounded-lg drop-shadow-lg"
        ></iframe>
      </div>
      <Footer />
    </div>
  );
};

export default index;
