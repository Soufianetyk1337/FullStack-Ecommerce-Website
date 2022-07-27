import React from "react";

const Star = ({ width, height, fillColor, emptyColor, classes }) => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 32 32"
        className={classes}
      >
        <defs>
          <linearGradient id="grad">
            <stop offset="50%" stopColor={fillColor}></stop>
            <stop offset="0%" stopColor={emptyColor}></stop>
          </linearGradient>
        </defs>
        <path
          fill="url(#grad)"
          d="M20.388 10.918L32 12.118l-8.735 7.749L25.914 31.4l-9.893-6.088L6.127 31.4l2.695-11.533L0 12.118l11.547-1.2L16.026.6l4.362 10.318z"
        ></path>
      </svg>
    </div>
  );
};

export default Star;
