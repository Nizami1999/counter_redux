import { createStore } from "redux";
import reducer from "./reducer";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./components/app";

// Redux
const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
