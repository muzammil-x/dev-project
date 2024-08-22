import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-100 px-20 py-20">
      <div className="flex justify-between items-center">
        <div className="w-1/3">
          <img src="/logod.png" alt="logo" className="h-8 mb-2" />
          <p className="text-gray-600 text-sm">
            All rights reserved Codefly © 2024
          </p>
        </div>
        <div className="w-1/3">
          <p className="text-gray-600 font-semibold mb-2">Follow Me</p>
          <div className="flex space-x-3">
            <a href="#" aria-label="Facebook" className="text-blue-600">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="Twitter" className="text-blue-400">
              <FaTwitter />
            </a>
            <a href="#" aria-label="LinkedIn" className="text-blue-500">
              <FaLinkedinIn />
            </a>
            <a href="#" aria-label="Instagram" className="text-pink-400">
              <FaInstagram />
            </a>
          </div>
        </div>
        <div className="mt-6">
          <h3 className="font-semibold mb-2">Newsletter</h3>
          <form action="#" method="POST" className="flex">
            <input
              type="email"
              placeholder="Submit your email"
              required
              className="border border-gray-300 bg-gray-100 p-2 w-full mr-2"
            />
            <button
              type="submit"
              className="bg-[#80DB66] text-white font-bold py-2 px-4 rounded"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
