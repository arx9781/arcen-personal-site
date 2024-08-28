import { useState, useEffect } from "react";
import SunIcon from "./Icons/SunIcon";
import MoonIcon from "./Icons/MoonIcon";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    return (
      storedTheme ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light")
    );
  });

  useEffect(() => {
    document.body.classList.toggle("dark", theme === "dark");
    document.body.style.transition =
      theme === "dark" ? "background-color 1s ease-in-out" : "";
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleThemeChange = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <button
      onClick={handleThemeChange}
      className="transition-transform duration-500 ease-in-out hover:-rotate-180"
    >
      <div className="transition-transform duration-500 ease-in-out">
        {theme === "dark" ? <SunIcon /> : <MoonIcon />}
      </div>
    </button>
  );
};

export default ThemeToggle;
