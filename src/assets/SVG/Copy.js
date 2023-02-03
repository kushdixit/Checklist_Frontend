import * as React from "react";

const SvgComponent = (props) => (
  <svg
    width="23"
    height="28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 14 18"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.5 2.596v7.216a2.813 2.813 0 0 0 2.628 2.807l.184.006h4.966a1.688 1.688 0 0 1-1.59 1.125H3.75a3.375 3.375 0 0 1-3.375-3.375V4.187A1.687 1.687 0 0 1 1.5 2.596ZM9.938.25a1.687 1.687 0 0 1 1.687 1.688v7.875A1.687 1.687 0 0 1 9.937 11.5H4.314a1.687 1.687 0 0 1-1.688-1.688V1.939A1.687 1.687 0 0 1 4.313.25h5.625Zm0 1.125H4.311a.563.563 0 0 0-.562.563v7.875a.562.562 0 0 0 .563.562h5.625a.562.562 0 0 0 .562-.563V1.939a.563.563 0 0 0-.563-.563Z"
      fill="#000"
    />
  </svg>
);

export default SvgComponent;
