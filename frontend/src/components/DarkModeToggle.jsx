import React, { useEffect, useState } from "react";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Load saved theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") === "dark";
    setDarkMode(savedTheme);
    document.body.className = savedTheme ? "dark-mode" : "light-mode";
  }, []);

  // Toggle theme
  const toggleTheme = () => {
    setDarkMode((prevMode) => !prevMode);
    const newTheme = !darkMode ? "dark" : "light";
    localStorage.setItem("theme", newTheme);
    document.body.className = newTheme === "dark" ? "dark-mode" : "light-mode";
  };

  return (
    <div
      onClick={toggleTheme}
      className={`w-14 h-8 flex items-center rounded-full cursor-pointer p-1 ${
        darkMode ? "bg-gray-800" : "bg-gray-300"
      }`}
    >
      <div
        className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform ${
          darkMode ? "translate-x-6" : ""
        }`}
      ></div>
    </div>
  );
};

export default DarkModeToggle;
