import * as React from "react";
import loader from "assets/loader.gif";
import { SpinnerContainer,LoaderImage } from "styles/components/Spinner";

const Spinner = () => (
  <SpinnerContainer>
    <LoaderImage src={loader} alt="loader" />
  </SpinnerContainer>
);

export default Spinner;
