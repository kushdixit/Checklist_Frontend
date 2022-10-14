import * as React from "react";

const SvgComponent = (props) => (
  <svg
    width={24}
    height={25}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      clipRule="evenodd"
      d="M11.274 3.214a8.56 8.56 0 1 1 0 17.122 8.56 8.56 0 0 1 0-17.122ZM19.898 18.988a1.411 1.411 0 1 1-.001 2.822 1.411 1.411 0 0 1 0-2.822Z"
      stroke="#888"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgComponent;
