import { createContext, useContext, useState, useEffect } from "react";

const CalendlyContext = createContext();

export function CalendlyProvider({ children }) {
  const [isCalendlyLoaded, setIsCalendlyLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    script.onload = () => {
      console.log("Calendly script loaded");
      setIsCalendlyLoaded(true);
    };
    script.onerror = () => {
      console.error("Failed to load Calendly script");
      setIsCalendlyLoaded(false);
    };
    document.body.appendChild(script);

    return () => document.body.removeChild(script);
  }, []);

  return (
    <CalendlyContext.Provider value={{ isCalendlyLoaded }}>
      {children}
    </CalendlyContext.Provider>
  );
}

export function useCalendly() {
  const context = useContext(CalendlyContext);
  if (!context) {
    throw new Error("useCalendly must be used within a CalendlyProvider");
  }
  return context;
}
