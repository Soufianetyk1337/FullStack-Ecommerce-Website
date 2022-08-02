/* eslint-disable no-unused-vars */
/* eslint-disable @next/next/no-img-element */
import React from "react";

const Hero = ({ headerBanner }) => {
  return (
    <div className="grid grid-cols-2 gap-8 items-center">
      <div className="column">
        <h1 className=" text-mercury text-[3.5rem] leading-[3.5rem] tracking-[2px]">
          Summer Collections
          <span className=" text-burnt-sienna block font-bold"> 2022 </span>
        </h1>
        <p className="my-6 mx-0 text-mercury ">
          The styles of shoe available to consumers are endless and profit also
          endless
        </p>
        <button className=" text-mercury py-3 px-6 border-none rounded bg-burnt-sienna bg-sienna-to-blue bg-no-repeat bg-cover ">
          <span> Shop Now </span>
          <i className="bx bx-right-arrow-alt"></i>
        </button>
      </div>
      <div className="column">
        <div className="w-[440px] relative">
          <img
            src="/images/nike-zoom-freak.png"
            alt="nike-zoom-freak-1-gs-antetokounmpo"
            className="-rotate-[30deg] scale-[1.1] translate-x-2 relative z-10"
          />
          <span className="text-mercury absolute text-[12rem] top-0 left-0 translate-x-[2%] translate-y-[24%] font-normal tracking-[1rem] -ml-4 stroked-text">
            NIKE
          </span>
        </div>
        <div className="flex justify-center">
          <img
            src="/images/orange-arrow.png"
            alt="Orange Arrow"
            className="rotated w-32"
          />
        </div>
        <div className="discount__card text-mercury flex justify-center items-center flex-col w-1/2 my-0 mx-auto bg-white/20 shadow-largest backdrop-blur-sm rounded-lg border-solid border border-white/20 p-4">
          <h3 className="font-semibold">Get Up to 30% off</h3>
          <p className="mt-2 text-xs py-0 px-1  text-center text-white/70">
            You can get up to 30 percent discount from here
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
