import Head from "next/head";
import { useEffect, useState } from "react";
import { Hero, PopularProducts, FeaturedProduct, Reviews, Newsletter, Footer } from "../components";
import { clientSanity } from "../libraries/client";

export default function Home({ products, heroData, reviewsData, aboutData }) {
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  return (
    <>
      <Head>
        <title>Nike Shop App</title>
        <link
          rel="icon"
          sizes="128x128"
          href="https://www.nike.com/android-icon-128x128.png"
        />
        <link
          rel="icon"
          sizes="192x192"
          href="https://www.nike.com/android-icon-192x192.png"
        />
      </Head>
      <section className="hero l-section" id="hero" >
        <Hero heroData={heroData && heroData[0]} />
      </section>
      <section className="featured l-section" id="featured">
        <FeaturedProduct aboutData={aboutData} />
      </section>
      <section className="popular l-section" id="popular">
        <PopularProducts products={products} />
      </section>
      <section className="reviews l-section" id="reviews">
        <Reviews reviewsData={reviewsData} />
      </section>
      <Newsletter id="newsletter" />
      <Footer />
      <div className="h-[86px] w-full"></div>
      {showTopBtn && <button
        type="button"
        role={"button"}
        onClick={goToTop}
        className="fixed right-4 bottom-4 shadow-largest inline-flex p-2 rounded text-mercury text-xl leading-5 z-10 duration-300 glass-background hover:scale-110 hover:-translate-y-1 hover:text-burnt-sienna">
        <i className='bx bxs-chevrons-up'></i>
      </button>}


    </>
  );
}

export const getServerSideProps = async () => {
  const productQuery = '*[_type == "product"]';
  const products = await clientSanity.fetch(productQuery);
  const bannerQuery = '*[_type == "banner"]';
  const heroData = await clientSanity.fetch(bannerQuery);
  const reviewsQuery = '*[_type == "review"]';
  const reviewsData = await clientSanity.fetch(reviewsQuery);
  const aboutQuery = '*[_type == "about"]';
  const aboutData = await clientSanity.fetch(aboutQuery);
  return {
    props: { products, heroData, reviewsData, aboutData },
  };
};
