import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import Providers from "./shared/providers/Providers";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Providers />
  </React.StrictMode>
);
