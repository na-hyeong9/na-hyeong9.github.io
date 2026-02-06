import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import App from "./App.js"; -> 확장자 .js 제거 (Vite가 자동으로 .tsx를 찾습니다)
import App from "./App";

import "./index.css";
import "./assets/styles/main.scss";

if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

// null 체크
const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found. Please check index.html");
}

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
