import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#1976d2" },
    background: { default: "#f4f6f8" },
  },
  typography: { fontFamily: "Poppins, Roboto, Arial" },
  shape: { borderRadius: 12 },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#90caf9" },
    background: { default: "#121212" },
  },
  typography: { fontFamily: "Poppins, Roboto, Arial" },
  shape: { borderRadius: 12 },
});
