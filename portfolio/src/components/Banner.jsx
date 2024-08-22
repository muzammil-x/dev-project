import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

function Banner() {
  return (
    <>
      <section className="bg-[#25262F] w-full pt-40 pb-32 ">
        <div className="flex flex-col justify-center items-center relative lg:flex-row lg:justify-around">
          <div className="flex flex-col justify-center items-center mt-9  lg:items-start  xl:ml-5">
            <div className="text-[18px] tracking-[4px] text-[#80DB66] lg:text-3xl ">
              HELLO I'AM
            </div>
            <div className="text-white text-6xl  xl:ml-0 ml-10 lg:text-[8rem]  w-96">
              James Smith
            </div>
            <div className="text-center lg:flex lg:space-x-6 lg:items-center lg:mt-8">
              <div className="text-white text-sm pt-6 pb-2 lg:pb-0 lg:pt-0 lg:text-2xl">
                A Passionate
              </div>
              <div className="text-center text-[20px] text-[#80DB66] lg:text-4xl lg:mb-2">
                Software Engineer_
              </div>
            </div>

            <div className="mt-8">
              <button className="text-white bg-[#80DB66] p-2 w-36 rounded-md lg:p-4 lg:w-40 lg:text-xl">
                Say Hello
              </button>
            </div>
          </div>
          <div className="mt-[120px] lg:mt-[100px] h-64 w-80 lg:w-[30rem] lg:h-[10rem] flex justify-center items-center">
            <img src="/person.png" alt="" className="mt-4" />
          </div>
          <div className="hidden  md:block absolute top-[120px] right-6  text-white w-16  space-y-3">
            <div className="text-xl border border-white flex justify-center items-center p-4 rounded hover:bg-[#80DB66] duration-500 cursor-pointer">
              <FaFacebookF />
            </div>
            <div className="text-xl border border-white flex justify-center items-center p-4 rounded hover:bg-[#80DB66] duration-500 cursor-pointer">
              <FaTwitter />
            </div>
            <div className="text-xl border border-white flex justify-center items-center p-4 rounded hover:bg-[#80DB66] duration-500 cursor-pointer">
              <FaLinkedinIn />
            </div>
            <div className="text-xl border border-white flex justify-center items-center p-4 rounded hover:bg-[#80DB66] duration-500 cursor-pointer">
              <FaYoutube />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Banner;
