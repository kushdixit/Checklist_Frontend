import { useSelector } from 'react-redux'
import Router from "components/Router";
import Layout from 'components/Layout';
import Spinner from 'components/Spinner'
import './App.css';
const App=({Component,pageProps})=> {
  const loaderVisible = useSelector((state) => state.loader.loaderVisible)
  return (
    <div className="App">
      {loaderVisible && <Spinner />}
      <header className="App-header">
          <Layout children={<Component {...pageProps} />} />
          <Router/>
      </header>
    </div>
  );
}

export default App;
