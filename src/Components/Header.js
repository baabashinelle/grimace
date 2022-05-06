import React from 'react';
import logo from '../assets/websitemenu-logo.svg';

function Header() {
  return (
    <div>
      <div className="flex justify-between px-10 pt-5">
        <img src={logo} alt="Grimace Bridge Logo" />
        <button className="border-2 border-[#511597] rounded-full px-5 text-[#511597] h-9">
          Connect Wallet
        </button>
      </div>
    </div>
  );
}

export default Header