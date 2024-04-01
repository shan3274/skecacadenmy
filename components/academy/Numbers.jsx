import React from "react";

const Numbers = () => {
  return (
    <div className="w-full h-[30vh] flex items-center justify-evenly flex-wrap relative  after:absolute after:w-[80%] after:h-[.5px] after:bg-gray-600 after:bottom-10 before:absolute before:w-[80%] before:h-[.5px] before:bg-gray-600 before:top-10">
      <div className="w-[300px] h-full flex flex-col items-center justify-center gap-2">
        <h1 className="text-[40px] font-Comfortaa">600+</h1>
        <p className="text-[20px] font-poppins text-gray-500 text-center">
          Organized student groups
        </p>
      </div>
      <div className="w-[300px] h-full flex flex-col items-center justify-center gap-2">
        {" "}
        <h1 className="text-[40px] font-Comfortaa">81</h1>
        <p className="text-[20px] font-poppins text-gray-500 text-center">
          Undergraduate student residences
        </p>
      </div>
      <div className="w-[300px] h-full flex flex-col items-center justify-center gap-2">
        {" "}
        <h1 className="text-[40px] font-Comfortaa">14,000+</h1>
        <p className="text-[20px] font-poppins text-gray-500 text-center">
          Students living on campus
        </p>
      </div>
    </div>
  );
};

export default Numbers;
