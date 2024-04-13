import React, { useState } from "react";
import { motion } from "framer-motion";

const Searchbox = ({ scrollLength, currHeight, setSearchs }) => {
  const searchData = [
    { name: "apple" },
    { name: "mango" },
    { name: "alpine" },
    { name: "appse" },
    { name: "magneta" },
    { name: "ap" },
    { name: "appse" },
    { name: "magneta" },
    { name: "ap" },
    { name: "appse" },
    { name: "magneta" },
    { name: "ap" },
  ];
  const [search, setSearch] = useState("");
  return (
    scrollLength > 70 && (
      <motion.div className="w-full h-screen fixed  z-[1000] flex items-center justify-center">
        <motion.div
          animate={{ y: -100 }}
          transition={{ duration: 0.2 }}
          exit={{ y: 100 }}
          className="lg:w-[50vw] w-[90vw] right-0 min-h-[25vh] text-white   bg-black/30 backdrop-blur-lg items-center  flex flex-col pt-5 rounded-2xl pb-5 duration-300 relative top-[100px]"
        >
          <button
            className="absolute right-5 top-2"
            onClick={() => setSearchs(false)}
          >
            x
          </button>
          <input
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            type="search"
            className="w-[90%] h-[40px] bg-black/30 backdrop-blur-lg border rounded-full pl-5 "
            placeholder="Search...."
          />
          {search != "" && (
            <div className="  w-[90%] py-[2vh]  rounded-md flex flex-col p-5 drop-shadow-lg">
              {searchData.map((item) => {
                if (item.name.includes(search)) {
                  return <div className="">{item.name}</div>;
                }
              })}
            </div>
          )}
        </motion.div>
      </motion.div>
    )
  );
};

export default Searchbox;
