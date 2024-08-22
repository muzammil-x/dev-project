import React from "react";

const Button = (props) => {
  return (
    <button className="bg-[#25242C] text-white font-bold border-2 border-[#80DB66] hover:bg-[#80DB66] duration-500 py-2 px-6 rounded-lg md:ml-8 text-xl">
      {props.children}
    </button>
  );
};
export default Button;
