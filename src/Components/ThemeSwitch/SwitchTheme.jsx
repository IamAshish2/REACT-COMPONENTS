import React, { useState } from "react";
import UseLocalStorage from "./UseLocalStorage";

const SwitchTheme = () => {
  const [theme, setTheme] = UseLocalStorage('theme','dark');

  const handleThemeChange = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className={`${theme === 'dark' ? 'bg-black' : 'bg-white'} h-screen w-full `}>
      <div className="container">
        <p className={theme == 'dark' ? 'text-white' : 'text-black'}>Hello world the theme is {theme}</p>
        <button
          onClick={() => {
            handleThemeChange();
          }}
          className={` ${theme == 'dark' ? 'bg-white text-black' : 'bg-black text-white '}border border-gray-800 m-5 p-6 font-bold text-xl`}
        >
          Change Theme
        </button>
      </div>
    </div>
  );
};

export default SwitchTheme;
