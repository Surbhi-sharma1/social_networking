
import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";

type ThemeProps = {
    children: ReactNode;
  };

  const theme = {
    colors: {
      powderWhite: "#FFFDF9",
      persianGreen: "#06B49A",
      lightBlue: "#0f172a",
      onyx: "#36313D",
      grey:'grey',
      black:'black'
    },
    fonts: ["sans-serif", "Roboto"],
    fontSizes: {
      small: "1em",
      medium: "2em",
      large: "3em"
    }
  };
const Theme = ({ children}:ThemeProps) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;