import * as React from "react";
import { SVGProps } from "react";

const SvgComponent = (props) => (
  <svg
    width="47"
    height="55"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 10 23 3"
    {...props}
  >
    <path
      d="M18 21h-6a3 3 0 0 1-3-3v-6a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3Zm-6-10a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1h-6Z"
      fill="#000"
    />
    <path
      d="M9.73 15H5.67A2.68 2.68 0 0 1 3 12.33V5.67A2.68 2.68 0 0 1 5.67 3h6.66A2.68 2.68 0 0 1 15 5.67V9.4h-2V5.67a.67.67 0 0 0-.67-.67H5.67a.67.67 0 0 0-.67.67v6.66a.67.67 0 0 0 .67.67h4.06v2Z"
      fill="#000"
    />
  </svg>
);

export default SvgComponent;
