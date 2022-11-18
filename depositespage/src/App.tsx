import Dashboard from "./containers/Dashboard";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/global";
import { lightTheme, darkTheme } from "./styles/theme";
import { useThemeContext } from "./context/themeContext";

const App = () => {
  const { theme } = useThemeContext();

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Dashboard />
    </ThemeProvider>
  );
};

export default App;
