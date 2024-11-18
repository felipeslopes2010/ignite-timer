import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";

import { Button } from "./assets/components/Button";

export function App() {
  return (
   <ThemeProvider theme={defaultTheme}>
      <Button variant="primary" />
      <Button variant="secondary" />
      <Button variant="sucess" />
      <Button variant="danger"/>
      <Button />
      
    <GlobalStyle />
    </ThemeProvider>
  )
}
