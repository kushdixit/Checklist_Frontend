import * as React from "react";

const Cancel = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={36} height={36} {...props}>
    <path
      style={{
        stroke: "none",
        fillRule: "nonzero",
        fill: "#000",
        fillOpacity: 0.2,
      }}
      d="M18 3C9.734 3 3 9.734 3 18s6.734 15 15 15 15-6.734 15-15S26.266 3 18 3Zm0 3c6.645 0 12 5.355 12 12s-5.355 12-12 12S6 24.645 6 18 11.355 6 18 6Zm-4.938 4.941-2.12 2.121L15.878 18l-4.938 4.941 2.121 2.122L18 20.12l4.941 4.942 2.122-2.122L20.12 18l4.942-4.938-2.122-2.12L18 15.878Zm0 0"
    />
  </svg>
);

export default Cancel;
