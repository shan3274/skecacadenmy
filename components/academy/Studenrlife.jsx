import Image from "next/image";
import Link from "next/link";
import React from "react";

const Studenrlife = () => {
  const data = [
    {
      h1: "Student Affairs",
      p1: "Comprising more than 25 offices and centers, Student Affairs provides a broad range of services and support to Stanford students, including leadership development, residential programs, public service, career exploration and community engagement.",
      button: "Student Affairs",
      img: "https://www.stanford.edu/wp-content/uploads/2022/04/Student-Affairs.jpg",
    },
    {
      h1: "Housing & Dining",
      p1: "Nearly all undergraduates and about 72% of graduate students reside in 81 undergraduate student residences and 151 graduate on-campus residences. Nine dining halls, a teaching kitchen, and organic gardens provide the campus community with healthy, sustainable meals.",
      button: "Residential & Dining Enterprises",
      img: "https://www.stanford.edu/wp-content/uploads/2022/04/housing-and-dining.jpg",
    },
    {
      h1: "Community Engagement & Diversity",
      p1: "Other programs supporting the student community  all undergraduates and about 72% of graduate students reside in 81 undergraduate student residences and 151 graduate on-campus residences. Nine dining halls, a teaching kitchen, and organic gardens",
      button: "Graduate Life Office",
      img: "https://www.stanford.edu/wp-content/uploads/2022/04/20210722_Lakewood_Elementary_N6A3682-2048x1366.jpg",
    },
  ];

  return (
    <div className="w-full h-[90vh] flex flex-col items-center justify-center gap-3">
      <div className="w-[80%] h-[10%] flex items-center justify-center relative top-10">
        <h1 className="text-[40px] font-Comfortaa">This is heading </h1>
      </div>
      <div className="w-[80%] h-[90%] flex items-center justify-around gap-5 flex-wrap">
        {data.map((item) => {
          return (
            <div className="w-[360px] h-[80%] flex flex-col items-center justify-around gap-5">
              <Image
                loader={() => (item.img = item.img)}
                src={item.img}
                width={0}
                height={0}
                className="w-full"
              />
              <div className="w-full flex flex-col  gap-5">
                <h1 className="text-[25px] font-Comfortaa">{item.h1}</h1>
                <p className="text-[12px] w-[90%] font-poppins text-gray-500">
                  {item.p1}
                </p>
                <Link className="text-[13px] text-blue-500" href="#">
                  {item.button}
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Studenrlife;
