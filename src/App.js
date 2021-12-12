import { React } from "react";
import Products from "./components/products";
import store from "./redux/store";
import { Provider } from 'react-redux'
import Layout from "./layout";
import Filterbar from "./components/filterbar";

function App() {
  return (
    <Provider store={store}>
      <Layout >
        <Filterbar />
        <Products />
      </Layout>
    </Provider>
  );
}

export default App;
