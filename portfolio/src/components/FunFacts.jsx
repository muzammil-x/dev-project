import React from "react";

export default function FunFacts() {
  return (
    <div className="bg-[#25262F] md:p-20 ">
      <div className=" pt-16 pl-5 pr-5 pb-5 sm:p-16 sm:pb-4 lg:grid lg:grid-cols-2 lg:place-content-center lg:place-items-center lg:space-y-[-50px] lg:space-x-[30px] ">
        <div className="lg:mb-14">
          <div className="text-[#80DB66] text-xl lg:text-2xl lg:tracking-[4px] lg:pt-3 lg:pb-3">
            Fun Facts
          </div>
          <div className="text-[#fff] text-[35px] sm:text-[42px] lg:text-6xl ">
            I Develop System that Works
          </div>
          <div className="text-[#a0a0bb] text-[18px] sm:text-[21px] lg:mt-8">
            Sed ut perspiciatis unde omnis iste natus kobita tumi sopno charini
            hoye khbor nio na sit volup sundori toma amar tumi nili mar tatem
            accusantium dolore.
          </div>
        </div>

        <div className="sm:grid sm:grid-cols-2 p-10    ">
          <div className=" flex justify-center items-center space-x-4 border-[1px] border-[#bcc7d3] rounded-lg p-7 lg:p-5 lg:m-2  ml-[15px] mr-[15px]  m-2   ">
            <div className="text-[#80DB66] text-[62px] font-bold">12</div>
            <div>
              <div className="text-white text-xl">Years of </div>
              <div className="text-white text-xl"> Experience</div>
            </div>
          </div>

          <div className=" flex justify-center items-center space-x-4    border-[1px] border-[#bcc7d3] rounded-lg p-7 lg:p-5 lg:m-2    ml-[15px] mr-[15px] m-2">
            <div className="text-[#80DB66] text-[62px] font-bold">2k</div>
            <div>
              <div className="text-white text-xl">Total </div>
              <div className="text-white text-xl"> Clients</div>
            </div>
          </div>

          <div className=" flex justify-center items-center space-x-4 border-[1px] border-[#bcc7d3] rounded-lg p-7 lg:p-5 lg:m-2  ml-[15px] mr-[15px] m-2">
            <div className="text-[#80DB66] text-[62px] font-bold">4k</div>
            <div>
              <div className="text-white text-xl">Projects </div>
              <div className="text-white text-xl"> Completed</div>
            </div>
          </div>

          <div className=" flex justify-center items-center space-x-4 border-[1px] border-[#bcc7d3] rounded-lg p-7 lg:p-5 lg:m-2  ml-[15px] mr-[15px] m-2">
            <div className="text-[#80DB66] text-[62px] font-bold">30</div>
            <div>
              <div className="text-white text-xl">Digital </div>
              <div className="text-white text-xl"> Products</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
