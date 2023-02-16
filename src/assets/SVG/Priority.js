import * as React from "react";

const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={23}
    viewBox="0 0 48 48"
    {...props}
  >
    <path d="M6 24c0 12.1.4 20 1 20 .5 0 1-3.5 1.2-7.7l.3-7.8 4.3-.9c3.5-.7 5.7-.5 11.7 1.4 6.2 1.9 8.3 2.2 12.2 1.4l4.8-.9.3-11.6.3-11.6-5 1.1C32.8 8.2 31 8 24.6 6s-8.3-2.2-12.1-1.3c-2.5.6-4.5.6-4.5.2 0-.5-.4-.9-1-.9s-1 7.3-1 20z" />
  </svg>
);

export default SvgComponent;
