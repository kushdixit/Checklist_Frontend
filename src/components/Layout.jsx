const Layout = ({ children }) => {
  return (
        <div className="appContainer">
          <div>{children}</div>
        </div>
  );
};

Layout.propTypes = {};

Layout.defaultProps = {};

export default Layout;
