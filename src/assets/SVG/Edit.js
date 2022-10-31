import * as React from "react";

const SvgComponent = (props) => (
  <svg
    width={48}
    height={48}
    fill="none"
    viewBox="0 0 16 50"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#a)" fill="#1D2E88">
      <path d="M20.032.705a1.118 1.118 0 0 0-1.59 0L9.9 9.247a1.129 1.129 0 0 0-.285.473L8.22 14.377c-.12.398-.008.825.285 1.118.21.218.502.33.795.33.105 0 .217-.015.322-.045l4.658-1.395c.18-.06.345-.15.472-.285l8.543-8.543a1.124 1.124 0 0 0 0-1.59L20.032.705Z" />
      <path d="M22.5 10.875c-.622 0-1.125.504-1.125 1.125v7.5a1.877 1.877 0 0 1-1.875 1.875h-15A1.877 1.877 0 0 1 2.625 19.5v-15c0-1.034.841-1.875 1.875-1.875H12a1.125 1.125 0 0 0 0-2.25H4.5A4.13 4.13 0 0 0 .375 4.5v15A4.13 4.13 0 0 0 4.5 23.625h15a4.13 4.13 0 0 0 4.125-4.125V12c0-.621-.503-1.125-1.125-1.125Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgComponent;
