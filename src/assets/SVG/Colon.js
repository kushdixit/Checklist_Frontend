import * as React from "react";

const SvgComponent = (props) => (
  <svg
    width={6}
    height={22}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M3 5.5c1.65 0 3-1.237 3-2.75C6 1.238 4.65 0 3 0S0 1.238 0 2.75C0 4.263 1.35 5.5 3 5.5Zm0 2.75c-1.65 0-3 1.238-3 2.75s1.35 2.75 3 2.75S6 12.512 6 11 4.65 8.25 3 8.25Zm0 8.25c-1.65 0-3 1.238-3 2.75S1.35 22 3 22s3-1.238 3-2.75-1.35-2.75-3-2.75Z"
      fill="#000"
    />
  </svg>
);

export default SvgComponent;
