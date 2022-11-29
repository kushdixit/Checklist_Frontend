import * as React from "react";
import { SVGProps } from "react";

const MobileBurger = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={10}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M23.25 10H.75V7.5h22.5V10Zm0-7.5H.75V0h22.5v2.5Z" fill="#fff" />
  </svg>
);

export default MobileBurger;
