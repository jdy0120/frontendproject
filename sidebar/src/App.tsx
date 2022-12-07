import Main from "./components/Main";
import styled from "styled-components";
import { useThemeContext } from "./context/themeContext";
import { lightTheme, darkTheme } from "./styles/theme";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/global";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Portfolio from "./components/Portfolio/Portfolio";
import Info from "./components/Info/Info";
import ETC from "./components/ETC/Etc";

function App() {
  const { theme } = useThemeContext();

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/info" element={<Info />} />
          <Route path="/etc" element={<ETC />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
