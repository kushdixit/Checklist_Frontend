import React from "react";
import { useSelector } from "react-redux";
import CustomRouter from "components/CustomRouter";
import Layout from "components/Layout";
import Spinner from "components/Spinner";
import { gapi } from "gapi-script";

const App = () => {
  const loaderVisible = useSelector((state) => state.loader?.loaderVisible);

  // useEffect(() => {
  //   function start() {
  //     gapi.client.init({
  //       clientId:
  //         "889277139020-75dbj8v51vs4af256tggoooibgpkqnao.apps.googleusercontent.com",
  //       scope: "",
  //     });
  //   }
  //   gapi.load("client:auth2", start);
  // });

  return (
    <div className="App">
      {loaderVisible && <Spinner />}
      <header className="App-header">
        <Layout />
        <CustomRouter />
      </header>
    </div>
  );
};

export default App;
