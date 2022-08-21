import * as React from 'react';
import loader from 'assets/loader.gif';
const Spinner = () => (
  <div
    style={{
      display: 'flex',
      position: 'fixed',
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 99999,
    }}>
    <img src={loader} alt='loader' style={{ width: '80px', zIndex: 99999 }} />
  </div>
);

export default Spinner;
