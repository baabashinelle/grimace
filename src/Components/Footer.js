import React from 'react'
import man from "../assets/3.svg";

function Footer() {
  return (
    <div className="md:flex justify-between pt-5 px-12">
      <img src={man} alt="Grimace man" className='opacity-20' />
      <div>
        <span className='text-gray-400'>Powered by </span>
        <span className="text-[#C495FF]">Embrace Tech</span>
      </div>
    </div>
  );
}

export default Footer