import React, { useEffect, useRef } from "react";
import { urlFor } from "../libraries/client";

const FeaturedProduct = ({ aboutData }) => {
  const featuredDataRef = useRef();
  const featuredImageRef = useRef();
  const {
    image,
    discount,
    section,
    headline,
    product,
    description_1,
    description_2,
    action,
  } = aboutData[0];
  useEffect(() => {
    async function animate() {
      if (featuredDataRef.current && featuredImageRef.current) {
        const ScrollReveal1 = (await import("scrollreveal")).default;
        ScrollReveal1().reveal(featuredDataRef.current, {
          origin: "right",
          distance: "60px",
          duration: 1500,
          delay: 500,
          reset: true,
        });
        ScrollReveal1().reveal(featuredImageRef.current, {
          origin: "left",
          distance: "60px",
          duration: 1500,
          delay: 500,
          reset: true,
        });
      }
    }
    animate();
  }, []);
  return (
    <div className="l-container grid items-center gap-10 min-767:gap-24 min-767:grid-cols-2 min-767:pt-8">
      <div className="card__col flex items-center justify-center order-2 min-767:order-1">
        <div
          ref={featuredImageRef}
          className="card relative 
          max-320:w-[180px]
          max-320:h-[180px]
          min-1040:w-[360px]
          min-1040:h-[360px]
          w-[300px] h-[300px]
          max-w-full max-h-full
           bg-gradient-to-r from-spindle to-persian-pink
           rounded-lg shadow-largest backdrop-blur-sm -z-10"
        >
          <div className="discount w-28 h-fit text-white py-4 px-3 absolute -z-10 bg-silver shadow-largest backdrop-blur-sm rounded-xl border-solid border border-white/20 right-0 top-0 translate-x-1/2 -translate-y-1/2  text-center">
            {discount && <h3>Get Up to {discount}% off</h3>}
          </div>
          <div
            className="w-full h-full flex items-center relative !overflow-visible
             translate-x-[10%]
              -translate-y-[20%]
          "
          >
            <img
              className="scale-150 avatar
              max-320:scale-130
              min-1040:scale-150
              rotate-[15deg]
              z-20
              !overflow-visible
              "
              src={urlFor(image && image[0])}
              alt={product}
              layout="fill"
              loading="lazy"
            />
          </div>
        </div>
      </div>
      <div
        ref={featuredDataRef}
        className="card__col featured__data text-mercury flex flex-col items-start text-left order-1 min-767:order-2"
      >
        <span className="featured__data__about text-light-orange text-base leading-4 font-medium">
          {section}
        </span>
        <h2 className="featured__data__heading text-[2.25rem] leading-[2.25rem] mx-0 my-4 font-semibold min-1023:text-[4rem] min-1023:leading-[4rem]">
          {headline.split("High")[0]}
          <span className=" text-burnt-sienna font-bold">
            {headline.split(" ")[2]}
          </span>
          {headline.split("High")[1]}
        </h2>
        <p className="py-4 px-0 text-mercury w-4/5">
          {description_1}
          <br />
        </p>
        <p className="py-1 px-0 text-mercury w-4/5">{description_2}</p>
        <button className="w-max flex items-center gradient-button my-4 mx-0 text-mercury py-3 px-6 border-none rounded bg-burnt-sienna bg-sienna-to-blue bg-no-repeat bg-cover hover:scale-105">
          <span className="mr-2"> {action} </span>
          <i className="bx bxs-right-arrow-circle"></i>
        </button>
      </div>
    </div>
  );
};

export default FeaturedProduct;
