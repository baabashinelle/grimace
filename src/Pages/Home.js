import React from 'react'
import Header from '../Components/Header'
import glogo from "../assets/grimace-bridge.svg";
import Token from '../Components/Token';

function Home() {
  return (
    <div className="h-screen w-full">
      <Header />
      <div className='flex justify-center'>
        <img src={glogo} alt="Grimace Bridge" />
      </div>
      {/* Token form */}
      <Token/>
    </div>
  );
}

export default Home