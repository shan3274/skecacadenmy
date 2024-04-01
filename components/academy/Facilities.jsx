import Image from "next/image";
import React from "react";

const Facilities = () => {
  const data = [
    {
      img: "https://images.pexels.com/photos/3401403/pexels-photo-3401403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=10",
      title: "title 1",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut ea mollitia, facilis expedita amet cum explicabo distinctio provident vel omnis inventore neque repellendus recusandae aperiam ullam eligendi dicta tempore. Commodi!",
    },
    {
      img: "https://images.pexels.com/photos/5212653/pexels-photo-5212653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=10",
      title: "title 2",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut ea mollitia, facilis expedita amet cum explicabo distinctio provident vel omnis inventore neque repellendus recusandae aperiam ullam eligendi dicta tempore. Commodi!",
    },
    {
      img: "https://images.pexels.com/photos/5211435/pexels-photo-5211435.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=10",
      title: "title 3",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut ea mollitia, facilis expedita amet cum explicabo distinctio provident vel omnis inventore neque repellendus recusandae aperiam ullam eligendi dicta tempore. Commodi!",
    },
  ];
  return (
    <div className="w-full min-h-[50vh] flex flex-col items-center justify-center gap-5">
      <div className="w-[70%] min-h-[10vh] flex items-center justify-between">
        <h1 className="text-[25px] font-poppins">Facilities</h1>
        <svg
          width="80"
          height="32"
          viewBox="0 0 80 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.0013 29.3337C23.3651 29.3337 29.3346 23.3641 29.3346 16.0003C29.3346 8.63653 23.3651 2.66699 16.0013 2.66699C8.63751 2.66699 2.66797 8.63653 2.66797 16.0003C2.66797 23.3641 8.63751 29.3337 16.0013 29.3337Z"
            stroke="#5B5B5B"
            stroke-width="1.5"
            stroke-linecap="square"
            stroke-linejoin="round"
          />
          <path
            d="M18.6654 9.33301L13.332 15.9997L18.6654 22.6663"
            stroke="#5B5B5B"
            stroke-width="1.5"
          />
          <path
            d="M63.9987 29.3337C56.6349 29.3337 50.6654 23.3641 50.6654 16.0003C50.6654 8.63653 56.6349 2.66699 63.9987 2.66699C71.3625 2.66699 77.332 8.63653 77.332 16.0003C77.332 23.3641 71.3625 29.3337 63.9987 29.3337Z"
            stroke="#5B5B5B"
            stroke-width="1.5"
            stroke-linecap="square"
            stroke-linejoin="round"
          />
          <path
            d="M61.3346 9.33301L66.668 15.9997L61.3346 22.6663"
            stroke="#5B5B5B"
            stroke-width="1.5"
          />
        </svg>
      </div>
      <div className="w-[80%] min-h-[40vh] gap-y-10 flex items-center justify-around flex-wrap mb-10">
        {data.map((item) => {
          return (
            <div className="w-[300px] h-[400px] bg-gray-100 rounded-xl flex pl-5 justify-center flex-col gap-5 duration-300 hover:scale-105">
              <Image
                loader={() => (item.img = item.img)}
                src={item.img}
                width={0}
                height={0}
                className="w-[90%] rounded-md"
              />
              <h1 className="text-[20px] font-poppins">{item.title}</h1>
              <p className="text-[12px] w-[90%] text-gray-500 font-[200] font-poppins">
                {item.text}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Facilities;
