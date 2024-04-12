// import Footer from "@/components/Footer";
// import Layout1 from "@/components/Layout1";
// import { db } from "@/utils/firebase";
// import { addDoc, collection } from "firebase/firestore";
// import React, { useEffect, useState } from "react";
// import { AiOutlineSend } from "react-icons/ai";

// const index = () => {
//   const [scrollLength, setScrollLength] = useState(0);

//   const [currHeight, setCurrHeight] = useState(0);
//   useEffect(() => {
//     setCurrHeight(window.innerHeight);
//     const handleScroll = () => {
//       const calculatedScrollLength = window.scrollY;
//       setScrollLength(calculatedScrollLength);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [scrollLength]);

//   const data = {
//     h1: "FIND US",
//     h2: "SKC GROUP OF INSTITUTION",
//     p1: " UNAI, ANACIUT POST, VELLORE-632101. 9894216849, 94433 22420, 90474 31438, 04162 903276 info@sreekrishnaengcollege.com",
//     p2: " UNAI, ANACIUT POST, VELLORE-632101. 9894216849, 94433 22420, 90474 31438, 04162 903276 info@sreekrishnaengcollege.com",
//     h3: "Trust Office: SKC GROUP OF INSTITUTION,",
//     bg: [
//       "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1772&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     ],
//     nameplate: {
//       h1: "SKC GROUP OF INSTITUTION",
//     },
//   };

//   const [name, setName] = useState();
//   const [email, setEmail] = useState();
//   const [phone, setPhone] = useState();
//   const [reason, setReason] = useState();
//   const uploadData = async () => {
//     if (
//       name !== undefined &&
//       email !== undefined &&
//       phone !== undefined &&
//       reason !== undefined
//     ) {
//       await addDoc(collection(db, "admin/hmFVCLm25ILorXOT3Ul3/contact"), {
//         name: name,
//         email: email,
//         phone: phone,
//         reason: reason,
//       })
//         .then(() => {
//           setName();
//           setEmail();
//           setPhone();
//           setReason();
//           alert("done");
//         })
//         .catch((err) => {
//           alert(err);
//         });
//     } else {
//       alert("please please all details");
//     }
//   };

//   return (
//     <div>
//       <Layout1 data={data} />
//       <div className="w-full h-[80vh] lg:flex-row flex-col flex items-center justify-center gap-5 bg-[#dedede]">
//         <div className="w-[40%] h-[70%] flex flex-col justify-around ">
//           <h1 className="text-[40px] font-titlefont">Contact Us</h1>
//           <input
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             placeholder="Name"
//             className="w-[80%] h-[40px] rounded-md border pl-5 drop-shadow-md"
//           />
//           <input
//             type="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder="Email"
//             className="w-[80%] h-[40px] rounded-md border pl-5 drop-shadow-md"
//           />
//           <input
//             type="text"
//             value={phone}
//             onChange={(e) => setPhone(e.target.value)}
//             placeholder="Phone"
//             className="w-[80%] h-[40px] rounded-md border pl-5 drop-shadow-md"
//           />
//           <textarea
//             value={reason}
//             onChange={(e) => setReason(e.target.value)}
//             placeholder="Your Comments"
//             className="w-[80%] h-[100px] rounded-md border p-5 drop-shadow-md resize-none"
//           />
//           <button
//             className=" flex w-[150px] h-[40px] bg-blue-500 text-white items-center justify-center rounded-lg duration-300 hover:scale-[1.05] gap-2"
//             onClick={() => uploadData()}
//           >
//             Send
//             <AiOutlineSend />
//           </button>
//         </div>
//         <iframe
//           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.526094457245!2d78.96723507518894!3d12.873856587432616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad144bcb1d4297%3A0xafb8d6afb086d35c!2sSree%20Krishna%20College%20of%20Engineering%20(Counseling%20Code%20%3A%201438)!5e0!3m2!1sen!2sin!4v1708443757284!5m2!1sen!2sin"
//           width="600"
//           height="450"
//           allowfullscreen=""
//           loading="lazy"
//           referrerpolicy="no-referrer-when-downgrade"
//           className="w-[40%] rounded-lg drop-shadow-lg"
//         ></iframe>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default index;

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React, { useEffect, useState } from "react";
import { IoSend } from "react-icons/io5";
import { db } from "@/utils/firebase";
import { addDoc, collection } from "firebase/firestore";

