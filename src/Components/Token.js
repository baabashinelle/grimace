import React from "react";
import grimacecoin from "../assets/icon.svg";
import binance from "../assets/binance.svg";
import arrows from "../assets/arrows.svg";
import { BsArrowRight } from "react-icons/bs";
import { MdKeyboardArrowDown } from "react-icons/md";
import DropdownOption from "./DropdownOption";
import BridgeBtn from "./BridgeBtn";

function Token() {
  return (
    <div className="bg-[#E1D1F3] flex flex-col 2xl:w-[30%] lg:w-[55%] px-8 py-2 w-[85%] xl:w-[38%] rounded-xl border-2 border-[#C495FF] pb-8">
      <h4 className="font-bold text-left pt-3 pb-2 text-[#511597]">Token</h4>
      <div className="flex items-center bg-[#F3E8FF] px-3 py-1 rounded-md gap-2">
        <img src={grimacecoin} alt="Grimace Coin" />
        <p className="font-semibold text-[#511597]">Grimace Coin</p>
      </div>
      <div className="flex items-center font-bold gap-2 pt-8 pb-2 text-[#511597]">
        From <BsArrowRight /> To
      </div>
      <div className="flex items-center bg-[#F3E8FF] px-3 py-2 rounded-md gap-2 justify-between relative">
        <div className="flex items-center">
          <img className="pl-2" src={binance} alt="Binance Coin" />
          <div className="pl-2 text-[#511597]">BSC</div>
          <img
            className="absolute right-6 -bottom-7 z-10 w-10"
            src={arrows}
            alt="Arrows"
          />
        </div>
        <MdKeyboardArrowDown className="text-[#511597] opacity-[0.5]" />
      </div>
      <div className="pt-3">
        <DropdownOption />
      </div>
      <h4 className="font-bold text-left pt-4 pb-2 text-[#511597]">Amount</h4>
      <div className="items-center text-left bg-[#F3E8FF] px-3 py-3 rounded-md text-[#511597] opacity-[0.5]">
        0.000
      </div>
      <BridgeBtn />
    </div>
  );
}

export default Token;
