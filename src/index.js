import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { HelmetProvider } from "react-helmet-async";
import { DarkModeContextProvider } from "./context/darkModeContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <DarkModeContextProvider>
        <App />
      </DarkModeContextProvider>
    </HelmetProvider>
  </React.StrictMode>
);
