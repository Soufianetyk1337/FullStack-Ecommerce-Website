import React, { useEffect, useRef } from "react";
import PopularProduct from "./PopularProduct";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const PopularProducts = ({ products }) => {
  const reviewNavigationPrevRef = React.useRef(null);
  const reviewNavigationNextRef = React.useRef(null);
  const sliderContainer = useRef(null);

  useEffect(() => {
    async function animate() {
      if (sliderContainer.current) {
        const ScrollReveal1 = (await import("scrollreveal")).default;
        ScrollReveal1().reveal(sliderContainer.current, {
          origin: "top",
          distance: "60px",
          duration: 1500,
          delay: 600,
        });
      }
    }
    animate();
  }, []);
  return (
    <div className="l-container">
      <div className="flex items-center justify-between mb-4">
        <h1 className="section-title text-mercury font-semibold">
          Popular
          <span className="text-burnt-sienna font-bold "> Products</span>
        </h1>
        <div className="arrows max-480:hidden">
          <i
            ref={reviewNavigationPrevRef}
            className="previousItem bx bx-left-arrow-alt navigation-icon"
          ></i>
          <i
            ref={reviewNavigationNextRef}
            className="nextItem bx bx-right-arrow-alt mr-0 navigation-icon active-icon"
          ></i>
        </div>
      </div>
      <div className="sliderWrapper" ref={sliderContainer}>
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          loop
          spaceBetween={50}
          slidesPerView={3}
          navigation={{
            prevEl: reviewNavigationPrevRef.current,
            nextEl: reviewNavigationNextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = reviewNavigationPrevRef.current;
            swiper.params.navigation.nextEl = reviewNavigationNextRef.current;
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            720: {
              slidesPerView: 2,
            },
            991: {
              slidesPerView: 3,
            },
          }}
          pagination={{
            el: ".popular-products-swiper-pagination",
            clickable: true,
          }}
          watchSlidesProgress
        >
          {products
            .sort((p1, p2) => p2.average_rating - p1.average_rating)
            .map((product) => (
              <SwiperSlide key={product._id}>
                <PopularProduct product={product} />
              </SwiperSlide>
            ))}
        </Swiper>
        <div className="popular-products-swiper-pagination swiper-pagination mt-0 flex justify-center items-center l-container static"></div>
      </div>
    </div>
  );
};

export default PopularProducts;
