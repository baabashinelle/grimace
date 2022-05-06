import React from "react";
import ethereum from "../assets/Ethereum.svg";
import cronos from "../assets/Logo.svg";
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { MdKeyboardArrowUp } from "react-icons/md";

const coins = [
  {
    id: 0,
    name: "Ethereum",
    image: ethereum,
  },
  {
    id: 1,
    name: "Cronos",
    image: cronos,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function DropdownOption() {
  const [selectedCoin, setSelected] = useState(coins);
  return (
    <div>
      <Listbox value={selectedCoin} onChange={setSelected}>
        {({ open }) => (
          <>
            <div className="mt-1 relative">
              <Listbox.Button className="relative w-full bg-[#F3E8FF] border rounded-md px-2 cursor-pointer focus:outline-[#772EDA] focus:border-2 focus:ring-[#772EDA] focus:border-[#772EDA] sm:text-sm">
                <div className="flex items-center">
                  <img
                    src={selectedCoin[0].image}
                    alt=""
                    className="flex-shrink-0 h-12 w-12 rounded-full"
                  />
                  <div className="flex justify-between items-center">
                    <div className=" text-[#511597] text-base">
                      {selectedCoin[0].name}
                    </div>
                    <MdKeyboardArrowUp className="text-[#511597]" />
                  </div>
                </div>
              </Listbox.Button>

              <Transition
                show={open}
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute z-10 mt-1 w-full bg-white max-h-56 rounded-md px-3 border-2 border-[#772EDA] py-2 text-base overflow-auto focus:outline-none">
                  <Listbox.Option
                    className={({ active }) =>
                      classNames(
                        (active =
                          "text-[#511597] cursor-pointer select-none relative py-2 pl-3 pr-9")
                      )
                    }
                    value={selectedCoin[1]}
                  >
                    {({ selected, active }) => (
                      <>
                        <div className="flex items-center">
                          <img
                            src={selectedCoin[1].image}
                            alt=""
                            className="flex-shrink-0 h-6 w-6 rounded-full"
                          />
                          <span
                            className={classNames(
                              (selected = "font-normal"),
                              "ml-3 block truncate"
                            )}
                          >
                            {selectedCoin[1].name}
                          </span>
                        </div>

                        {selected ? (
                          <span
                            className={classNames(
                              (active = "text-[#511597]"),
                              "absolute inset-y-0 right-0 flex items-center pr-4"
                            )}
                          ></span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                </Listbox.Options>
              </Transition>
            </div>
          </>
        )}
      </Listbox>
    </div>
  );
}

export default DropdownOption;
