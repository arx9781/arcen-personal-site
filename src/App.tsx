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
              IPA /ˈɑrsn̩ / — pronounced{" "}
              <mark className="bg-secondary-dark/40 text-secondary-dark dark:bg-secondary-light/40 dark:text-secondary-light px-1.5 rounded-full font-mono font-bold">
                {" "}
                r-sen{" "}
              </mark>
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
        <p className="text-justify text-base p-4 dark:text-primary-dark text-primary-light">
          hi, i'm <span className="text-gradient">aditya</span> aka{" "}
          <span className="text-gradient">arcen</span>, a software engineering
          student; primarily working on the frontend with a heavy focus on{" "}
          <span className="text-gradient">reactjs</span>,{" "}
          <span className="text-gradient">nextjs</span>,{" "}
          <span className="text-gradient">tailwindcss</span>, and{" "}
          <span className="text-gradient">typescript</span>. my design language
          being <span className="text-gradient">minimalism</span> and{" "}
          <span className="text-gradient">neo-brutalism</span>, as you can see
          in this website.
          <br />
          <br />
          fascinated by the <span className="text-gradient">
            internet
          </span> and <span className="text-gradient">computers</span>, i've
          always wanted to make those programs myself and — that's why i'm{" "}
          <span className="text-gradient">here</span>.
          <br />
          <br />
          outside of programming, i maintain a relatively{" "}
          <span className="text-gradient">low profile</span>. playing games like{" "}
          <span className="text-gradient">valorant</span> and{" "}
          <span className="text-gradient">mobile legends</span>, and also
          watching <span className="text-gradient">anime</span> sometimes. if
          you're interested, hit me up on my{" "}
          <span className="text-gradient">
            socials for playing games and working on a project
          </span>
          .
          <hr className="w-full mx-auto border-0 h-[1px] bg-secondary-light dark:bg-secondary-dark my-12" />
        </p>
      </div>
    </div>
  );
}

export default App;
