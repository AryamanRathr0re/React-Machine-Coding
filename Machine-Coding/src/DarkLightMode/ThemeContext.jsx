import React, { useState } from "react";
import { ThemeCtx } from "./context";
const ThemeContext = ({ children }) => {
  const [theme, setTheme] = useState("light");

  function toggleTheme() {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }
  return (
    <div>
      <ThemeCtx.Provider value={{ theme, toggleTheme }}>
        {children}
      </ThemeCtx.Provider>
    </div>
  );
};

export default ThemeContext;
