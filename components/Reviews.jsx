import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination } from "swiper";
import { urlFor } from "../libraries/client";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import { averageRatingToStars } from "../helpers";
const Reviews = ({ reviewsData }) => {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  const sliderContainer = useRef(null);

  useEffect(() => {
    async function animate() {
      if (sliderContainer.current) {
        const ScrollReveal1 = (await import("scrollreveal")).default;
        ScrollReveal1().reveal(sliderContainer.current, {
          origin: "top",
          distance: "60px",
          duration: 1500,
          delay: 700,
          reset: true,
        });
      }
    }
    animate();
  }, []);
  return (
    <div className="l-container">
      <div className="flex__div flex items-center justify-between mb-4">
        <h2 className="section-title text-mercury">
          What Our
          <span className="review__heading  text-burnt-sienna font-bold">
            {" "}
            Customers Says{" "}
          </span>
        </h2>
        <div className="arrows max-480:hidden">
          <i
            ref={navigationPrevRef}
            className="bx bx-left-arrow-alt  text-2xl text-mercury border-solid border border-white/20 p-1 rounded leading-[1.5rem] mr-4"
          ></i>
          <i
            ref={navigationNextRef}
            className="bx bx-right-arrow-alt active text-2xl text-mercury border-solid border border-white/20 p-1 rounded leading-[1.5rem] active-icon"
          ></i>
        </div>
      </div>
      <div className="reviews__grid sliderWrapper" ref={sliderContainer}>
        <Swiper
          modules={[Navigation, Pagination, A11y]}
          loop
          spaceBetween={50}
          slidesPerView={3}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            swiper.params.navigation.nextEl = navigationNextRef.current;
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
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          {reviewsData.map((review, starIndex) => (
            <SwiperSlide key={review._id}>
              <div
                key={review._id}
                className="review__card flex items-center justify-center flex-col rounded-xl bg-white/5 backdrop-blur-sm px-6 py-3 "
              >
                <div className="customer__image w-16 h-16 bg-white rounded-full relative">
                  <Image
                    src={urlFor(review.image && review.image).url()}
                    layout="fill"
                    loading="lazy"
                    alt={`${review.fullname} customer image`}
                  />
                </div>
                <div className="review__data text-center">
                  <p className="text-white/70 text-xs leading-4 font-normal my-4 mx-0 py-0 px-4">
                    {review.review}
                  </p>
                  <div className="review__stars my-4 mx-0 flex justify-center items-center">
                    {averageRatingToStars(review.stars, starIndex)}
                    <span className="text-sm leading-none text-burnt-sienna">
                      ({review.stars})
                    </span>
                  </div>
                  <h3 className="customer text-mercury tracking-[0.075rem] font-semibold">
                    {review.fullname}
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Reviews;
