import React from "react";
import { useState } from "react";
import logo from "../assets/websitemenu-logo.svg";
import metamask from "../assets/metamask.svg";
import walletconnect from "../assets/walletConnect.svg";
import { FaTimes } from "react-icons/fa";

function Header() {
  const [showModal, setShowModal] = useState(false);
  const [selectedTab, setSelectedTab] = useState("none");

  const handleModal = () => {
    setShowModal(!showModal);
    setSelectedTab("none");
  };
  return (
    <div>
      <div className="flex relative justify-between lg:px-10 pt-5 items-center px-1 pb-5 md:pb-0">
        <img
          src={logo}
          alt="Grimace Bridge Logo"
          className="w-[49%] lg:w-[24%] md:w-[38%]"
        />
        <button
          className="border-2 border-[#511597] rounded-full lg:px-7 text-[#511597] h-9 text-sm lg:text-base px-3"
          onClick={() => handleModal()}
        >
          Connect Wallet
        </button>

        {showModal ? (
          <>
            <div className="lg:w-[60%] mx-auto flex items-center justify-center  fixed inset-0 z-50 w-screen">
              <div className="relative justify-center items-center flex outline-none focus:outline-none px-5">
                {/*content*/}
                <div className="border-0 rounded-2xl relative flex justify-center bg-[#E1D1F3] outline-none focus:outline-none">
                  <div className="relative py-4 flex-auto">
                    <div className="text-[#A05AF0] text-left font-bold flex justify-between  p-2 pb-4 px-5 ">
                      Connect Wallet
                      <span
                        className="text-[#6609D5] bg-white cursor-pointer flex items-center justify-center rounded-full p-1"
                        onClick={() => handleModal()}
                      >
                        <FaTimes />
                      </span>
                    </div>
                    <div className="w-full h-[.1rem] bg-[#DAB9FF]"></div>
                    <div className="p-4">
                      <div className="text-[#A05AF0] font-thin text-sm bg-white p-4 rounded-xl text-left">
                        By connecting a wallet, you agree to Grimace's{" "}
                        <span className="font-bold">Terms of Service</span> and
                        acknowledge that you have read and understood the
                        Grimace's disclaimer
                      </div>
                    </div>
                    <div className="">
                      <div
                        onClick={() => setSelectedTab("tab1")}
                        className={`${
                          selectedTab == "tab1" && "bg-[#F7F0FF]"
                        } cursor-pointer mb-3`}
                      >
                        <div className="flex text-[#A05AF0] pb-3 gap-3 pt-3 px-4">
                          <img src={metamask} alt="Metamask" />
                          MetaMask
                        </div>
                      </div>
                      <div
                        onClick={() => setSelectedTab("tab2")}
                        className={`${
                          selectedTab == "tab2" && "bg-[#F7F0FF]"
                        } cursor-pointer`}
                      >
                        <div className="flex text-[#A05AF0] px-4 pb-5 pt-3 gap-3 ">
                          <img src={walletconnect} alt="Wallet Connect" />
                          WalletConnect
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-[0.85] fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
      </div>
    </div>
  );
}

export default Header;
