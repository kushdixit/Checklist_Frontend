import * as React from "react";

const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 8"
    width={340}
    fill="#73cb7f"
    {...props}
  >
    <path d="M.75 0C.34 0 0 .34 0 .75v5.5c0 .41.34.75.75.75h4.5c.41 0 .75-.34.75-.75V5H5v1H1V1h2V0H.75zM6 0v1C3.95 1 2.3 2.54 2.06 4.53 2.27 3.65 3.05 3 4 3h2v1l2-2-2-2z" />
  </svg>
);

export default SvgComponent;
