import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

export type PortfolioMode = "modern" | "retro";

type PortfolioModeContextValue = {
  mode: PortfolioMode;
  setMode: (mode: PortfolioMode) => void;
  toggleMode: () => void;
};

const PortfolioModeContext = createContext<PortfolioModeContextValue | undefined>(undefined);
const STORAGE_KEY = "stanley-portfolio-mode";

export const PortfolioModeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mode, setModeState] = useState<PortfolioMode>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored === "retro" || stored === "modern" ? stored : "modern";
    } catch {
      return "modern";
    }
  });

  const setMode = (nextMode: PortfolioMode) => {
    setModeState(nextMode);
    try {
      localStorage.setItem(STORAGE_KEY, nextMode);
    } catch {
      // Ignore storage failures in private/incognito contexts.
    }
  };

  const toggleMode = () => setMode(mode === "modern" ? "retro" : "modern");

  useEffect(() => {
    document.documentElement.setAttribute("data-portfolio-mode", mode);
  }, [mode]);

  const value = useMemo(() => ({ mode, setMode, toggleMode }), [mode]);

  return (
    <PortfolioModeContext.Provider value={value}>
      {children}
    </PortfolioModeContext.Provider>
  );
};

export const usePortfolioMode = () => {
  const value = useContext(PortfolioModeContext);
  if (!value) {
    throw new Error("usePortfolioMode must be used inside PortfolioModeProvider");
  }
  return value;
};
