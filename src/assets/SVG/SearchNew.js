import * as React from "react";

const SvgComponent = (props) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M23.6 21.8 18 16.2c1.3-1.7 2.1-3.8 2.1-6.1 0-5.5-4.5-10-10-10S0 4.6 0 10.1s4.5 10 10 10c2.3 0 4.5-.8 6.2-2.2l5.6 5.6c.2.2.6.4.9.4.3 0 .6-.1.9-.4.5-.4.5-1.2 0-1.7ZM2.5 10.1C2.5 6 5.9 2.6 10 2.6s7.5 3.4 7.5 7.5-3.4 7.5-7.5 7.5-7.5-3.3-7.5-7.5Z"
      fill="url(#a)"
    />
    <defs>
      <linearGradient
        id="a"
        x1={1.282}
        y1={6.645}
        x2={24.902}
        y2={8.614}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#c9c9c9" />
        <stop offset={1} stopColor="#c9c9c9" />
      </linearGradient>
    </defs>
  </svg>
);

export default SvgComponent;
