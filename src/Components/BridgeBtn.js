import React from "react";
import { useState } from "react";
import { MdTouchApp } from "react-icons/md";

function BridgeBtn() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="pt-6">
      <button
        className="font-bold text-center py-3 px-4 text-white bg-[#772EDA] w-full rounded-md"
        onClick={() => setShowModal(true)}
      >
        Bridge
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative">
              <button
                className="bg-[#E1D1F3] text-[#A05AF0] rounded-xl p-1"
                onClick={() => setShowModal(false)}
              >
                x
              </button>
              {/*content*/}
              <div className="border-0 rounded-2xl relative flex w-full bg-[#E1D1F3] outline-none focus:outline-none">
                <div className="relative p-6 flex-auto">
                  <div className="text-[#A05AF0] text-left font-bold flex">
                    <MdTouchApp className="text-2xl" /> Note
                  </div>
                  <ul className="text-left text-[#A05AF0] pt-4">
                    <li>
                      The tokens will be sent to the same address they were sent
                      from
                    </li>
                    <li className="pt-3">Minimum deposit is 0.02 ETH</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-[0.9] fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  );
}

export default BridgeBtn;
