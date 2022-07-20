import Image from "next/image";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
const ProductImagesSlider = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
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
            width={350}
            height={350}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="swiper-slide"
            src="/images/image-product-2.jpg"
            alt="Product image 1"
            width={350}
            height={350}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="swiper-slide"
            src="/images/image-product-3.jpg"
            alt="Product image 1"
            width={350}
            height={350}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="swiper-slide"
            src="/images/image-product-4.jpg"
            alt="Product image 1"
            width={350}
            height={350}
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
            width={200}
            height={200}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="swiper-thumb"
            src="/images/image-product-3.jpg"
            alt="Product image thumbnail 1"
            width={200}
            height={200}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="swiper-thumb"
            src="/images/image-product-4.jpg"
            alt="Product image thumbnail 1"
            width={200}
            height={200}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default ProductImagesSlider;
