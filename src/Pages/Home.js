import React from "react";
import Header from "../Components/Header";
import glogo from "../assets/grimace-bridge.svg";
import Token from "../Components/Token";
import Footer from "../Components/Footer";

function Home() {
  return (
    <div className="relative 2xl:h-screen w-full from-[#E8E0EC] to-[#F6E4E9] bg-gradient-to-r lg:overflow-hidden pb-3 md:px-3">
      <Header />

      {/* Top bar */}
      <div className="flex justify-center md:pb-5 2xl:pb-0">
        <img
          className="pb-3 w-[59%] lg:w-[24%] md:w-[38%]"
          src={glogo}
          alt="Grimace Bridge"
        />
      </div>

      {/* Token form */}
      <div className="flex justify-center">
        <Token />
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;
