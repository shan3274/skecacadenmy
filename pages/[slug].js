import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Page = () => {
  const img1 =
    "https://img.freepik.com/premium-photo/south-indian-college-girl-student-is-smiling-wearing-white-shirt-black-pants_905085-7.jpg";
  const img2 =
    "https://images.pexels.com/photos/6936400/pexels-photo-6936400.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  const [scrollLength, setScrollLength] = useState();
  useEffect(() => {
    setScrollLength(100);
  }, []);

  let [image, setImgage] = useState(img1);
  let [image2, setImgage2] = useState(img2);
  const dep = "about";
  return (
    <>
      <Header scrollLength={scrollLength} />
      <div className="w-full h-screen z-[999] flex items-center justify-center gap-5 flex-col my-10 mt-[20vh]">
        <h1 className="text-[40px] font-Comfortaa">This is heading</h1>
        <p className="w-[60%] text-center text-[13px] text-gray-500 font-poppins">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus
          odio laborum vitae nisi dolorem fugit cum. Sint aspernatur nisi, ea
          veniam mollitia consequuntur, laudantium ut doloremque accusantium
          odit vel est? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Molestiae quo porro eos quis est consectetur doloremque praesentium
          nulla possimus. Tempore quis expedita atque autem ab fuga dolorem
          tenetur sit voluptas.
        </p>

        <div className="w-[70%]  flex items-center justify-center gap-5 flex-wrap relative ">
          <div className="w-[50%] h-[37vh] overflow-hidden rounded-lg drop-shadow-xl border relative">
            <h1 className="absolute z-[2] text-white bottom-5 left-5 w-[80%]">
              Some text will be here and it will be replaced with something so
              don't worry
            </h1>
            <div className="absolute top-0 left-0 w-full h-full bg-black/20"></div>
            <Image
              loader={() => (image = image)}
              src={image}
              width={0}
              height={0}
              className="w-full"
            />
          </div>
          <div className="w-[30%] h-[37vh] bg-[#eba5a5] border drop-shadow-xl rounded-md flex flex-col px-5 py-10 justify-center gap-5 text-white">
            <h1 className="text-[25px] font-Comfortaa">This is heading</h1>
            <p className="text-[10px] font-poppins text-gray-100">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Recusandae cupiditate veritatis quibusdam in excepturi. Id facere
              et dolores deserunt. Necessitatibus repellat ratione natus,
              inventore quas assumenda dicta animi rerum eligendi!
            </p>
            <p className="text-[10px] font-poppins text-gray-100">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. repellat
              ratione natus, inventore quas assumenda dicta animi rerum
              eligendi!
            </p>
          </div>
        </div>
        <div className="w-[70%]  flex items-center justify-center gap-5 flex-wrap relative ">
          <div className="w-[30%] h-[37vh] bg-[#737373] border drop-shadow-xl rounded-md flex flex-col px-5 py-10 justify-center gap-5 text-white overflow-hidden">
            <h1 className="text-[25px] font-Comfortaa">This is heading</h1>
            <p className="text-[10px] font-poppins text-gray-100">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
            <div className="w-full flex  items-center justify-center">
              <Image
                loader={() => (image2 = image2)}
                src={image2}
                width={0}
                height={0}
                className="w-[90%] rounded-lg"
              />
            </div>
          </div>
          <div className="w-[50%] h-[37vh] overflow-hidden rounded-lg drop-shadow-xl bg-white  relative bg-[#c5e1ea]flex flex-col p-10 pr-2 justify-center gap-5">
            <h1 className="text-[25px] w-full font-Comfortaa">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
            </h1>
            <p className="text-[11px] text-gray-500 font-poppins">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
              corrupti reprehenderit animi dolorum quos? Dolores facilis,
              quibusdam, veniam consectetur facere deleniti necessitatibus iusto
              ratione libero veritatis repudiandae vero dolor delectus.
            </p>
            <p className="text-[11px] text-gray-500 font-poppins">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
              corrupti reprehenderit animi dolorum quos? Dolores facilis,
            </p>
          </div>
        </div>
      </div>
      <div className="w-full h-[50vh] flex flex-col  items-center justify-center mb-10">
        <div className="w-[80%] h-[50vh] flex flex-col items-center justify-center gap-5">
          <h1 className="text-[30px] font-Comfortaa">
            This is heading it will be replaced soon
          </h1>
          <p className="text-[12px] text-center w-[70%] font-poppins text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            vel, atque ratione impedit, corrupti quo explicabo quam sapiente
            facere quod nam obcaecati? Fugit quos nulla, maiores accusantium
            voluptate laborum dolore. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. At quasi molestias impedit totam quibusdam nobis
            numquam repellendus perspiciatis deleniti eum reprehenderit ab
            officia exercitationem mollitia deserunt dolor, cum eos blanditiis.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Page;
