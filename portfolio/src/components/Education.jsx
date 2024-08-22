import React from "react";
import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
  return (
    <div className="container mx-auto p-4 ">
      <div className="flex flex-wrap -mx-4">
        <div className=" w-full lg:w-1/2 mb-4 lg:mb-0">
          <div className="edu flex flex-col justify-between sm:py-20 w-full h-[822px] rounded-lg">
            <div className="flex flex-col gap-3 md:px-32 sm:px-8">
              <h1 className="text-sm font-semibold text-[#80DB66]">
                EDUCATION
              </h1>
              <h1 className="text-3xl text-[#2E2E37] font-semibold">
                My Education
              </h1>
              <p className="text-[#2E2E37]">
                Sed ut perspiciatis unde omnis iste natus kobita tumi sopno
                charini hoye khbor nio na sit voluptatem accusantium dolore.
              </p>
            </div>
            <div className="flex flex-row gap-4 sm:px-8 md:px-32">
              <div className="mt-2 text-xl h-10 p-4  text-white bg-[#80DB66] flex items-center  rounded  cursor-pointer">
                <FaGraduationCap />
              </div>

              <div>
                <p className="text-xl font-semibold text-[#2E2E37] ">
                  Masters in Computer Science
                </p>
                <h1 className="text-xs p-2 text-[#2E2E37] font-semibold">
                  New York University ( 2012 - 2016 )
                </h1>
                <p className="text-[#2E2E37]">
                  Sed ut perspiciatis unde omnis iste natus kobita tumi sopno
                  charini hoye khbor nio na sit voluptatem accusantium dolore.
                </p>
              </div>
            </div>
            <div className="flex flex-row h-auto gap-4 sm:px-8 md:px-32">
              <div className="mt-2 text-xl h-10 p-4  text-white bg-[#80DB66] flex items-center  rounded  cursor-pointer">
                <FaGraduationCap />
              </div>
              <div>
                <p className="text-xl font-semibold text-[#2E2E37] ">
                  Bachelor in Computer Engineering
                </p>
                <h1 className="text-xs p-2 text-[#2E2E37] font-semibold">
                  Dhaka University ( 2008 - 2011 )
                </h1>
                <p className="text-[#2E2E37]">
                  Sed ut perspiciatis unde omnis iste natus kobita tumi sopno
                  charini hoye khbor nio na sit voluptatem accusantium dolore.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-4 sm:px-8 md:px-32">
              <div className="mt-2 text-xl h-10 p-4  text-white bg-[#80DB66] flex items-center  rounded  cursor-pointer">
                <FaGraduationCap />
              </div>
              <div>
                <p className="text-xl font-semibold text-[#2E2E37] ">
                  Diploma in Graphic Design
                </p>
                <h1 className="text-xs p-2 text-[#2E2E37] font-semibold">
                  Bangla College ( 2006 - 2008 )
                </h1>
                <p className="text-[#2E2E37]">
                  Sed ut perspiciatis unde omnis iste natus kobita tumi sopno
                  charini hoye khbor nio na sit voluptatem accusantium dolore.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 px-4">
          <img
            src="../../public/education-img.jpg"
            alt="Education"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Education;
