import Adminheader from "@/components/Adminheader";
import Adminmodel from "@/components/Adminmodel";
import { auth, db } from "@/utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { collection, getDocs } from "firebase/firestore";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const Page = () => {
  const router = useRouter();
  const [data, setData] = useState();
  const [close, setClose] = useState(false);



  useEffect(() => {
    onAuthStateChanged(auth, (currenuser) => {
      if (currenuser == null) router.push("/admin");
    });
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(
          collection(db, `admin/hmFVCLm25ILorXOT3Ul3/${router.query.slug}`)
        );
        const responseData = querySnapshot.docs.map((doc) => doc.data());
        setData(responseData);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, [router.query.slug]);

  const [data1, setData1] = useState();

  return (
    <div className="bg-gray-100 pb-10">
      <Adminheader />
      {data !== undefined ? (
        <div className="w-full h-[80vh] flex flex-col items-center justify-center my-20 ">
          <h1 className="text-[40px] font-Comfortaa text-gray-600">
            {router.query.slug.toUpperCase()}
          </h1>
          <div className="w-[80%] min-h-[80vh] flex items-center justify-around flex-wrap gap-5 ">
            {data?.map((item) => {
              return (
                <div
                  className="w-[300px] h-[250px] bg-white drop-shadow-xl duration-300 hover:scale-110 cursor-pointer rounded-lg flex flex-col items-center justify-center gap-5"
                  onClick={() => {
                    setData1(item);
                    setClose(true);
                  }}
                >
                  {item?.name && (
                    <p className="text-[15px] font-poppins">{item?.name}</p>
                  )}

                  {item?.firstName && (
                    <p className="text-[15px] font-poppins">
                      {item?.firstName} {item?.lastName}
                    </p>
                  )}
                  {item?.email && (
                    <p className="text-[12px] font-poppins text-gray-500">
                      {item?.email}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="w-full h-screen flex items-center justify-center text-[40px] font-Comfortaa">
          no data
        </div>
      )}
      {close && data1 !== undefined && (
        <Adminmodel data={data1} close={close} setClose={setClose} />
      )}
    </div>
  );
};

export default Page;
