import React from "react";
import ethereum from "../assets/Ethereum.svg";
import cronos from "../assets/Logo.svg";
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { MdKeyboardArrowUp } from "react-icons/md";

const defCoins = [
  {
    id: 0,
    name: "Ethereum",
    image: ethereum,
    selected: true
  },
  {
    id: 1,
    name: "Cronos",
    image: cronos,
    selected: false
  },
];



function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function DropdownOption() {
  const [coins, setCoins] = useState(defCoins)
  const [selected, setSelected] = useState(coins[0]);

  const handleSelected =(item) =>{
  item.selected = !item.selected
  setSelected(item)
  coins.map((coin) =>{
    coin.selected = coin.id == item.id
  })
  setCoins(coins)
}
// coins.length == 0 && setCoins(def)
return (
  <Listbox value={selected} onChange={handleSelected}>
    {({ open }) => (
      <>
        <div className="mt-1 relative">
          <Listbox.Button
            className={`relative w-full bg-[#F3E8FF] border rounded-md pl-3 pr-10 py-2 text-left cursor-pointer focus:outline-[#772EDA] focus:ring-1 focus:ring-[#772EDA] focus:border-[#772EDA] sm:text-sm ${
              selected.id == 0 && "pl-2"
            }`}
          >
            <span
              className={`flex items-center gap-3 pl-2 ${
                selected.id == 0 && "gap-0 pl-[6px]"
              }`}
            >
              <img
                src={selected.image}
                alt=""
                className={`rounded-full ${selected.id == 0 && "w-[2.5rem]"}`}
              />
              <span className="text-base text-[#511597]">{selected.name}</span>
            </span>
            <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <MdKeyboardArrowUp
                className="h-5 w-5 text-[#511597] pr-1"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>

          <Transition
            show={open}
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
              {coins
                .filter((coin) => !coin.selected)
                .map((coin) => (
                  <Listbox.Option
                    key={coin.id}
                    className={({ active }) =>
                      classNames(
                        "text-[#511597] bg-transparent cursor-pointer select-none relative py-2 pl-[23px] pr-9 text-base"
                      )
                    }
                    value={coin}
                  >
                    {({ selected, active }) => (
                      <>
                        <div className="flex items-center">
                          <img
                            src={coin.image}
                            alt=""
                            className={`flex-shrink-0 h-6 w-6 rounded-full ${
                              coin.id === 0 && "w-[2rem]"
                            }`}
                          />
                          <span
                            className={classNames(
                              selected ? "font-semibold" : "font-normal",
                              "ml-3 block"
                            )}
                          >
                            {coin.name}
                          </span>
                        </div>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? "text-white" : "text-indigo-600",
                              "absolute inset-y-0 right-0 flex items-center pr-4"
                            )}
                          ></span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
            </Listbox.Options>
          </Transition>
        </div>
      </>
    )}
  </Listbox>
);
}

export default DropdownOption;
