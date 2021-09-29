import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
import { localStore } from "./redux/store";
import { BrowserRouter, HashRouter } from "react-router-dom";

ReactDOM.render(
  <Provider store={localStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);
