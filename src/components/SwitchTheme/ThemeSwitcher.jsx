import React from "react";
import useLocalStorage from "./useLocalStorage";

const ThemeSwitcher = () => {
  const [theme, setTheme] = useLocalStorage("theme", "light");

  function handleThemeSwitch() {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  return (
    <div
      className={`p-4 flex flex-col justify-center items-center min-h-screen ${
        theme === "dark" ? "bg-black" : "bg-white"
      } `}
    >
      <h1 className={`${theme === "dark" ? "text-white" : "text-black"}`}>
        Say hello world
      </h1>
      <button onClick={handleThemeSwitch} className="border p-2 bg-indigo-400">
        Change Theme
      </button>
    </div>
  );
};

export default ThemeSwitcher;
