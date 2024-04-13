import React from "react";

const index = () => {
  return (
    <div>
      <div className="w-full h-screen flex items-center justify-center bg-gray-200">
        <div className="w-[50vw] h-[50vh] bg-white drop-shadow-md border flex flex-col items-center justify-center gap-5 rounded-2xl">
          <h1 className="text-[40px] font-Comfortaa text-gray-600">
            Credentials
          </h1>
          <input
            type="text"
            className="w-[60%] h-[40px] border rounded-xl pl-5 font-poppins texr-[15px]"
            placeholder="Studnet ID"
            required
          />
          <div className="w-[60%] h-[40px] flex items-center  gap-5">
            <label htmlFor="">Date of birth</label>{" "}
            <input type="date" className="border-b px-3 py-1  " />
          </div>

          <button className="w-[150px] h-[40px] bg-red-500 text-white rounded-2xl">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default index;
