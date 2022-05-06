import React from 'react'
import man from "../assets/3.svg";

function Footer() {
  return (
    <div className="flex justify-between pt-5 px-12">
      <img src={man} alt="Grimace man" />
      <div>
        <span className='text-gray-400'>Powered by </span>
        <span className="text-[#C495FF]">Embrace Tech</span>
      </div>
    </div>
  );
}

export default Footer