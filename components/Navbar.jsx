/* eslint-disable @next/next/no-html-link-for-pages */
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <header className="px-4">
      <div className="md:container lg:max-w-screen-xl mx-auto md:border-b md:relative">
        <div className="flex items-center h-20 md:items-center">
          <button className="js-nav-btn text-gray-600 md:hidden">
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
          <div className="js-nav js-nav-btn fixed inset-0 z-50 bg-black bg-opacity-50 hidden"></div>
          <nav className="js-nav fixed top-0 left-0 w-2/3 h-screen z-50 bg-white px-5 hidden md:static md:block md:w-auto md:h-auto md:mx-auto">
            <button className="js-nav-btn text-gray-600 h-20 md:hidden">
              <i className="icon-close"></i>
              <span className="sr-only">Close</span>
            </button>
            <div className="mt-8 flex flex-col space-y-4 font-bold text-lg md:flex-row md:space-y-0 md:space-x-4 md:mt-0 md:h-full">
              <a href="#" className="nav-link">
                Collections
              </a>
              <a href="#" className="nav-link">
                Men
              </a>
              <a href="#" className="nav-link">
                Women
              </a>
              <a href="#" className="nav-link">
                About
              </a>
              <a href="#" className="nav-link">
                Contact
              </a>
            </div>
          </nav>
          <div className="md:flex md:items-center group">
            <button className="js-basket-btn text-lg relative text-gray-600">
              <i
                className="bx bx-cart"
                style={{ fontWeight: "bold", fontSize: "21px" }}
              ></i>
              <span className="js-basket-qty absolute -top-2 -right-4 w-6 bg-orange-600 text-white text-xs rounded-full hidden"></span>
              <span className="sr-only">Cart</span>
            </button>
            <div className="js-basket absolute top-24 left-0 z-40 w-full hidden md:block md:w-96 md:right-0 md:left-auto md:opacity-0 md:pointer-events-none md:group-hover:opacity-100 md:group-hover:pointer-events-auto transition">
              <div className="bg-white rounded-lg shadow-xl mx-2">
                <div className="px-4 py-6 border-b">
                  <strong>Cart</strong>
                </div>
                <div className="js-basket-empty px-4 h-36 flex justify-center items-center">
                  <strong className="text-gray-500">Your cart is empty</strong>
                </div>
                <template className="js-basket-template">
                  <div className="js-basket-item flex items-center mb-4">
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
                          $%_price_% &times;{" "}
                          <span className="js-basket-item-qty">%_qty_%</span>
                        </span>
                        <span className="js-basket-item-total text-black font-bold">
                          $%_total_%
                        </span>
                      </p>
                    </div>
                    <button className="js-basket-remove ml-auto text-gray-500">
                      <i className="icon-delete"></i>
                    </button>
                  </div>
                </template>
                <div className="js-basket-content px-4 py-6 flex flex-col hidden">
                  <button className="w-full h-14 bg-orange-600 text-white font-medium rounded-lg order-1">
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
          <button className="ml-6">
            <div className="h-8 w-8 md:h-12 md:w-12 border-2 rounded-full hover:border-orange-600 transition relative">
              <Image
                src="/images/image-avatar.png"
                alt="User avatar"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <span className="sr-only">Avatar</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
