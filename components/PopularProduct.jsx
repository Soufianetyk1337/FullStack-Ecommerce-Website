import Image from "next/image";
import Link from "next/link";
import React from "react";
import { calculateDiscount, formatter } from "../helpers";
import { urlFor } from "../libraries/client";
import Star from "./Star";

const PopularProduct = ({ product }) => {
  const { average_rating, price, name, discount, image, slug } = product;
  return (
    <Link href={`/product/${slug?.current}`}>
      <div className="product max-w-full w-full relative ">
        <div
          className="product__image__container relative hover:cursor-pointer
      flex items-center justify-center h-[304px] rounded-lg backdrop-blur-sm bg-product-gradient shadow-largest"
        >
          <Image
            className="object-contain max-h-full max-w-full rotate-12 !aspect-[4/5]"
            src={urlFor(image && image[0])?.url()}
            layout="fill"
            loading="lazy"
            alt={name}
          />
        </div>
        <div className="product__data px-4 py-4 text-mercury glass">
          <div className="rating text-mercury text-base flex items-center">
            <Star
              width="1rem"
              height="1rem"
              fillColor="#FEA801"
              emptyColor="#FFCF9F"
              classes="mr-4"
              fillColorOffset={100}
              index={0}
            />
            <span className="text-xs">({average_rating})</span>
          </div>
          <div className="product__name text-mercury mt-4">
            <span>{name}</span>
          </div>
          <div className="product__price flex justify-between items-center mt-4">
            <h4>
              {Number.isInteger(discount) && discount > 0
                ? calculateDiscount(price, discount)
                : formatter.format(price)}
            </h4>
            <Link href={`/product/${slug?.current}`}>
              <button
                type="button"
                role="button"
                className="p-2 bg-dodger-blue text-mercury rounded-lg text-xs"
              >
                See Product
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PopularProduct;
