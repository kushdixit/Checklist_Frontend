import * as React from "react";

const SvgComponent = (props) => (
  <svg
    width={50}
    height={45}
    fill="none"
    viewBox="0 0 27 30"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M21.25 15v-.113a1.1 1.1 0 0 0-.075-.35.9.9 0 0 0-.137-.237 1.26 1.26 0 0 0-.113-.163l-3.575-3.75a1.252 1.252 0 0 0-1.813 1.726l1.538 1.637H10a1.25 1.25 0 0 0 0 2.5h6.988l-1.625 1.613a1.249 1.249 0 0 0 0 1.774 1.249 1.249 0 0 0 1.774 0l3.75-3.75a1.25 1.25 0 0 0 .263-.4c.066-.154.1-.32.1-.487Z"
      fill="#1D2E88"
    />
    <path
      d="M15 2.5a12.5 12.5 0 1 0 0 25 12.5 12.5 0 0 0 0-25ZM15 25a10 10 0 1 1 0-20 10 10 0 0 1 0 20Z"
      fill="#1D2E88"
    />
  </svg>
);

export default SvgComponent;
