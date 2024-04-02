import Image from "next/image";
import Link from "next/link";
import React from "react";

const Features = () => {
  let img5 =
    "https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  let img6 =
    "https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  return (
    <div className="w-full min-h-[65vh] flex items-center justify-center gap-5 flex-col">
      <h1 className="text-[40px] font-titlefont">Features</h1>
      <div className="w-[100%] min-h-[60vh] flex items-center justify-center flex-wrap gap-10 mb-10">
        <div className="w-[600px] h-[500px] bg-[#ffe7d7] flex flex-col gap-5 p-5">
          <h1 className="text-[20px] font-poppins font-[500] pt-10">
            Analyze your Data
          </h1>
          <p className="text-[12px] w-[80%] text-gray-500">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem
            distinctio itaque sapiente est veritatis! Doloremque quisquam
            asperiores accusantium adipisci laboriosam impedit aliquam non, modi
            sapiente quis! Architecto repellendus nisi similique?
          </p>
          <Link href="" className="flex items-center gap-2">
            Read more{" "}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M21 12C21 12.5523 20.5523 13 20 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H20C20.5523 11 21 11.4477 21 12Z"
                fill="black"
              />
              <path
                d="M18.9722 12C18.8789 11.8452 18.6833 11.5671 18.4695 11.3251C18.0437 10.8432 17.457 10.2928 16.8445 9.76105C16.237 9.23357 15.6265 8.74365 15.1661 8.38437C14.9365 8.20515 14.5402 7.90576 14.407 7.80521C13.9624 7.47768 13.8674 6.85173 14.1949 6.40706C14.5224 5.96236 15.1484 5.86736 15.5931 6.19487L15.5968 6.19767C15.7412 6.30672 16.1598 6.62291 16.3966 6.80767C16.8737 7.18002 17.5132 7.69303 18.1557 8.25084C18.7932 8.80434 19.4565 9.4216 19.9682 10.0008C20.2231 10.2892 20.4615 10.5918 20.6417 10.8906C20.8053 11.162 21.0001 11.5568 21.0001 12C21.0001 12.4431 20.8053 12.838 20.6417 13.1094C20.4615 13.4082 20.2231 13.7108 19.9682 13.9992C19.4565 14.5784 18.7932 15.1957 18.1557 15.7492C17.5132 16.307 16.8737 16.82 16.3966 17.1923C16.1598 17.3771 15.7415 17.6931 15.5971 17.8021L15.5931 17.8051C15.1484 18.1326 14.5224 18.0376 14.1949 17.5929C13.8674 17.1483 13.9624 16.5223 14.407 16.1948C14.5402 16.0942 14.9365 15.7948 15.1661 15.6156C15.6265 15.2564 16.237 14.7664 16.8445 14.2389C17.457 13.7072 18.0437 13.1568 18.4695 12.6749C18.6833 12.4329 18.8789 12.1548 18.9722 12Z"
                fill="black"
              />
            </svg>
          </Link>
          <div className=" relative">
            <Image
              loader={() => (img5 = img5)}
              src={img5}
              width={0}
              height={0}
              alt=""
              className="w-[60%] rounded-lg drop-shadow-xl"
            />
            <div className="absolute w-[200px] h-[200px] bg-gray-100 drop-shadow-xl -top-10 right-[100px] flex flex-col p-5 gap-3">
              <h1 className="text-[15px] font-poppins">Inside overview</h1>
              <div className="w-[160px] h-[30px] flex p-2 justify-between text-[10px] bg-white">
                <p>Compaings</p>
                <p className="bg-green-200 px-2 rounded-md">1552</p>
              </div>
              <div className="w-[160px] h-[30px] flex p-2 justify-between text-[10px] bg-white">
                <p>Compaings</p>
                <p className="bg-green-200 px-2 rounded-md">1552</p>
              </div>
              <div className="w-[160px] h-[30px] flex p-2 justify-between text-[10px] bg-white">
                <p>Compaings</p>
                <p className="bg-green-200 px-2 rounded-md">1552</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[600px] h-[500px] bg-[#c4ffff] flex flex-col gap-5 p-5">
          <h1 className="text-[20px] font-poppins font-[500] pt-10">
            Collaborate Securely
          </h1>
          <p className="text-[12px] w-[80%] text-gray-500">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem
            distinctio itaque sapiente est veritatis! Doloremque quisquam
            asperiores accusantium adipisci laboriosam impedit aliquam non, modi
            sapiente quis! Architecto repellendus nisi similique?
          </p>
          <Link href="" className="flex items-center gap-2">
            Read more{" "}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M21 12C21 12.5523 20.5523 13 20 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H20C20.5523 11 21 11.4477 21 12Z"
                fill="black"
              />
              <path
                d="M18.9722 12C18.8789 11.8452 18.6833 11.5671 18.4695 11.3251C18.0437 10.8432 17.457 10.2928 16.8445 9.76105C16.237 9.23357 15.6265 8.74365 15.1661 8.38437C14.9365 8.20515 14.5402 7.90576 14.407 7.80521C13.9624 7.47768 13.8674 6.85173 14.1949 6.40706C14.5224 5.96236 15.1484 5.86736 15.5931 6.19487L15.5968 6.19767C15.7412 6.30672 16.1598 6.62291 16.3966 6.80767C16.8737 7.18002 17.5132 7.69303 18.1557 8.25084C18.7932 8.80434 19.4565 9.4216 19.9682 10.0008C20.2231 10.2892 20.4615 10.5918 20.6417 10.8906C20.8053 11.162 21.0001 11.5568 21.0001 12C21.0001 12.4431 20.8053 12.838 20.6417 13.1094C20.4615 13.4082 20.2231 13.7108 19.9682 13.9992C19.4565 14.5784 18.7932 15.1957 18.1557 15.7492C17.5132 16.307 16.8737 16.82 16.3966 17.1923C16.1598 17.3771 15.7415 17.6931 15.5971 17.8021L15.5931 17.8051C15.1484 18.1326 14.5224 18.0376 14.1949 17.5929C13.8674 17.1483 13.9624 16.5223 14.407 16.1948C14.5402 16.0942 14.9365 15.7948 15.1661 15.6156C15.6265 15.2564 16.237 14.7664 16.8445 14.2389C17.457 13.7072 18.0437 13.1568 18.4695 12.6749C18.6833 12.4329 18.8789 12.1548 18.9722 12Z"
                fill="black"
              />
            </svg>
          </Link>
          <div className=" relative">
            <Image
              loader={() => (img6 = img6)}
              src={img6}
              width={0}
              height={0}
              alt=""
              className="w-[60%] rounded-lg drop-shadow-xl"
            />
            <div className="absolute w-[200px] h-[200px] bg-gray-100 drop-shadow-xl -top-10 right-[100px] flex flex-col p-5 gap-3">
              <h1 className="text-[15px] font-poppins">Inside overview</h1>
              <div className="w-[160px] h-[30px] flex p-2 justify-between text-[10px] bg-white">
                <p>Compaings</p>
                <p className="bg-green-200 px-2 rounded-md">1552</p>
              </div>
              <div className="w-[160px] h-[30px] flex p-2 justify-between text-[10px] bg-white">
                <p>Compaings</p>
                <p className="bg-green-200 px-2 rounded-md">1552</p>
              </div>
              <div className="w-[160px] h-[30px] flex p-2 justify-between text-[10px] bg-white">
                <p>Compaings</p>
                <p className="bg-green-200 px-2 rounded-md">1552</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
