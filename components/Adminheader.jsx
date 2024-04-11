import { auth } from "@/utils/firebase";
import { signOut } from "firebase/auth";
import React from "react";
import Link from "next/link";

const Adminheader = () => {
  const headerItem = [
    { name: "Contact request", pathName: "/admin/contact" },
    { name: "Admission request", pathName: "/admin/admission" },
    { name: "", pathName: "" },
    { name: "", pathName: "" },
    { name: "", pathName: "" },
    { name: "", pathName: "" },
    { name: "", pathName: "" },
  ];
  return (
    <div className="w-full h-[5rem] flex items-center justify-center">
      <Link href="/admin/Main" className="text-[20px] font-poppins">
        Admin <span className="text-red-500">Panel</span>
      </Link>
      <div className="w-[60%] h-full flex items-center justify-center gap-5">
        {headerItem.map((item) => {
          return (
            <Link
              href={item.pathName}
              className="text-[12px] flex items-center justify-center relative after:absolute after:top-[110%] after:left-0 after:w-0 after:h-[1px] after:bg-black after:hover:w-full after:duration-300"
            >
              {item.name}
            </Link>
          );
        })}
      </div>
      <button
        className="px-5 py-1 bg-red-500 text-white rounded-full"
        onClick={() => {
          signOut(auth);
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Adminheader;
