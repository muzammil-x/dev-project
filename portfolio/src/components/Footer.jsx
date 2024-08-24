import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 px-4 sm:px-8 md:px-32 py-10">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-5">
        <div className="w-full sm:w-1/3 mb-4 sm:mb-0 text-left">
          <img src="/logod.png" alt="logo" className="h-8 mb-2" />
          <p className="text-gray-600 text-sm">
            All rights reserved Codefly © 2024
          </p>
        </div>
        <div className="w-full sm:w-1/3 mb-4 sm:mb-0 text-left">
          <h3 className="font-semibold mb-2">Newsletter</h3>
          <form action="#" method="POST" className="flex flex-col sm:flex-row">
            <input
              type="email"
              placeholder="Submit your email"
              required
              className="border border-gray-300 bg-gray-100 p-2 mb-2 sm:mb-0 sm:w-3/4 mr-2"
            />
            <button
              type="submit"
              className="bg-[#80DB66] text-white font-bold py-2 px-4 rounded w-full sm:w-auto"
            >
              Submit
            </button>
          </form>
        </div>
        <div className="w-full sm:w-1/3 text-left sm:text-right">
          <p className="text-gray-600 font-semibold sm:mr-5 mb-2">Follow Me</p>
          <div className="flex justify-start sm:justify-end space-x-3">
            <FaFacebookF className="text-blue-600" />

            <FaTwitter className="text-blue-400" />

            <FaLinkedinIn className="text-blue-500" />

            <FaInstagram className="text-pink-400" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
