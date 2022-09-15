import * as React from 'react';
import loader from 'assets/loader.gif';

import {SpinnerWrapper,SpinnerImage} from 'styles/components/Spinner'
const Spinner = () => (
  <SpinnerWrapper>
    <SpinnerImage src={loader} alt='loader'/>
  </SpinnerWrapper>
);

export default Spinner;
