import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../styles/global";
import { darkTheme, lightTheme } from "../styles/theme";
import { MainSection } from "../sections/MainSection";
import { AboutSection } from "../sections/AboutSection";
import { PortfolioSection } from "../sections/PortfolioSection";
import { ContactSection } from "../sections/ContactSection";
import { useDarkMode } from "../hooks/useDarkMode";

function App() {
  const [theme, toggleTheme, componentMounted] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;
  if (!componentMounted) {
    return <div />;
  }
  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <>
        <MainSection theme={theme} toggleTheme={toggleTheme} />
        <AboutSection />
        <PortfolioSection />
        <ContactSection />
      </>
    </ThemeProvider>
  );
}

export default App;
