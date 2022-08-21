import { Fragment} from 'react';
import NavBar from "components/Navbar";
const Layout = ({ children }) => {
  return (
    <>
      <Fragment>
        <div className='appContainer'>
          <div>{children}</div>
          {/* <NavBar/> */}
        </div>
      </Fragment>
    </>
  );
};

Layout.propTypes = {
  // children: nodePropType.isRequired,
};

Layout.defaultProps = {};

export default Layout;
