import React from "react";
import grimacecoin from "../assets/icon.svg";
import binance from "../assets/binance.svg";
import ethereum from "../assets/Ethereum.svg";
import { BsArrowRight } from "react-icons/bs";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

function Token() {
  return (
    <div className="bg-[#E1D1F3] flex flex-col w-[30%] px-6 py-2 rounded-xl border-2 border-[#C495FF]">
      <h4 className="font-bold text-left pt-3 pb-5 text-[#511597]">Token</h4>
      <div className="flex items-center bg-[#F3E8FF] px-3 py-3 rounded-md gap-2">
        <img src={grimacecoin} alt="Grimace Coin" />
        <p className="font-semibold text-[#511597]">Grimace Coin</p>
      </div>
      <div className="flex items-center font-bold gap-2 pt-8 pb-5 text-[#511597]">
        From <BsArrowRight /> To
      </div>
      <div className="flex items-center bg-[#F3E8FF] px-3 py-3 rounded-md gap-2 justify-between">
        <div className="flex items-center">
          <img className="pl-2" src={binance} alt="Grimace Coin" />
          <div className="pl-2 text-[#511597]">BSC</div>
        </div>
        <MdKeyboardArrowDown className="text-[#511597] opacity-[0.5]" />
      </div>
      <div className="pt-3">
        <select className="flex items-center bg-[#F3E8FF] px-3 py-3 rounded-md gap-1 justify-between">
          <option>
            <img src={ethereum} alt="Grimace Coin" />
            <MdKeyboardArrowUp className="text-[#511597]" />
          </option>
          <option>hey</option>
        </select>
      </div>
    </div>
  );
}

export default Token;
