import React, { createContext, useState, useContext } from "react";

interface ContextProps {
  theme: string;
  toggleTheme?: any;
}

export const ThemeContext = createContext<ContextProps>({ theme: "light" });

interface Props {
  children: any;
}

export const ThemeContextProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

//Custom hook
export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useThemeContext must be used within a ThemeProvider");
  }

  return context;
};
