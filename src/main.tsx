import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

import { ThemeProvider } from "./context/ThemeContext";

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
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>,
);
