import Adminheader from "@/components/Adminheader";
import { auth } from "@/utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const Main = () => {
  const router = useRouter();
  useEffect(() => {
    onAuthStateChanged(auth, (currenuser) => {
      if (currenuser == null) router.push("/admin");
    });
  }, []);
  return (
    <div className="">
      <Adminheader />
    </div>
  );
};

export default Main;
