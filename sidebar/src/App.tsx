import Main from "./components/Main";
import styled from "styled-components";
import { useThemeContext } from "./context/themeContext";
import { lightTheme, darkTheme } from "./styles/theme";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/global";

function App() {
  const { theme } = useThemeContext();

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Main />
    </ThemeProvider>
  );
}

export default App;
