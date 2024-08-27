import { FaGraduationCap } from "react-icons/fa";

const Edu = () => {
  return (
    <>
      <div className="  container mx-auto  p-5 sm:p-14 md:p-17 lg:p-10 lg:flex lg:space-x-32   xl:space-x-28   2xl:space-x-28   2xl:justify-center ">
        <div className="education-left  lg:w-[600px]   ">
          <div className="text-[#80DB66] text-xl tracking-[2px]  md:tracking-[5px] md:text-xl ">
            Education
          </div>
          <div className=" text-[35px] font-bold pt-1 md:text-4xl ">
            My Education
          </div>
          <div className="text-[20px] sm:text-[21px] pt-5 sm:pr-[30px]    ">
            Sed ut perspiciatis unde omnis iste natus kobita tumi sopno charini
            hoye khbor nio na sit voluptatem accusantium dolore.
          </div>

          <div className="lg:mt-16">
            <div className="flex space-x-3 mt-6 sm:space-x-6  ">
              <div className="  bg-[#80DB66] pb-9 pl-3 pr-3 pt-3 h-12  rounded-[8px] mt-2 md:pl-4 md:pr-4 md:pt-3 md:pb-[52px] ">
                <FaGraduationCap className="text-white   text-2xl md:text-4xl " />
              </div>
              <div className="">
                <div className="text-#2e2e37 text-3xl font-medium ">
                  Masters in Computer Science
                </div>
                <div className="mt-2 mb-4">
                  <span className=" text-xl font-medium">
                    New York University
                  </span>
                  <span className="text-[#9B9DB1] ">&nbsp;( 2012 - 2016 )</span>
                </div>
                <div className=" text-[19px] md:text-[21px]">
                  Ludantium totam rem aperia meaque ipsa quae ab illo inven tore
                  veritatis et quasi architecto beatae vitae.
                </div>
              </div>
            </div>

            <div className="flex space-x-3 mt-6 sm:space-x-6 ">
              <div className="  bg-[#80DB66] pb-9 pl-3 pr-3 pt-3 h-12  rounded-[8px] mt-2 md:pl-4 md:pr-4 md:pt-3 md:pb-[52px] ">
                <FaGraduationCap className="text-white   text-2xl md:text-4xl " />
              </div>
              <div>
                <div className=" text-3xl font-medium">
                  Bachelor in Computer Engineering
                </div>
                <div className="mt-2 mb-4">
                  <span className=" text-xl font-medium">Dhaka University</span>
                  <span className="text-[#9B9DB1] "> ( 2008 - 2011 )</span>
                </div>
                <div className=" text-[19px]  md:text-[21px]">
                  Ludantium totam rem aperia meaque ipsa quae ab illo inven tore
                  veritatis et quasi architecto beatae vitae.
                </div>
              </div>
            </div>

            <div className="flex space-x-3 mt-6 sm:space-x-6 ">
              <div className="  bg-[#80DB66] pb-9 pl-3 pr-3 pt-3 h-12  rounded-[8px] mt-2  md:pl-4 md:pr-4 md:pt-3 md:pb-[52px]">
                <FaGraduationCap className="text-white   text-2xl md:text-4xl " />
              </div>
              <div>
                <div className="text-#2e2e37 text-3xl font-medium">
                  Diploma in Graphic Design
                </div>
                <div className="mt-2 mb-4">
                  <span className=" text-xl font-medium">Bangla College</span>
                  <span className="text-[#9B9DB1] "> ( 2006 - 2008 )</span>
                </div>
                <div className=" text-[19px]  md:text-[21px] ">
                  Ludantium totam rem aperia meaque ipsa quae ab illo inven tore
                  veritatis et quasi architecto beatae vitae.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="education-right mt-10 md:flex md:justify-center ">
          <img src="education-img.jpg" alt="education Image" />
        </div>
      </div>
    </>
  );
};
export default Edu;
