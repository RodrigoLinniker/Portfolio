import React from "react";
import ReactDOM from "react-dom/client";
import { ToastContainer } from "react-toastify";
import App from "./App";
import "./styles/global.css";
import "react-toastify/dist/ReactToastify.min.css";
import ThemeContextProvider from "./hooks/useTheme";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <App />
      <ToastContainer />
    </ThemeContextProvider>
  </React.StrictMode>
);
