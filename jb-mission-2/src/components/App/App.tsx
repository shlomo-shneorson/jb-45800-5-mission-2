import { BrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";

import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </div>
  );
}

export default App;
