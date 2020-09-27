import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../styles/global";
import { darkTheme, lightTheme } from "../styles/theme";
import { MainSection } from "../sections/MainSection";
import { AboutSection } from "../sections/AboutSection";
import { PortfolioSection } from "../sections/PortfolioSection";
import { ContactSection } from "../sections/ContactSection";
import { useDarkMode } from "../hooks/useDarkMode";
import { Background } from "../styles/common";

function App() {
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;
  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <>
        <Background theme={theme} />
        <MainSection theme={theme} toggleTheme={toggleTheme} />
        <AboutSection />
        <PortfolioSection />
        <ContactSection theme={theme} />
      </>
    </ThemeProvider>
  );
}

export default App;
