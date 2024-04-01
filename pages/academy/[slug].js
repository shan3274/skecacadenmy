import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Accouncement from "@/components/academy/Announcement";
import Facilities from "@/components/academy/Facilities";
import Features from "@/components/academy/Features";
import Hero from "@/components/academy/Hero";
import Numbers from "@/components/academy/Numbers";
import Studenrlife from "@/components/academy/Studenrlife";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const Page = () => {
  const router = useRouter();

  const [scrollLength, setScrollLength] = useState(0);

  useEffect(() => {
    setScrollLength(100);
  }, []);
  return (
    <div>
      <Header scrollLength={scrollLength} />
      <Hero />
      <Accouncement />
      <Numbers />
      <Studenrlife />
      <Features />
      <Facilities />
      <Footer />
    </div>
  );
};

export default Page;
