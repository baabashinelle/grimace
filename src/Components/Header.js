import React from 'react';
import { useState } from "react";
import logo from '../assets/websitemenu-logo.svg';
import metamask from "../assets/metamask.svg";
import walletconnect from "../assets/walletConnect.svg";

function Header() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <div className="flex justify-between px-10 pt-5">
        <img src={logo} alt="Grimace Bridge Logo" />
        <button
          className="border-2 border-[#511597] rounded-full px-7 text-[#511597] h-9"
          onClick={() => setShowModal(true)}
        >
          Connect Wallet
        </button>

        {showModal ? (
          <>
            <div className="justify-center items-center flex fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative">
                {/*content*/}
                <div className="border-0 rounded-2xl relative flex bg-[#E1D1F3] outline-none focus:outline-none w-[63%]">
                  <div className="relative p-6 flex-auto">
                    <div className="text-[#A05AF0] text-left font-bold flex justify-between border-b-2 border-[#DAB9FF] p-1 ">
                      Connect Wallet
                      <span
                        className="text-[#6609D5] bg-white rounded-full p1 cursor-pointer"
                        onClick={() => setShowModal(false)}
                      >
                        x
                      </span>
                    </div>
                    <div className="text-[#A05AF0] font-thin text-sm bg-white p-4 rounded-xl text-left">
                      By connecting a wallet, you agree to Grimace's{" "}
                      <span className="font-bold">Terms of Service</span> and
                      acknowledge that you have read and understood the
                      Grimace's disclaimer
                    </div>
                    <div className="flex text-[#A05AF0] pb-5 gap-3 pt-9 focus:bg-[#F7F0FF] cursor-pointer">
                      <img src={metamask} alt="Metamask" />
                      MetaMask
                    </div>
                    <div className="flex text-[#A05AF0] gap-3 cursor-pointer">
                      <img src={walletconnect} alt="Wallet Connect" />
                      WalletConnect
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-[0.9] fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
      </div>
    </div>
  );
}

export default Header