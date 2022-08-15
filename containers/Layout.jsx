import Head from "next/head";
import React from "react";
import { Navbar } from "../components";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Nike Shoes App</title>
        <meta
          name="description"
          content="Inspiring the world's athletes, Nike delivers innovative products, experiences and services."
        />
        <meta httpEquiv="content-language" content="en-GB" />
        <meta name="application-name" content="Nike.com" />
        <meta property="og:title" content="Nike. Just Do It" />

        <meta
          property="og:description"
          content="Inspiring the world's athletes, Nike delivers innovative products, experiences and services."
        />

        <meta property="og:type" content="website" />

        <meta property="og:url" content="https://www.nike.com/ca/" />

        <meta property="og:locale" content="en-GB" />

        <meta property="og:site_name" content="Nike.com" />
      </Head>
      <Navbar />
      <main className="overflow-hidden">{children}</main>
    </>
  );
};

export default Layout;
