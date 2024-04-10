import React, { useEffect, useState, useReducer } from "react";
import {
  canteendata,
  healthcaredata,
  hosteldata,
  librarydata,
  sportdata,
  transportdata,
} from "@/utils/facilitiesdata";
import {
  MdHotel,
  MdOutlineHealthAndSafety,
  MdOutlineLunchDining,
  MdOutlineSportsCricket,
} from "react-icons/md";
import { FaInternetExplorer } from "react-icons/fa";
import { IoBus, IoLibraryOutline } from "react-icons/io5";

const data = [
  canteendata,
  sportdata,
  hosteldata,
  transportdata,
  librarydata,
  healthcaredata,
];

// Reducer function to handle state updates
const boxesReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE":
      return state.map((box, index) => (index === action.index ? !box : box));
    case "REVERT":
      return state.map((box, index) => (index === action.index ? !box : box));
    default:
      return state;
  }
};

const Section2 = () => {
  const [boxes, setBoxs] = useState(0);

  let [count, setCount] = useState(0);

  useEffect(() => {
    let i = -1;
    setInterval(() => {
      if (i > 7) i = -1;
      let value = i++;
      setCount(value);
    }, 3000);
  }, []);

  return (
    <div className="w-full min-h-[80vh] flex flex-col items-center justify-center py-10 bg-[#ffffff]">
      <h1 className="m-10 font-Comfortaa text-[40px]">Facilities</h1>
      <div className="w-[90%] min-h-[75vh] flex items-center justify-center pl-10 gap-5 flex-wrap">
        {data.map((item, key) => (
          <div
            key={key}
            onMouseEnter={() => setBoxs(key)}
            className="w-[400px] h-[350px] bg-white rounded-xl relative overflow-hidden flex items-center justify-center gap-5 flex-col drop-shadow-xl border"
          >
            <img
              src={item?.bg[0]}
              className={
                boxes == key
                  ? "absolute top-[0%] left-0 duration-300 aspect-[1/1]"
                  : "absolute top-[-120%] left-0 duration-300 aspect-[1/1]"
              }
            />
            <div
              className={
                boxes == key
                  ? "text-[15px] font-serif absolute text-center bottom-0  w-[90%]  duration-300 bg-white/50 backdrop-blur-lg rounded-2xl p-5 mb-5 drop-shadow-xl"
                  : "text-[15px] font-serif absolute text-center -bottom-20  w-[90%]  duration-300 bg-white/50 backdrop-blur-lg rounded-2xl p-5 mb-5 drop-shadow-xl"
              }
            >
              {item.h1}
            </div>

            {item.h1 == "CANTEEN" && (
              <MdOutlineLunchDining size={100} color="#0E2647" />
            )}
            {item.h1 == "HEALTH CARE" && (
              <MdOutlineHealthAndSafety size={100} color="#0E2647" />
            )}
            {item.h1 == "HOSTEL" && <MdHotel size={100} color="#0E2647" />}
            {item.h1 == "INTERNET" && (
              <FaInternetExplorer size={100} color="#0E2647" />
            )}
            {item.h1 == "LIBRARY" && (
              <IoLibraryOutline size={100} color="#0E2647" />
            )}
            {item.h1 == "SPORTS" && (
              <MdOutlineSportsCricket size={100} color="#0E2647" />
            )}
            {item.h1 == "TRANSPORT" && <IoBus size={100} color="#0E2647" />}
            <div className="text-[15px] font-serif">{item.h1}</div>
            <div className="w-[90%] text-[12px] line-clamp-2 text-justify">
              {item.p1}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section2;
