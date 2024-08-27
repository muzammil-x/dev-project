import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { CiMail } from "react-icons/ci";

const Footer = () => {
  return (
    <footer className="bg-[#F0FBFB] px-4 sm:px-8 md:px-32 py-10">
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-5">
          <section className="w-full sm:w-1/3 mb-4 sm:mb-0 text-left">
            <img src="/logod.png" alt="logo-dark" className="h-8 mb-2" />
            <p className="text-gray-600 text-sm">
              All rights reserved Codefly © 2024
            </p>
          </section>

          <section className="w-full sm:w-1/3 mb-4 sm:mb-0 text-left">
            <h3 className="font-bold text-[#2E2E37] mb-2">Newsletter</h3>
            <div className="relative">
              <input
                type="email"
                placeholder="Submit your email"
                required
                className="border border-gray-300 bg-gray-100 p-2 pr-10 w-full"
              />
              <span className="absolute inset-y-0 right-0 flex items-center pr-3">
                <CiMail className="text-[#80DB66] text-3xl cursor-pointer" />
              </span>
            </div>
          </section>

          <section className="w-full sm:w-1/3 text-left sm:text-right">
            <p className="text-[#2E2E37] font-bold sm:mr-[100px] mb-2">
              Follow Me
            </p>
            <div className="flex justify-start sm:justify-end space-x-3">
              <FaFacebookF className="text-white rounded-2xl border-8 border-[#1877F2] bg-[#1877F2] text-4xl" />

              <FaTwitter className="text-white rounded-2xl border-8 border-[#1DA1F2] bg-[#1DA1F2] text-4xl" />
              <FaLinkedinIn className="text-white rounded-2xl border-8 border-[#0077B5] bg-[#0077B5] text-4xl" />
              <FaInstagram className="text-white rounded-2xl border-8 border-[#405DE6] bg-[#405DE6] text-4xl " />
            </div>
          </section>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
