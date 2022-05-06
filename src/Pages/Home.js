import React from 'react'
import Header from '../Components/Header'
import glogo from "../assets/grimace-bridge.svg";
import Token from '../Components/Token';
import Footer from '../Components/Footer';

function Home() {
  return (
    <div className="h-screen w-full from-[#E8E0EC] to-[#F6E4E9] bg-gradient-to-r overflow-hidden">
      <Header />
      {/* Top bar */}
      <div className="flex justify-center">
        <img src={glogo} alt="Grimace Bridge" />
      </div>
      {/* Token form */}
      <div className='flex justify-center'>
        <Token />
      </div>
      {/* Footer */}
      <Footer/>
    </div>
  );
}

export default Home