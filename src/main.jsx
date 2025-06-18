import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { CalendlyProvider } from "./context/CalendlyContext"; // Import CalendlyProvider
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <CalendlyProvider>
        <App />
      </CalendlyProvider>
    </HelmetProvider>
  </StrictMode>
);
