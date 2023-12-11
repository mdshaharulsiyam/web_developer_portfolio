import React, { useEffect } from 'react';

const ThemeChange = () => {
  useEffect(() => {
    const themeToggleDarkIcon = document.getElementById("theme-toggle-dark-icon");
    const themeToggleLightIcon = document.getElementById("theme-toggle-light-icon");
    const themeToggleBtn = document.getElementById("theme-toggle");
    if (
      localStorage.getItem("color-theme") === "dark" ||
      (!("color-theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      themeToggleLightIcon?.classList?.remove("hidden");
    } else {
      themeToggleDarkIcon?.classList?.remove("hidden");
    }

    const toggleTheme = () => {
      themeToggleDarkIcon.classList.toggle("hidden");
      themeToggleLightIcon.classList.toggle("hidden");

      document.documentElement.classList.toggle("dark");
      const isDarkMode = document.documentElement.classList.contains("dark");
      localStorage.setItem("color-theme", isDarkMode ? "dark" : "light");
    };

    themeToggleBtn?.addEventListener("click", toggleTheme);

    return () => {
      themeToggleBtn?.removeEventListener("click", toggleTheme);
    };
  }, []); 
  useEffect(() => {
    const menuOpen = document.getElementById("menu-toggle-open-icon");
    const menuClose = document.getElementById("menu-toggle-close-icon");
    const navbar = document.getElementById("navbar");
    const menuToggleBtn = document.getElementById("menu-toggle");

    const toggleMenu = () => {
      console.log("click");
      navbar.classList.toggle("hidden");
      menuOpen.classList.toggle("hidden");
      menuClose.classList.toggle("hidden");
    };

    menuToggleBtn?.addEventListener("click", toggleMenu);

    return () => {
      menuToggleBtn?.removeEventListener("click", toggleMenu);
    };
  }, []);
  return (
    <div className="section-bg">
      <div className="w-full flex justify-between px-4">
        <a href="index.html">
          <img className="h-[26px] lg:h-[32px]" src="images/logo/logo.png" alt="logo" />
        </a>
        <div className="flex items-center">
          <button id="theme-toggle" type="button" className="dark-light-btn">
            <i id="theme-toggle-dark-icon" className="fa-solid text-xl fa-moon hidden"></i>
            <i id="theme-toggle-light-icon" className="fa-solid fa-sun text-xl hidden"></i>
          </button>
          <button id="menu-toggle" type="button" className="menu-toggle-btn">
            <i id="menu-toggle-open-icon" className="fa-solid fa-bars text-xl"></i>
            <i id="menu-toggle-close-icon" className="fa-solid fa-xmark text-xl hidden"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThemeChange;
