import React from "react";

const Footer = () => {
  return (
    <footer className="l-container text-mercury">
      <div className="flex__div flex items-center justify-between mb-4 ">
        <div className="image__container w-24">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="logo__container"
          >
            <img
              className="max-w-full h-auto"
              src="/images/nike.png"
              alt="Nike Ecommere website logo"
            />
          </a>
        </div>
        <div className="socials flex items-center justify-center">
          <a
            href="https://www.instagram.com/nike/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-instagram  mr-2 text-[2rem] leading-[2rem] hover:bg-instgram-gradient hover:text-transparent bg-clip-text hover:scale-110" />
          </a>
          <a
            href="https://www.facebook.com/nike/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-facebook  mr-2 text-[2rem] leading-[2rem] hover:text-meta-blue-color hover:scale-110" />
          </a>
          <a
            href="https://www.youtube.com/user/NIKE"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-youtube  mr-2 text-[2rem] leading-[2rem] hover:text-youtube-red-color hover:scale-110" />
          </a>
          <a
            href="https://twitter.com/Nike"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bx bxl-twitter  mr-2 text-[2rem] leading-[2rem] hover:text-twitter-blue-color hover:scale-110" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
