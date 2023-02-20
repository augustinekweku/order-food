import { createTheme, ThemeProvider } from "@mui/material";
import type { AppProps } from "next/app";
import "./global.css";

const theme = createTheme({
  typography: {
    fontFamily: ["Assistant", "sans-serif"].join(","),
  },
  palette: {
    primary: {
      main: "#BE5F1D",
      // darker: "#22C55E",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 768,
      lg: 1200,
      xl: 1536,
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
