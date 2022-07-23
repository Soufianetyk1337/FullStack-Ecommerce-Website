/* eslint-disable no-unused-vars */
import Link from "next/link";
import React from "react";
import { calculateDiscount, formatProductName, formatter } from "../helpers";
import { urlFor } from "../libraries/client";

const SingleProduct = ({ product }) => {
  const { image, name, slug, price, discount } = product;
  return (
    <Link href={`/product/${formatProductName(slug?.current)}`}>
      <div className="product-card cursor-pointer drop-shadow-md">
        <img
          src={urlFor(image && image[0])}
          className="w-80 h-80 object-cover rounded-md"
          alt=""
        />
        <div className="product-info hidden">
          <p className="product-name">{name}</p>
          <p className="product-price">
            {Number.isInteger(discount) && discount > 0
              ? calculateDiscount(price, discount)
              : formatter.format(price)}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default SingleProduct;
