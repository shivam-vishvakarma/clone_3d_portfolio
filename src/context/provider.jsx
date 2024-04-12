import { useState } from "react";
import { darkModeContext } from "./contexts";

export default function ContextProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <darkModeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      {children}
    </darkModeContext.Provider>
  );
}