import { Fragment} from 'react';
 import NavBar from "components/Navbar";
const Layout = ({ children }) => {
  return (
    <>
      <Fragment>
        <div className='appContainer'>
          <NavBar/>
          {/* <div>{children}</div> */}
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
