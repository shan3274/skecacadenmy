import Image from "next/image";
import React from "react";
import { FaClock } from "react-icons/fa";

const Accouncement = () => {
  let img1 =
    "https://images.pexels.com/photos/256453/pexels-photo-256453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=10";
  let img2 =
    "https://images.pexels.com/photos/3776180/pexels-photo-3776180.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=10";
  return (
    <div className="w-full min-h-[70vh] flex items-center justify-center ">
      <div className="xl:w-[90%] w-[100%] flex items-start justify-around">
        <div className="w-[25%] h-[60vh] flex flex-col items-center overflow-scroll gap-5 border">
          <div className="w-full h-[60px]">
            <h1 className="text-[25px] font-Comfortaa w-full h-[50px] p-2 bg-gray-200 relative after:absolute after:w-[40px] after:h-[40px] after:bg-gray-200 after:top-[50%] after:rotate-[45deg] after:left-10 after:z-[-1] z-[]">
              Announcement
            </h1>
          </div>
          <div className="w-[95%] h-[100px] border-t-[3px]  border-b-[3px] flex p-3 flex-col  gap-3">
            <h1 className="font-titlefont text-[25px] text-blue-700">
              Chamer Chat
            </h1>
            <p className="flex items-center  gap-2">
              <FaClock color="gray" size={12} />
              August 8, 2024
            </p>
          </div>
          <div className="w-[95%] h-[100px] border-t-[3px]  border-b-[3px] flex p-3 flex-col  gap-3">
            <h1 className="font-titlefont text-[25px] text-blue-700">
              Chamer Chat
            </h1>
            <p className="flex items-center  gap-2">
              <FaClock color="gray" size={12} />
              August 8, 2024
            </p>
          </div>
          <div className="w-[95%] h-[100px] border-t-[3px]  border-b-[3px] flex p-3 flex-col  gap-3">
            <h1 className="font-titlefont text-[25px] text-blue-700">
              Chamer Chat
            </h1>
            <p className="flex items-center  gap-2">
              <FaClock color="gray" size={12} />
              August 8, 2024
            </p>
          </div>
          <div className="w-[95%] h-[100px] border-t-[3px]  border-b-[3px] flex p-3 flex-col  gap-3">
            <h1 className="font-titlefont text-[25px] text-blue-700">
              Chamer Chat
            </h1>
            <p className="flex items-center  gap-2">
              <FaClock color="gray" size={12} />
              August 8, 2024
            </p>
          </div>
          <div className="w-[95%] h-[100px] border-t-[3px]  border-b-[3px] flex p-3 flex-col  gap-3">
            <h1 className="font-titlefont text-[25px] text-blue-700">
              Chamer Chat
            </h1>
            <p className="flex items-center  gap-2">
              <FaClock color="gray" size={12} />
              August 8, 2024
            </p>
          </div>
          <div className="w-[95%] h-[100px] border-t-[3px]  border-b-[3px] flex p-3 flex-col  gap-3">
            <h1 className="font-titlefont text-[25px] text-blue-700">
              Chamer Chat
            </h1>
            <p className="flex items-center  gap-2">
              <FaClock color="gray" size={12} />
              August 8, 2024
            </p>
          </div>
        </div>
        <div className="w-[75%] h-[60vh] flex items-center justify-center gap-5 flex-wrap">
          <div className="w-[300px] overflow-hidden rounded-[50px] relative drop-shadow-xl">
            {" "}
            <Image
              loader={() => (img1 = img1)}
              src={img1}
              width={0}
              height={0}
              alt=""
              className="w-full drop-shadow-xl"
            />
            <div className="absolute w-full aspect-[4/6] bg-black/10 top-0 flex flex-col justify-end pb-10 text-white pl-2">
              <p className="text-[10px] font-poppins w-[90%] text-justify">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint
                dolorum placeat cupiditate fugit ad impedit debitis explicabo
                unde ducimus! Perspiciatis, repellendus impedit! Distinctio
                consequatur aliquid rem accusantium, sed perferendis reiciendis.
              </p>
            </div>
          </div>
          <div className="w-[600px] h-[80%] flex items-center justify-center gap-2">
            <div className="w-[50%] h-full border bg-white rounded-[30px] flex items-center justify-center flex-col gap-5 drop-shadow-xl">
              <Image
                loader={() => (img2 = img2)}
                src={img2}
                width={0}
                height={0}
                className="w-[90%] rounded-md aspect-[4/3]"
              />
              <div className="w-[90%] flex justify-between text-[10px] font-poppins text-gray-500 font-[200]">
                <p>some text</p>
                <p>20-05-2000</p>
              </div>
              <h1 className="w-[90%] font-Comfortaa">This is heading</h1>
              <p className="text-[10px] w-[90%] font-poppins text-gray-500 text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                vitae delectus impedit voluptatum ipsa error doloremque
                excepturi libero consequuntur magni voluptates distinctio
                accusamus deleniti, adipisci sapiente explicabo? Dolor, pariatur
                quidem?
              </p>
            </div>
            <div className="w-[50%] h-full flex flex-col items-center justify-center gap-5">
              <div className="w-full h-[50%] flex items-center justify-center flex-col gap-5 border bg-white drop-shadow-xl rounded-[30px]">
                <div className="w-[90%] flex justify-between text-[10px] font-poppins text-gray-500 font-[200]">
                  <p>some text</p>
                  <p>20-05-2000</p>
                </div>
                <h1 className="w-[90%] font-Comfortaa">This is heading</h1>
                <p className="text-[10px] w-[90%] font-poppins text-gray-500 text-justify">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                  vitae delectus impedit voluptatum ipsa error doloremque
                  excepturi libero consequuntur magni voluptates distinctio
                  accusamus deleniti, adipisci sapiente explicabo? Dolor,
                  pariatur quidem?
                </p>
              </div>
              <div className="w-full h-[50%] flex items-center justify-center flex-col gap-5 border bg-white drop-shadow-xl rounded-[30px]">
                <div className="w-[90%] flex justify-between text-[10px] font-poppins text-gray-500 font-[200]">
                  <p>some text</p>
                  <p>20-05-2000</p>
                </div>
                <h1 className="w-[90%] font-Comfortaa">This is heading</h1>
                <p className="text-[10px] w-[90%] font-poppins text-gray-500 text-justify">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                  vitae delectus impedit voluptatum ipsa error doloremque
                  excepturi libero consequuntur magni voluptates distinctio
                  accusamus deleniti, adipisci sapiente explicabo? Dolor,
                  pariatur quidem?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accouncement;
