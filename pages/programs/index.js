import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Programs from "@/components/Programs";
import React, { useEffect, useState } from "react";

const index = () => {
  const [scrollLength, setScrollLength] = useState();
  useEffect(() => {
    setScrollLength(100);
  }, []);
  return (
    <div>
      <Header scrollLength={scrollLength} />
      <Programs />
      <Footer />
    </div>
  );
};

export default index;
