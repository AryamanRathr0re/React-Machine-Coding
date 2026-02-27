import React, { useContext } from "react";
import { ThemeCtx } from "./context";
const ThemeComponent = () => {
  const { theme, toggleTheme } = useContext(ThemeCtx);
  let styles = {
    backgroundColor: theme === "light" ? "#fff" : "#000",
    color: theme === "light" ? "#000" : "#fff",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };
  return (
    <div style={styles}>
      <h1>{theme} Mode</h1>
      <button onClick={toggleTheme}>Toggle theme</button>
    </div>
  );
};

export default ThemeComponent;
