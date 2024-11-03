import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RecoilRoot>
      <BrowserRouter basename="my-homework">
        <App />
      </BrowserRouter>
    </RecoilRoot>
  </StrictMode>
);
