import React, { createContext, useState } from "react";

export const AppearanceContext = createContext();

const AppearanceProvider = (props) => {
  const [isDarkMode, setisDarkMode] = useState(false);

  const toggleAppearance = () => {
    setisDarkMode(!isDarkMode);
  };
  return (
    <AppearanceContext.Provider value={{ isDarkMode, toggleAppearance }}>
      {props.children}
    </AppearanceContext.Provider>
  );
};

export default AppearanceProvider;
