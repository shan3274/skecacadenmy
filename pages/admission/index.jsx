import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { db } from "@/utils/firebase";
import { addDoc, collection } from "firebase/firestore";
import React, { useEffect, useState } from "react";

const Index = () => {
  const [scrollLength, setScrollLength] = useState();
  useEffect(() => {
    setScrollLength(100);
  }, []);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    date: "",
    fatherFirstName: "",
    fatherLastName: "",
    motherFirstName: "",
    motherLastName: "",
    gender: "",
    nationality: "",
    streetAddress: "",
    city: "",
    country: "",
    telhome: "",
    telMobile: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    // Handle form submission here
    if (formData !== undefined) {
      await addDoc(
        collection(db, "admin/hmFVCLm25ILorXOT3Ul3/admission"),
        formData
      )
        .then(() => {
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            date: "",
            fatherFirstName: "",
            fatherLastName: "",
            motherFirstName: "",
            motherLastName: "",
            gender: "",
            nationality: "",
            streetAddress: "",
            city: "",
            country: "",
            telhome: "",
            telMobile: "",
          });
          alert("done");
        })
        .catch((err) => {
          alert(err);
        });
    }
  };

  return (
    <div>
      <Header scrollLength={scrollLength} />
      <div className="w-full min-h-screen flex items-center justify-center relative top-[10rem] mb-[10rem]">
        <div className="w-[60%] min-h-screen flex flex-col gap-10 p-10">
          <h1 className="text-[40px] font-Comfortaa">
            College Registration From
          </h1>
          <div className="w-full flex flex-col gap-5">
            <label htmlFor="firstName" className="font-poppins">
              Name
            </label>
            <div className="w-full flex items-center justify-between">
              <input
                id="firstName"
                name="firstName"
                type="text"
                value={formData.firstName}
                onChange={handleChange}
                className="w-[48%] h-[40px] border pl-5 rounded-md"
                placeholder="First"
              />
              <input
                name="lastName"
                type="text"
                value={formData.lastName}
                onChange={handleChange}
                className="w-[48%] h-[40px] border pl-5 rounded-md"
                placeholder="Last"
              />
            </div>
          </div>
          <div className="w-full flex flex-col gap-5">
            <label htmlFor="date" className="font-poppins">
              Date
            </label>
            <div className="w-full flex items-center justify-between">
              <input
                id="date"
                name="date"
                type="date"
                value={formData.date}
                onChange={handleChange}
                className="w-[100%] h-[40px] border pl-5 rounded-md"
              />
            </div>
          </div>
          <div className="w-full flex flex-col gap-5">
            <label htmlFor="email" className="font-poppins">
              Email
            </label>
            <div className="w-full flex items-center justify-between">
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="w-[100%] h-[40px] border pl-5 rounded-md"
              />
            </div>
          </div>
          <div className="w-full flex flex-col gap-5">
            <label className="font-poppins" htmlFor="fatherFirstName">
              Father's name
            </label>
            <div className="w-full flex items-center justify-between">
              <input
                id="fatherFirstName"
                name="fatherFirstName"
                type="text"
                value={formData.fatherFirstName}
                onChange={handleChange}
                className="w-[48%] h-[40px] border pl-5 rounded-md"
                placeholder="First"
              />
              <input
                name="fatherLastName"
                type="text"
                value={formData.fatherLastName}
                onChange={handleChange}
                className="w-[48%] h-[40px] border pl-5 rounded-md"
                placeholder="Last"
              />
            </div>
          </div>
          <div className="w-full flex flex-col gap-5">
            <label htmlFor="motherFirstName" className="font-poppins">
              Mother's name
            </label>
            <div className="w-full flex items-center justify-between">
              <input
                id="motherFirstName"
                name="motherFirstName"
                type="text"
                value={formData.motherFirstName}
                onChange={handleChange}
                className="w-[48%] h-[40px] border pl-5 rounded-md"
                placeholder="First"
              />
              <input
                name="motherLastName"
                type="text"
                value={formData.motherLastName}
                onChange={handleChange}
                className="w-[48%] h-[40px] border pl-5 rounded-md"
                placeholder="Last"
              />
            </div>
          </div>
          <div className="w-full flex flex-col gap-5">
            <label className="font-poppins">Gender</label>
            <div className="flex gap-4">
              <input
                id="male"
                name="gender"
                type="radio"
                value="male"
                onChange={handleChange}
              />
              <label htmlFor="male">Male</label>
            </div>
            <div className="flex gap-4">
              <input
                id="female"
                name="gender"
                type="radio"
                value="female"
                onChange={handleChange}
              />
              <label htmlFor="female">Female</label>
            </div>
          </div>
          <div className="w-full flex flex-col gap-5">
            <label htmlFor="nationality" className="font-poppins">
              Nationality
            </label>
            <div className="w-full flex items-center justify-between">
              <input
                id="nationality"
                name="nationality"
                type="text"
                value={formData.nationality}
                onChange={handleChange}
                className="w-[100%] h-[40px] border pl-5 rounded-md"
              />
            </div>
          </div>
          <div className="w-full flex flex-col gap-5">
            <label htmlFor="streetAddress" className="font-poppins">
              Home Address
            </label>
            <div className="w-full flex items-center justify-between">
              <input
                id="streetAddress"
                name="streetAddress"
                type="text"
                value={formData.streetAddress}
                onChange={handleChange}
                className="w-[100%] h-[40px] border pl-5 rounded-md"
                placeholder="Street Address"
              />
            </div>
            <div className="w-full flex items-center justify-between">
              <input
                id="city"
                name="city"
                type="text"
                value={formData.city}
                onChange={handleChange}
                className="w-[48%] h-[40px] border pl-5 rounded-md"
                placeholder="City"
              />
              <input
                id="country"
                name="country"
                type="text"
                value={formData.country}
                onChange={handleChange}
                className="w-[48%] h-[40px] border pl-5 rounded-md"
                placeholder="Country"
              />
            </div>
          </div>
          <div className="w-full flex flex-col gap-5">
            <label htmlFor="telhome" className="font-poppins">
              Telephone - Home
            </label>
            <div className="w-full flex items-center justify-between">
              <input
                id="telhome"
                name="telhome"
                type="text"
                value={formData.telhome}
                onChange={handleChange}
                className="w-[100%] h-[40px] border pl-5 rounded-md"
                placeholder="### ### ####"
              />
            </div>
          </div>
          <div className="w-full flex flex-col gap-5">
            <label htmlFor="telMobile" className="font-poppins">
              Telephone - Mobile
            </label>
            <div className="w-full flex items-center justify-between">
              <input
                id="telMobile"
                name="telMobile"
                type="text"
                value={formData.telMobile}
                onChange={handleChange}
                className="w-[100%] h-[40px] border pl-5 rounded-md"
                placeholder="### ### ####"
              />
            </div>
          </div>

          <button
            onClick={handleSubmit}
            className="w-[150px] h-[40px] bg-green-500 text-white rounded-lg duration-300 hover:scale-105"
          >
            Submit
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Index;
