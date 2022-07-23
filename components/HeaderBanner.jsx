import Link from "next/link";
import React from "react";
import { urlFor } from "../libraries/client";

const HeaderBanner = ({ headerBanner }) => {
  console.log("headerBanner", headerBanner);
  const { action, desc, image, slug, product } = headerBanner;
  return (
    <div className="px-[100px] py-[40px] h-96 grid grid-cols-2 gap-2 w-100 rounded-xl relative border-solid border-2 border-midnight-500 header-gradient">
      <div className="flex flex-col justify-between flex-wrap items-start ">
        <div>
          <h1 className="text-3xl font-bold my-4 md:text-5xl leading-5">
            {product}
          </h1>
          <p className="text-gray-600 my-4 leading-5">{desc}</p>
        </div>
        <Link href={`product/${slug?.current}`}>
          <button
            type="button"
            className="shadow-lg w-2/5 h-14 mt-6 flex items-center justify-center bg-orange-500 text-white rounded-lg shadow-orange-500/50 hover:shadow-xl hover:bg-opacity-50 hover:shadow-orange-100 transition"
          >
            {" "}
            {action}
          </button>
        </Link>
      </div>
      <div className="header-product-image w-full flex justify-center z-50 relative header-shadow">
        <img
          className="-rotate-45 z-50 drop-shadow-2xl w-[450px] h-[450px] object-cover absolute right-1/5 top-[-60px]"
          src={urlFor(image && image[0])}
          alt={product}
        />
      </div>
    </div>
  );
};

export default HeaderBanner;
