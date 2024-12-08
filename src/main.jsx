import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./Components -- TrendSphere/Utils/ReduxTools/ReduxStore/Store/Store.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RouterElements } from "./Components -- TrendSphere/Extra_components/Router/RouterElements.jsx";


const router = createBrowserRouter(RouterElements)

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
