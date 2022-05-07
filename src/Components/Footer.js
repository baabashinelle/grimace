import React from "react";
import man from "../assets/3.svg";

function Footer() {
  return (
    <div className="md:flex justify-between pt-5 px-12">
      <img
        src={man}
        alt="Grimace man"
        className="opacity-20 absolute -bottom-12 hidden lg:flex lg:w-[20%]"
      />
      <div className="flex items-center w-full justify-center lg:justify-end">
        <p>
          <span className="text-gray-400"> Powered by </span>
          <span className="text-[#C495FF]"> Embrace Tech </span>
        </p>
      </div>
    </div>
  );
}

export default Footer;
