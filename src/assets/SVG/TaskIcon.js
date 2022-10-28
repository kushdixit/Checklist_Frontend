import * as React from "react";

const SvgComponent = (props) => (
  <svg
    width={32}
    height={24}
    fill="none"
    viewBox="0 0 16 12"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path stroke="#1D2E88" d="M0 .5h18M0 4.5h18M0 8.5h18" />
  </svg>
);

export default SvgComponent;
