import { createContext } from "react";

const ThemeContext = createContext(["green", () => {}]);
ThemeContext.displayName = "ThemeContext";

export default ThemeContext;
