/* eslint-disable no-unused-vars */
/* eslint-disable @next/next/no-html-link-for-pages */
import Image from "next/image";
import React, { useContext, useRef, useState } from "react";
import { Store } from "../context/StoreContext";
import Cart from "./Cart";

const Navbar = () => {
  const { totalQuantities, toggleShowCart, setToggleShowCart } =
    useContext(Store);

  const cartRef = useRef(null);
  const [toggle, setToggle] = useState(false);
  return (
    <header className="px-4">
      <div className="md:container lg:max-w-screen-xl mx-auto md:border-b md:relative">
        <div className="flex items-center justify-between h-20 md:items-center">
          <button className="text-gray-600 md:hidden">
            <i className="bx bx-menu text-2xl font-bold"></i>
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
          <div className="md:flex md:items-center group">
            <button
              className=" text-lg relative text-gray-600"
              onClick={() => {
                console.log("Clicked", toggleShowCart);
                setToggleShowCart(!toggleShowCart);
              }}
            >
              <i className="bx bx-cart text-2xl font-bold"></i>
              <span className=" absolute -top-2 -right-4 w-6 bg-orange-600 text-white text-xs rounded-full hidden"></span>
              <span className="sr-only">Cart</span>
              <span className="font-semibold text-xs absolute bg-orange-300 rounded-full text-white right-[-12px] top-[-6px] w-[18px] h-[18px]">
                {totalQuantities}
              </span>
            </button>
          </div>
        </div>
      </div>
      {toggleShowCart && <Cart />}
    </header>
  );
};

export default Navbar;
