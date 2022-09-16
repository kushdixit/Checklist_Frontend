import * as React from "react";
import loader from "assets/loader.gif";
import { SpinnerContainer } from "styles/components/Spinner";
const Spinner = () => (
  <SpinnerContainer>
    <img src={loader} alt="loader" />
  </SpinnerContainer>
);

export default Spinner;
