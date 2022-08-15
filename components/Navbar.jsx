import Image from "next/image";
import React, { useContext, useEffect, useRef, useState } from "react";
import { Store } from "../context/StoreContext";
import Cart from "./Cart";
function scrollHeader(headerRef) {
  const header = headerRef;
  if (window.scrollY >= 50) {
    header.classList.add("scroll-header");
  } else {
    header.classList.remove("scroll-header");
  }
}

const Navbar = () => {
  const { totalQuantities, toggleShowCart, setToggleShowCart } =
    useContext(Store);
  const headerRef = useRef();
  const [sectionById, setSectionById] = useState();
  useEffect(() => {
    const header = headerRef.current;
    window.addEventListener("scroll", () => scrollHeader(header, window));
    return () => {
      window.removeEventListener("scroll", scrollHeader);
    };
  }, []);
  useEffect(() => {
    const section = document.getElementById(sectionById);
    window.scrollTo({
      top: section?.offsetTop,
      behavior: "smooth",
    });

    return () => {};
  }, [sectionById]);

  return (
    <header
      onClick={(event) => setSectionById(event.target.getAttribute("data-id"))}
      ref={headerRef}
      className="fixed top-0 left-0 w-full z-50 transition bg-transparent"
    >
      <nav className="l-container flex items-center justify-between h-14 min-1023:h-20">
        <a href="#" className="w-24 h-[72px] relative" title="Nike Company">
          <Image
            src="/images/nike.png"
            alt="Sneakers"
            layout="fill"
            loading="lazy"
          />
        </a>
        <div className="group nav__menu">
          <ul className="nav__list">
            <li className="nav__item">
              <a href={void 0} className="nav__link nav-link" id="hero-link">
                <i className="bx bx-home" data-id="hero"></i>
                <span
                  data-id="hero"
                  className="hover:text-burnt-sienna hover:font-semibold"
                >
                  Home
                </span>
              </a>
            </li>

            <li className="nav__item">
              <a
                href={void 0}
                className="nav__link nav-link"
                id="featured-link"
              >
                <i className="bx bxs-city" data-id="featured"></i>
                <span
                  data-id="featured"
                  className="hover:text-burnt-sienna hover:font-semibold"
                >
                  About
                </span>
              </a>
            </li>
            <li className="nav__item">
              <a href={void 0} className="nav__link nav-link" id="popular-link">
                <i className="bx bx-trending-up" data-id="popular"></i>
                <span
                  data-id="popular"
                  className="hover:text-burnt-sienna hover:font-semibold"
                >
                  Popular
                </span>
              </a>
            </li>
            <li className="nav__item">
              <a href={void 0} className="nav__link nav-link" id="reviews-link">
                <i className="bx bx-message-dots" data-id="reviews"></i>
                <span
                  data-id="reviews"
                  className="hover:text-burnt-sienna hover:font-semibold"
                >
                  Reviews
                </span>
              </a>
            </li>
            <li className="nav__item">
              <a
                href={void 0}
                className="nav__link nav-link"
                id="newsletter-link"
              >
                <i className="bx bx-news" data-id="newsletter"></i>

                <span
                  data-id="newsletter"
                  className="hover:text-burnt-sienna  hover:font-semibold"
                >
                  Newsletter
                </span>
              </a>
            </li>
          </ul>
        </div>
        <button
          className="text-lg relative text-gray-600 mr-8"
          onClick={() => {
            setToggleShowCart(!toggleShowCart);
          }}
        >
          <i className="bx bx-cart text-2xl font-bold text-white"></i>
          <span className=" absolute -top-2 -right-4 w-6 bg-burnt-sienna text-white text-xs rounded-full hidden"></span>
          <span className="sr-only">Cart</span>
          <span className="font-semibold text-xs absolute bg-burnt-sienna rounded-full text-white right-[-12px] top-[-6px] w-[18px] h-[18px]">
            {totalQuantities}
          </span>
        </button>

        {toggleShowCart && <Cart />}
      </nav>
    </header>
  );
};

export default Navbar;
