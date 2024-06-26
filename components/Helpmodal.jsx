import React from "react";
import { IoCloseCircleSharp } from "react-icons/io5";

const Helpmodal = ({ category, close, setClose }) => {
  const email = {
    title: "Email",
    email1: "info@sreekrishnaengcollege.com",
    email2: "krishnaeducationalworld@gmail.com",
  };
  const phone = {
    title: "Phone",
    phone1: "VICE PRINCIPAL &PLACEMENT OFFICER: 9786462150",
    phone2: "CEO: M.J. SURESH KUMAR : 9003058900",
    phone3: "K SHILPA, M.E. (STRUCTURAL ENGG.) : 8825538889",
    phone4: "Mr. S. SINGARAVEL, M.E., AP/CIVIL : 9003058900",
    phone4: "Mr. M KALAINESAN, M.E(PED), MBA. : 9786462150",
  };
  const address = {
    title: "Address",
    address1: "Kandaneri,Near pallikonda Toll Gate",
  };
  return (
    <div className="w-full h-[50vh] fixed bottom-0 left-0 bg-[#d0d0d0] z-[9999999] rounded-t-xl drop-shadow-2xl border">
      <div className="w-full h-full relative flex items-center flex-col gap-5 justify-center">
        <IoCloseCircleSharp
          size={20}
          className="absolute right-5 top-5 cursor-pointer"
          onClick={() => setClose(false)}
        />
        {category === "email" && (
          <>
            <h1 className="text-[25px] font-Comfortaa">{email?.title}</h1>
            <p className="text-[12px] font-poppins text-gray-500">
              {email?.email1}
            </p>
            <p className="text-[12px] font-poppins text-gray-500">
              {email?.email2}
            </p>
            <p className="text-[12px] font-poppins text-gray-500">
              {email?.email3}
            </p>
            <p className="text-[12px] font-poppins text-gray-500">
              {email?.email4}
            </p>
          </>
        )}
        {category === "call" && (
          <>
            <h1 className="text-[25px] font-Comfortaa">{phone?.title}</h1>
            <p className="text-[12px] font-poppins text-gray-500">
              {phone?.phone1}
            </p>
            <p className="text-[12px] font-poppins text-gray-500">
              {phone?.phone2}
            </p>
            <p className="text-[12px] font-poppins text-gray-500">
              {phone?.phone3}
            </p>
            <p className="text-[12px] font-poppins text-gray-500">
              {phone?.phone4}
            </p>
          </>
        )}
        {category === "find" && (
          <>
            <h1 className="text-[25px] font-Comfortaa">{address?.title}</h1>
            <p className="text-[12px] font-poppins text-gray-500">
              {address?.address1}
            </p>
            <p className="text-[12px] font-poppins text-gray-500">
              {address?.address2}
            </p>
            <p className="text-[12px] font-poppins text-gray-500">
              {address?.address3}
            </p>
            <p className="text-[12px] font-poppins text-gray-500">
              {address?.address4}
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default Helpmodal;
