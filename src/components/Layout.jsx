import { Fragment} from 'react';
 import NavBar from "components/Navbar";
const Layout = () =>  (
  
      <Fragment>
        <div className='appContainer'>
          <NavBar/>
        </div>
      </Fragment>

  );


Layout.propTypes = {

};

Layout.defaultProps = {};

export default Layout;