const index = () => {
  const [scrollLength, setScrollLength] = useState();
  useEffect(() => {
    setScrollLength(100);
  }, []);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [reason, setReason] = useState("");
  const uploadData = async () => {
    if (name !== "" && email !== "" && phone !== "" && reason !== "") {
      await addDoc(collection(db, "admin/hmFVCLm25ILorXOT3Ul3/contact"), {
        name: name,
        email: email,
        phone: phone,
        reason: reason,
      })
        .then(() => {
          setName("");
          setEmail("");
          setPhone("");
          setReason("");
          alert("done");
        })
        .catch((err) => {
          alert(err);
        });
    } else {
      alert("please please all details");
    }
  };

  return (
    <div>
      <Header scrollLength={scrollLength} />
      <div className="w-full min-h-[80vh] flex items-center justify-center relative top-[10rem]  mb-20">
        <div className="w-[80%] h-[60vh] flex items-center justify-around gap-10">
          <div className="w-[50%] flex flex-col gap-5">
            <h1 className="text-[40px] font-Comfortaa">Find us</h1>
            <p className="text-[12px] font-poppins text-gray-500">
              UNAI, ANACIUT POST, VELLORE-632101. <br />
              9894216849, 9443322420, 90474 31438, 04162 903276
              <br /> info@sreekrishnaengcollege.com
            </p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.526094457245!2d78.96723507518894!3d12.873856587432616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad144bcb1d4297%3A0xafb8d6afb086d35c!2sSree%20Krishna%20College%20of%20Engineering%20(Counseling%20Code%20%3A%201438)!5e0!3m2!1sen!2sin!4v1708443757284!5m2!1sen!2sin"
              width="600"
              height="450"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              className=" h-[40vh] rounded-lg drop-shadow-lg"
            ></iframe>
          </div>
          <div className="w-[40%] flex flex-col gap-5  border bg-white h-[60vh] rounded-xl drop-shadow-xl">
            <div className="w-full h-[15%] border-b flex items-center pl-5">
              <h1 className="font-Comfortaa text-[20px] text-blue-600">
                Get in touch
              </h1>
            </div>
            <div className="w-full pl-10 flex items-center gap-5">
              <label
                htmlFor="name"
                className="text-[13px] font-poppins text-gray-500 "
              >
                Name
              </label>

              <input
                type="text"
                id="name"
                className="w-[70%] border-b "
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="w-full pl-10 flex items-center gap-5">
              <label
                htmlFor="email"
                className="text-[13px] font-poppins text-gray-500 "
              >
                Email
              </label>

              <input
                type="email"
                id="email"
                className="w-[70%] border-b "
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="w-full pl-10 flex items-center gap-5">
              <label
                htmlFor="phone"
                className="text-[13px] font-poppins text-gray-500 "
              >
                Phone
              </label>

              <input
                type="text"
                id="phone"
                className="w-[70%] border-b "
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="w-full pl-10 flex  gap-5 flex-col">
              <label
                htmlFor="reason"
                className="text-[13px] font-poppins text-gray-500 "
              >
                Reason
              </label>

              <textarea
                type="text"
                id="reason"
                className="w-[90%] resize-none border h-[17vh] rounded-lg p-5"
                onChange={(e) => setReason(e.target.value)}
              />
            </div>

            <button
              onClick={() => uploadData()}
              className="flex w-[150px] h-[40px] ml-10 text-[14px] items-center justify-center gap-2 bg-blue-600 text-white rounded-xl font-poppins duration-300 hover:scale-105"
            >
              Send <IoSend />
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default index;
