import * as React from "react";

const SvgComponent = (props) => (
  <svg
    width={38}
    height={38}
    fill="none"
    viewBox="0 0 36 34"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#a)" fill="#1D2E88">
      <path d="M14 2.333a11.667 11.667 0 1 0 0 23.334 11.667 11.667 0 0 0 0-23.334Zm0 21a9.333 9.333 0 1 1 0-18.666 9.333 9.333 0 0 1 0 18.666Z" />
      <path d="M17.5 12.833h-2.333V10.5a1.167 1.167 0 1 0-2.333 0v2.333H10.5a1.167 1.167 0 0 0 0 2.334h2.334V17.5a1.167 1.167 0 1 0 2.333 0v-2.333H17.5a1.167 1.167 0 1 0 0-2.334Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h28v28H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgComponent;
