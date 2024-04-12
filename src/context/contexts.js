import { createContext, useContext } from "react";

export const darkModeContext = createContext();
export const useDarkMode = () => (useContext(darkModeContext));