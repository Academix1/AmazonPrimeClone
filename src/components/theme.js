import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#00050d",
    },
    secondary: {
      main: "#00a8e1", // Prime Video's blue
    },
    background: {
      default: "#00050d",
      paper: "#1a242f",
    },
  },
  typography: {
    fontFamily: "Amazon Ember, Arial, sans-serif",
    h3: {
      fontWeight: 700,
      fontSize: "2.5rem",
    },
    h4: {
      fontWeight: 600,
      fontSize: "2rem",
    },
    subtitle1: {
      fontSize: "1.1rem",
      lineHeight: 1.5,
    },
    button: {
      textTransform: "none",
      fontWeight: 500,
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#00050d",
          boxShadow: "none",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        containedSecondary: {
          backgroundColor: "#00a8e1",
          "&:hover": {
            backgroundColor: "#0095c8",
          },
        },
      },
    },
  },
});

export default theme;
