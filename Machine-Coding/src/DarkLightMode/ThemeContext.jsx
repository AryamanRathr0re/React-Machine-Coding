import React, { createContext, useState } from "react";

export const themeContext = createContext();
const ThemeContext = ({ children }) => {
  const [theme, setTheme] = useState("light");

  function toggleTheme() {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }
  return (
    <div>
      <themeContext.Provider value={{ theme, toggleTheme }}>
        {children}
      </themeContext.Provider>
    </div>
  );
};

export default ThemeContext;
