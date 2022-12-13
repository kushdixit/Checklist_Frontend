import * as React from "react";

const SvgComponent = (props) => (
  <svg
    width="28"
    height="48"
    fill="none"
    viewBox="0 0 105 250"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 56a56 56 0 1 1 112 0A56 56 0 0 1 0 56Zm52.804 23.968 32.241-40.305-5.824-4.66L51.73 69.359 32.256 53.133l-4.779 5.734 25.327 21.108v-.007Z"
      fill="#000"
    />
  </svg>
);

export default SvgComponent;
