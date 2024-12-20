import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";

import { CyclesContentProvider } from "./contexts/CyclesContext";
import { Router } from "../src/Router";

import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";


export function App() {
  return (
   <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CyclesContentProvider>
          <Router />
        </CyclesContentProvider>
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  )
}
