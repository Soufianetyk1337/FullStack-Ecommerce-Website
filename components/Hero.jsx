import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { urlFor } from "../libraries/client";
const Hero = ({ heroData }) => {
  const heroDataRef = useRef(null);
  const heroImageRef = useRef(null);
  const { heading_title, description, year, action, image, slug } = heroData;
  const [heading1, heading2] = heading_title.split(" ");
  useEffect(() => {
    async function animate() {
      if (heroDataRef.current && heroImageRef.current) {
        const ScrollReveal = (await import("scrollreveal")).default;
        ScrollReveal().reveal(heroDataRef.current, {
          origin: "left",
          distance: "60px",
          duration: 1500,
          delay: 400,
        });
        ScrollReveal().reveal(heroImageRef.current, {
          origin: "right",
          distance: "60px",
          duration: 1500,
          delay: 400,
        });
      }
    }
    animate();
  }, []);

  return (
    <div className="grid gap-10 min-767:gap-2 items-center l-container relative min-767:pt-8 min-767:grid-cols-2">
      <div className="column" ref={heroDataRef}>
        <h1 className=" text-mercury text-[2.25rem] leading-[2.75rem] tracking-[2px] min-1023:text-[4rem] min-1023:leading-[4.5rem]">
          {heading1} <br />
          {heading2}
          <span className=" text-burnt-sienna block font-bold"> {year} </span>
        </h1>
        <p className="my-6 mx-0 text-mercury ">{description}</p>
        <Link href={`/product/${slug?.current}`}>
          <button className=" text-mercury flex items-center py-3 px-6 border-none rounded bg-burnt-sienna bg-sienna-to-blue bg-no-repeat bg-cover ">
            <span className="mr-2"> {action} </span>
            <i className="bx bxs-right-arrow-circle"></i>
          </button>
        </Link>
      </div>
      <div
        className="flex justify-start min-1040:justify-center max-480:justify-center"
        ref={heroImageRef}
      >
        <div
          className="column before: min-767:before:-mt-4 min-767:before:ml-[5.5rem] min-1040:before:text-[9rem] before:stroked-text before:content-['NIKE'] before:text-mercury  min-767:before:text-[8rem] before:font-normal before:tracking-[1rem] before:flex before:h-full before:justify-center before:items-center before:absolute before:t-0 before:l-0 stroked-text max-480:before:text-[5rem] max-480:before:ml-12
        max-480:before:-mt-4 before:ml-28 before:text-[9rem] before:-mt-8"
        >
          <div className="w-[360px] inline-flex max-480:w-56 min-767:w-[360px] min-1023:w-[472px]">
            <img
              src={urlFor(image && image[0]).url()}
              alt="nike-zoom-freak-1-gs-antetokounmpo"
              className="-rotate-[30deg] scale-[1.3] translate-x-2 relative z-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
