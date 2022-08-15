import Image from "next/image";
import React, { useContext } from "react";
import { Store } from "../context/StoreContext";
import { formatter } from "../helpers";
import { urlFor } from "../libraries/client";
import getStripe from "../libraries/getStripe";
import VisaCard from "./VisaCard";

const Cart = () => {
  const { cartItems, deleteProduct } = useContext(Store);
  const handleCheckout = async (event) => {
    event.preventDefault();
    const stripe = await getStripe();

    const response = await fetch("/api/checkout_sessions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cartItems),
    });

    if (response.statusCode === 500) return;
    const data = await response.json();

    stripe.redirectToCheckout({ sessionId: data.id });
  };
  return (
    <div
      className="absolute top-24 left-0 z-[100] w-full md:block w- md:w-[36rem] md:right-0 md:left-auto md:opacity-100 md:group-hover:opacity-100 md:group-hover:pointer-events-auto transition
    "
    >
      <div className="bg-white rounded-lg shadow-xl h-full">
        <div className="px-4 py-6 border-b flex justify-between items-center">
          <strong>Cart</strong>
        </div>
        {cartItems.length > 0 && (
          <div className="mt-2">
            <strong className="text-gray-500 mb-2 text-center w-full block">
              Testing Card
            </strong>
            <VisaCard />
          </div>
        )}
        {cartItems.length === 0 && (
          <div className="px-4 h-36 flex justify-center items-center">
            <strong className="text-gray-500">Your cart is empty</strong>
          </div>
        )}
        <div className="px-4 py-6 flex flex-col">
          <>
            {cartItems.length > 0 &&
              cartItems.map((item) => (
                <div className=" flex items-center mb-4" key={item._id}>
                  <>
                    <div className="w-16 h-16 rounded-lg mr-4 relative">
                      <Image
                        src={urlFor(item.image && item.image[0]).url()}
                        layout="fill"
                        loading="lazy"
                        alt={item.name}
                      />
                    </div>
                    <div className="text-gray-600">
                      <p>{item.name}</p>
                      <p>
                        <span>
                          {formatter.format(item.price)} &times;{" "}
                          <span className="">{item.quantity}</span>
                        </span>
                        <span className=" text-black font-bold">
                          {" "}
                          {formatter.format(item.price * item.quantity)}
                        </span>
                      </p>
                    </div>
                    <button
                      className=" ml-auto text-gray-500 cursor-pointer"
                      onClick={() => deleteProduct(item)}
                    >
                      <i className="bx bx-trash"></i>
                    </button>
                  </>
                </div>
              ))}
          </>
          <button
            onClick={handleCheckout}
            className="w-full h-14 bg-burnt-sienna text-white font-medium rounded-lg order-1"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
