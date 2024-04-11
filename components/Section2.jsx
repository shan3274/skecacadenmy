import React from "react";
import {
  affordableFees,
  cafeteria,
  labFacilities,
  onlineEngineeringCounseling,
  onlineScholarshipApplication,
  placementSupport,
  transportation,
} from "@/utils/facilitiesdata";

const Section2 = () => {
  const facilities = [
    onlineEngineeringCounseling,
    onlineScholarshipApplication,
    transportation,
    placementSupport,
    affordableFees,
    labFacilities,
    cafeteria,
  ];

  return (
    <div className="w-full min-h-[80vh] bg-white z-[10] gap-5 relative flex items-center justify-center flex-col my-10 mt-20">
      <h1 className="text-[40px] font-Comfortaa">Explore Our</h1>
      <h1 className="text-[35px] font-Comfortaa text-blue-600">Facilities</h1>
      <p className="w-[60%] text-center text-[12px] font-poppins text-gray-500">
        At SKC Academy, we pride ourselves on providing a comprehensive range of
        facilities to support our students in their academic journey and
        personal growth. Our commitment to excellence begins with offering
        assistance for online engineering counseling and scholarship
        applications, ensuring accessibility and opportunity for all. With
        convenient transportation services, students can easily commute to and
        from campus, while our dedicated placement support team helps pave the
        way for future career success. We understand the importance of
        affordability, which is why we offer competitive fee structures to make
        quality education accessible to all. Our state-of-the-art laboratory
        facilities provide hands-on learning experiences, complemented by a
        welcoming cafeteria environment that fosters social interaction and
        relaxation. At SKC Academy, we strive to create an inclusive and
        supportive environment where every student can thrive academically and
        personally.
      </p>
      <div className="w-[80%] flex items-center justify-center flex-wrap gap-20 m-10">
        {facilities.map((facility, key) => {
          return (
            <div className="w-[250px] h-[200px] bg-[#efeeee] border drop-shadow-xl rounded-lg flex flex-col gap-5 items-center justify-center duration-300 hover:scale-110 cursor-pointer">
              <h1 className="text-[13px] w-[80%] text-center font-Comfortaa">
                {facility?.title}
              </h1>
              <p className="text-center text-[10px] w-[90%] text-gray-500">
                {facility?.paragraph1}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Section2;
