import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [searchTxt, setSearchTxt] = useState("india");
  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme);
    const body = document.querySelector("body");
    const toggleBtn = document.querySelector(".theme-toggle-btn");
    const submitBtn = document.querySelector(".submit-btn");
    const formInput = document.querySelector(".form-input");
    formInput.classList.toggle("dark-theme", newDarkTheme);
    submitBtn.classList.toggle("dark-theme", newDarkTheme);
    toggleBtn.classList.toggle("dark-theme", newDarkTheme);
    body.classList.toggle("dark-theme", newDarkTheme);
  };
  return (
    <AppContext.Provider
      value={{
        isDarkTheme,
        toggleDarkTheme,
        searchTxt,
        setSearchTxt,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
