import { Fragment } from "react";
const Layout = ({ children }) => {
  return (
    <>
      <Fragment>
        <div className="appContainer">
          <div>{children}</div>
        </div>
      </Fragment>
    </>
  );
};

Layout.propTypes = {};

Layout.defaultProps = {};

export default Layout;
