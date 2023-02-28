import * as React from "react";

const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={45}
    viewBox="0 0 24 24"
    fill="#147fc9"
    data-name="Bar Chart"
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0Z" data-name="Path 3716" />
    <path
      fill="#ec4e20"
      d="M20.7 20.1H3.3a.9.9 0 0 1-.9-.9V4.8a.9.9 0 1 1 1.8 0v13.5h16.5a.9.9 0 0 1 0 1.8ZM6.9 16.5a.9.9 0 0 1-.9-.9V9.3a.9.9 0 0 1 .9-.9.9.9 0 0 1 .9.9v6.3a.9.9 0 0 1-.9.9Zm3.6 0a.9.9 0 0 1-.9-.9V5.1a.9.9 0 0 1 .9-.9.9.9 0 0 1 .9.9v10.5a.9.9 0 0 1-.9.9Zm3.6 0a.9.9 0 0 1-.9-.9V12a.9.9 0 0 1 .9-.9.9.9 0 0 1 .9.9v3.6a.9.9 0 0 1-.9.9Zm3.6 0a.9.9 0 0 1-.9-.9v-5.4a.9.9 0 0 1 .9-.9.9.9 0 0 1 .9.9v5.4a.9.9 0 0 1-.9.9Z"
      data-name="BAR GRAPH"
    />
  </svg>
);

export default SvgComponent;
