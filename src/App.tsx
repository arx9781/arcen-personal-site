import { useState, useEffect } from "react";
import SunIcon from "./components/Icons/SunIcon";
import MoonIcon from "./components/Icons/MoonIcon";

function App() {
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
    <div className="min-w-screen min-h-screen bg-background-light transition-all duration-500 ease-in-out dark:bg-background-dark">
      <div className="mx-auto w-[90%] sm:w-[50%]">
        <div className="flex w-full flex-row items-center justify-center p-4 pt-8">
          <div className="flex w-[80%] flex-col items-start justify-between">
            <h1 className="text-3xl font-bold text-secondary-light dark:text-secondary-dark">
              arcen
            </h1>
            <p className="text-xs font-medium text-secondary-light dark:text-secondary-dark md:text-xl">
              IPA /ˈɑrsn̩ / — name intials & eng student
            </p>
          </div>
          <div className="flex w-[20%] items-center justify-end">
            <button
              onClick={handleThemeChange}
              className="transition-transform duration-500 ease-in-out hover:-rotate-180"
            >
              <div className="transition-transform duration-500 ease-in-out">
                {theme === "dark" ? <SunIcon /> : <MoonIcon />}
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
