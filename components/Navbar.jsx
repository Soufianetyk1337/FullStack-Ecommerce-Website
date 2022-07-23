/* eslint-disable no-unused-vars */
/* eslint-disable @next/next/no-html-link-for-pages */
import Image from "next/image";
import React, { useRef, useState } from "react";

const Navbar = () => {
  const cartRef = useRef(null);
  const [toggle, setToggle] = useState(false);
  return (
    <header className="px-4">
      <div className="md:container lg:max-w-screen-xl mx-auto md:border-b md:relative">
        <div className="flex items-center content-between h-20 md:items-center">
          <button className="text-gray-600 md:hidden">
            <i className="icon-menu"></i>
            <span className="sr-only">Menu</span>
          </button>
          <a
            href="/"
            className="mr-auto ml-4 -mt-1.5 md:mr-4 md:py-12"
            title="Sneaker Company"
          >
            <Image
              src="/images/logo.svg"
              alt="Sneakers"
              width="138"
              height="20"
            />
          </a>
          <div className="fixed inset-0 z-50 bg-black bg-opacity-50 hidden"></div>
          <div
            ref={cartRef}
            onClick={() => {
              console.log(cartRef.current);
            }}
            className="md:flex md:items-center group"
          >
            <button className=" text-lg relative text-gray-600">
              <i
                className="bx bx-cart"
                style={{ fontWeight: "bold", fontSize: "21px" }}
              ></i>
              <span className=" absolute -top-2 -right-4 w-6 bg-orange-600 text-white text-xs rounded-full hidden"></span>
              <span className="sr-only">Cart</span>
            </button>
            <div className=" absolute top-20 left-0 z-40 w-full hidden md:block md:w-96 md:right-0 md:left-auto md:opacity-0 md:pointer-events-none md:group-hover:opacity-100 md:group-hover:pointer-events-auto transition">
              <div className="bg-white rounded-lg shadow-xl mx-2">
                <div className="px-4 py-6 border-b">
                  <strong>Cart</strong>
                </div>
                <div className="px-4 h-36 flex justify-center items-center">
                  <strong className="text-gray-500">Your cart is empty</strong>
                </div>
                <template>
                  <div className=" flex items-center mb-4">
                    <div className="w-16 h-auto rounded-lg mr-4">
                      <Image
                        src="/images/image-product-1-thumbnail.jpg"
                        alt="%_name_%"
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                    <div className="text-gray-600">
                      <p>%_name_%</p>
                      <p>
                        <span>
                          $%_price_% &times; <span className="">quantity</span>
                        </span>
                        <span className=" text-black font-bold">
                          $%_total_%
                        </span>
                      </p>
                    </div>
                    <button className=" ml-auto text-gray-500">
                      <i className="icon-delete"></i>
                    </button>
                  </div>
                </template>
                <div className="px-4 py-6 flex flex-col hidden">
                  <button className="w-full h-14 bg-orange-600 text-white font-medium rounded-lg order-1">
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
