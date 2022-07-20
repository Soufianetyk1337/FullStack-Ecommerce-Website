/* eslint-disable no-unused-vars */
import Image from "next/image";
import React, { useState, useEffect } from "react";
import ProductImagesSlider from "./ProductImagesSlider";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

const Product = () => {
  const [quantity, setQuantity] = useState(1);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const handleQuantity = (type) => {
    switch (type) {
      case "increment":
        setQuantity(quantity + 1);
        break;
      case "decrement":
        setQuantity(quantity - 1);
        break;
      default:
        break;
    }
  };

  return (
    <main>
      <div className="md:container lg:max-w-screen-xl mx-auto">
        <div className="lg:flex lg:p-16 lg:items-center">
          <div className="lg:w-2/5 flex-shrink-0 lg:mr-16">
            <Swiper
              style={{
                "--swiper-navigation-color": "#fff",
                "--swiper-pagination-color": "#fff",
              }}
              slidesPerView={1}
              loop={true}
              spaceBetween={10}
              navigation={true}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[FreeMode, Navigation, Thumbs]}
              className="w-full relative overflow-hidden"
            >
              <SwiperSlide>
                <Image
                  className="swiper-slide"
                  src="/images/image-product-1.jpg"
                  alt="Product image 1"
                  layout="fill"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  className="swiper-slide"
                  src="/images/image-product-2.jpg"
                  alt="Product image 1"
                  layout="fill"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  className="swiper-slide"
                  src="/images/image-product-3.jpg"
                  alt="Product image 1"
                  layout="fill"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  className="swiper-slide"
                  src="/images/image-product-4.jpg"
                  alt="Product image 1"
                  layout="fill"
                />
              </SwiperSlide>
            </Swiper>
            <Swiper
              onSwiper={setThumbsSwiper}
              modules={[FreeMode, Navigation, Thumbs]}
              slidesPerView={4}
              freeMode={true}
              loop={true}
              watchSlidesProgress
              spaceBetween={10}
              className="mySwiper justify-between mt-4 hidden lg:grid lg:grid-cols-4 gap-4"
            >
              <SwiperSlide>
                <Image
                  className="swiper-thumb"
                  src="/images/image-product-1.jpg"
                  alt="Product image thumbnail 1"
                  layout="fill"
                  objectFit="cover"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  className="swiper-thumb"
                  src="/images/image-product-2.jpg"
                  alt="Product image thumbnail 1"
                  layout="fill"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  className="swiper-thumb"
                  src="/images/image-product-3.jpg"
                  alt="Product image thumbnail 1"
                  layout="fill"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  className="swiper-thumb"
                  src="/images/image-product-4.jpg"
                  alt="Product image thumbnail 1"
                  layout="fill"
                />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="px-4 mt-8 lg:ml-8">
            <h2 className="text-orange-700 uppercase text-xs font-bold tracking-widest">
              Sneaker Company
            </h2>
            <h1 className="text-3xl font-bold mt-2 md:text-5xl">
              Fall Limited Edition Sneakers
            </h1>
            <p className="text-gray-600 mt-2">
              These low-profile sneakers are your perfect casual wear companion.
              Featuring a durable rubber outer sole, they&CloseCurlyQuote;ll
              withstand everything the weather can offer.
            </p>
            <div className="flex items-center mt-4 md:block">
              <span className="text-2xl font-extrabold">$125.00</span>
              <span className="px-2 bg-orange-100 text-orange-700 rounded-md font-bold ml-2">
                50%
              </span>
              <span className="line-through text-gray-400 ml-auto md:block">
                $250.00
              </span>
            </div>
            <div className="md:flex">
              <div className="flex items-stretch bg-gray-100 rounded-lg mt-6 md:mr-6">
                <button
                  onClick={() => handleQuantity("decrement")}
                  className="js-qty-minus p-4 text-orange-600 hover:opacity-50 transition"
                >
                  <i
                    className="bx bx-minus icon-minus"
                    style={{ fontWeight: "bold", fontSize: "21px" }}
                  />
                  <span className="sr-only">Minus</span>
                </button>
                <label htmlFor="qty" className="sr-only">
                  Quantity
                </label>
                <input
                  id="quantity"
                  name="quantity"
                  value={quantity}
                  type="number"
                  min="1"
                  required
                  readOnly
                  className="js-qty w-full bg-transparent text-center font-bold text-lg appearance-none ring-orange-400 focus:outline-none focus:ring-2 invalid:ring-2 invalid:ring-red-400"
                />
                <button
                  onClick={() => handleQuantity("increment")}
                  className="js-qty-plus p-4 text-orange-600 hover:opacity-50 transition"
                >
                  <i
                    className="bx bx-plus icon-plus"
                    style={{ fontWeight: "bold", fontSize: "21px" }}
                  />
                  <span className="sr-only">Plus</span>
                </button>
              </div>
              <button
                className="js-add-to-cart flex w-full h-14 mt-6 items-center justify-center bg-orange-500 text-white rounded-lg shadow-md shadow-orange-200 hover:shadow-xl hover:bg-opacity-50 hover:shadow-orange-100 transition"
                data-name="Fall Limited Edition Sneakers"
                data-price="125.00"
              >
                <i className="bx bx-cart icon-cart mr-4"></i>
                <strong>Add to cart</strong>
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Product;
