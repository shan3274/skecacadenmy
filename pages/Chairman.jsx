import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { CiPhone } from "react-icons/ci";
import { FaYahoo } from "react-icons/fa";
import { GiMailbox, GiWorld } from "react-icons/gi";
import { IoPhonePortraitSharp } from "react-icons/io5";

const Chairman = () => {
  const [scrollLength, setScrollLength] = useState();
  useEffect(() => {
    setScrollLength(100);
  }, []);
  return (
    <div>
      <Header scrollLength={scrollLength} />
      <div className="w-full min-h-screen flex items-center justify-center flex-col gap-10 mb-[20vh]">
        <h1 className="lg:text-[35px] text-[20px] font-Comfortaa relative top-[15vh]">
          Group Business Profile
        </h1>
        <div className="w-full min-h-[50vh] flex items-center justify-center gap-10 flex-wrap relative top-[15vh]">
          <div className="w-[500px] flex justify-center items-center gap-5 flex-col">
            <Image
              src="/chairmanprofile.jpeg"
              width={400}
              height={300}
              className="rounded-xl"
            />
            <h1 className="text-[35px] font-Comfortaa lg:text-start text-center">
              DR. G. SARAVANAN{" "}
              <span className="text-[20px] font-Comfortaa">M.B.A,Ph.D</span>
            </h1>
          </div>
          <div className="w-[700px] flex items-center justify-center flex-wrap text-justify gap-5 p-5">
            <p className="text-[17px] font-poppins">
              We are in the business of educational institutions, training
              academies, healthcare, and transport. SKCE was started in 2010 and
              offers 5 disciplines of engineering. we have 616 students
              presently studying.
            </p>
            <p className="text-[17px] font-poppins">
              our school at Anaicut is reputed and recognized by the state and
              CBSE board. we have an excellent infrastructure with 832 students
              & qualified teachers/ professionals our training academy offers
              courses for defense, state police & border security.
            </p>
            <p className="text-[17px] font-poppins">
              IAS Academy offers courses for civil services. our coaching centre
              offers courses for neet & jee (engineering) (Medical)
            </p>
            <p className="text-[17px] font-poppins">
              SREE Krishna Hospital is a multispeciality hospital, at Ambur,
              with 150 beds. our transport business comprises 3 verticals.
            </p>
            <ul className="text-[15px] font-poppins text-gray-500 flex flex-col gap-3">
              <li>
                • Kamadhenu Bus Service was first started by my father, M.A.
                Ganesan, in the year 1948. This business had a large fleet of
                buses and was operating on key routes with Vellore as its base.
              </li>
              <li>
                • GSL Travels was started in the year 2011. This travel business
                is engaged in Omni Bus Services on key routes from Vellore
              </li>
              <li>
                • Rishab Parking Point. It started in the year 1995. This
                parking point is engaged in the business of yard management of
                heavy vehicle
              </li>
              <li>
                • Sri Sai Rishab Auto Garage was started in the year 1993. This
                enterprise is engaged in the business of buying and selling
                second-hand buses. It is located at No. 24, Chennai-Bangalore
                N.H., Abdulapuram, Mottur, along the Chennai-Bangalore highway.
                The annual revenue generated from this enterprise is Rs. 7 crore
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full min-h-[50vh] flex items-start justify-center gap-x-10 flex-wrap relative top-[20vh] lg:pl-0 pl-10">
          <div className="w-[400px] h-[400px] flex items-center justify-center flex-col gap-3">
            <h1 className="text-[20px] font-Comfortaa w-full">
              Chairman/Managing Trustee
            </h1>
            <div className="w-full flex gap-2 items-center text-[15px] text-gray-500">
              <IoPhonePortraitSharp />
              <p>+9194433 22420</p>
            </div>
            <div className="w-full flex gap-2 items-center text-[15px] text-gray-500">
              <CiPhone />
              <p>0416 2903276 / 0416 2291420</p>
            </div>
            <div className="w-full flex gap-2 items-center text-[15px] text-gray-500">
              <GiWorld />
              <p>www.sreekrishnaengcollege.com</p>
            </div>
            <div className="w-full flex gap-2 items-center text-[15px] text-gray-500">
              <FaYahoo />
              <p>skce_2008@yahoo.in</p>
            </div>
            <div className="w-full flex gap-2 items-center text-[15px] text-gray-500">
              <GiWorld />
              <p>www.rishabaautogarage.com</p>
            </div>
            <div className="w-full flex gap-2 items-center text-[15px] text-gray-500">
              <GiMailbox />
              <p>srisairishab@gmail.com</p>
            </div>
          </div>
          <div className="w-[400px] h-[500px] flex items-center justify-center flex-col gap-3">
            <h1 className="text-[20px] font-Comfortaa w-full">
              SKC GROUP OF INSTITUTIONS
            </h1>
            <div className="w-full flex gap-2 items-center text-[15px] text-gray-500">
              <p>• SREE KRISHNA COLLEGE OF ENGINEERING</p>
            </div>
            <div className="w-full flex gap-2 items-center text-[15px] text-gray-500">
              <p>• SREE KRISHNA ARTS & SCIENCE COLLEGE</p>
            </div>
            <div className="w-full flex gap-2 items-center text-[15px] text-gray-500">
              <p>• NAMAKKAL TEACHERS VIDHYASHRAM MATRIC / CBSE SCHOOL</p>
            </div>
            <div className="w-full flex gap-2 items-center text-[15px] text-gray-500">
              <p>• SREE KRISHNA IAS ACADEMY</p>
            </div>
            <div className="w-full flex gap-2 items-center text-[15px] text-gray-500">
              <p>• MUPPADAI TRAINING ACADEMY</p>
            </div>
            <div className="w-full flex gap-2 items-center text-[15px] text-gray-500">
              <p>• CHENNAI IAS ACADEMY</p>
            </div>
            <div className="w-full flex gap-2 items-center text-[15px] text-gray-500">
              <p>• NEET and JEE COACHING CENTRE</p>
            </div>
            <div className="w-full flex gap-2 items-center text-[15px] text-gray-500">
              <p>• SRI KRISHNA MULTI-SPECIALTY HOSPITAL</p>
            </div>
          </div>
          <div className="w-[400px] h-[400px] flex items-center justify-center flex-col gap-3">
            <h1 className="text-[20px] font-Comfortaa w-full">
              Chairman/Managing Trustee
            </h1>
            <div className="w-full flex gap-2 items-center text-[15px] text-gray-500">
              <IoPhonePortraitSharp />
              <p>+9194433 22420</p>
            </div>
            <div className="w-full flex gap-2 items-center text-[15px] text-gray-500">
              <CiPhone />
              <p>0416 2903276 / 0416 2291420</p>
            </div>
            <div className="w-full flex gap-2 items-center text-[15px] text-gray-500">
              <GiWorld />
              <p>www.sreekrishnaengcollege.com</p>
            </div>
            <div className="w-full flex gap-2 items-center text-[15px] text-gray-500">
              <FaYahoo />
              <p>skce_2008@yahoo.in</p>
            </div>
            <div className="w-full flex gap-2 items-center text-[15px] text-gray-500">
              <GiWorld />
              <p>www.rishabaautogarage.com</p>
            </div>
            <div className="w-full flex gap-2 items-center text-[15px] text-gray-500">
              <GiMailbox />
              <p>srisairishab@gmail.com</p>
            </div>
          </div>
          <div className="w-[400px] h-[400px] flex items-center justify-center flex-col gap-3 ">
            <h1 className="text-[20px] font-Comfortaa w-full">
              Chairman/Managing Trustee
            </h1>
            <div className="w-full flex gap-2 items-center text-[15px] text-gray-500">
              <IoPhonePortraitSharp />
              <p>+9194433 22420</p>
            </div>
            <div className="w-full flex gap-2 items-center text-[15px] text-gray-500">
              <CiPhone />
              <p>0416 2903276 / 0416 2291420</p>
            </div>
            <div className="w-full flex gap-2 items-center text-[15px] text-gray-500">
              <GiWorld />
              <p>www.sreekrishnaengcollege.com</p>
            </div>
            <div className="w-full flex gap-2 items-center text-[15px] text-gray-500">
              <FaYahoo />
              <p>skce_2008@yahoo.in</p>
            </div>
            <div className="w-full flex gap-2 items-center text-[15px] text-gray-500">
              <GiWorld />
              <p>www.rishabaautogarage.com</p>
            </div>
            <div className="w-full flex gap-2 items-center text-[15px] text-gray-500">
              <GiMailbox />
              <p>srisairishab@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Chairman;
