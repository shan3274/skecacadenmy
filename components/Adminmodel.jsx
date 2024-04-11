import React from "react";
import { IoCloseCircle } from "react-icons/io5";

const Adminmodel = ({ data, close, setClose }) => {
  console.log(data);
  return (
    <div className="w-full h-screen fixed top-0 left-0  flex items-center justify-center bg-white/30 backdrop-blur-sm">
      <div className="w-[70%] min-h-[60%] bg-white drop-shadow-xl border rounded-md relative flex flex-col items-start justify-center gap-5 p-10">
        <div
          className="absolute right-5 top-5 cursor-pointer"
          onClick={() => setClose(false)}
        >
          <IoCloseCircle size={20} />
        </div>

        {data?.name && (
          <h1 className="text-[40px] font-Comfortaa">{data?.name}</h1>
        )}
        {data?.firstName && (
          <h1 className="text-[40px] font-Comfortaa">
            {data?.firstName} {data?.lastName}
          </h1>
        )}
        {data?.email && (
          <p className="text-[15px] text-gray-500 font-poppins">
            Email : {data?.email}
          </p>
        )}
        {data?.gender && (
          <p className="text-[15px] text-gray-500 font-poppins">
            Gender : {data?.gender}
          </p>
        )}
        {data?.phone && (
          <p className="text-[15px] text-gray-500 font-poppins">
            {data?.phone}
          </p>
        )}
        {data?.reason && (
          <p className="text-[15px] text-gray-500 font-poppins">
            {data?.reason}
          </p>
        )}

        {data?.date && (
          <p className="text-[15px] text-gray-500 font-poppins">
            Date : {data?.date}
          </p>
        )}
        {data?.fatherFirstName && (
          <p className="text-[15px] text-gray-500 font-poppins">
            Father's Name : {data?.fatherFirstName} {data?.fatherLastName}
          </p>
        )}
        {data?.motherFirstName && (
          <p className="text-[15px] text-gray-500 font-poppins">
            Mother's Name : {data?.motherFirstName} {data?.motherLastName}
          </p>
        )}
        {data?.nationality && (
          <p className="text-[15px] text-gray-500 font-poppins">
            Address : {data?.streetAddress} {data?.city} {data?.country}
          </p>
        )}
        {data?.telMobile && (
          <p className="text-[15px] text-gray-500 font-poppins">
            Phone : {data?.telMobile} {data?.telhome}
          </p>
        )}
      </div>
    </div>
  );
};

export default Adminmodel;
