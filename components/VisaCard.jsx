import React from "react";

const VisaCard = () => {
  return (
    <div className="w-full flex items-center justify-center h-full">
      <div className="w-[260px] min-w-[260px] h-40 border-solid border-2 border-gray-100 bg-[rgba(251,165,106,1)] bg-gradient-to-r from-[#f89b9e,_60%] to-[[#f89b9e,_60%]] rounded-xl z-10 overflow-hidden backdrop-blur-sm relative">
        <div className="float-right p-2">
          <img src="/images/visa-logo.png" alt="" className="w-[70px] h-10" />
        </div>
        <div className="p-2 my-7 mx-0">
          <img src="/images/visa-chip.png" alt="" className="w-[60px] h-11" />
          <p className="text-sm py-2.5 px-0 text-white tracking-[2px]">
            4242 4242 4242 4242
          </p>
        </div>
        <div className="flex absolute w-full bottom-4 justify-between px-2.5 py-0 text-white text-sm">
          <p>12/34</p>
          <p>123</p>
          <p>John Doe</p>
        </div>
      </div>
    </div>
  );
};

export default VisaCard;
