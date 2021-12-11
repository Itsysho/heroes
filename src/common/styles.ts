import { createTheme } from "@mui/material";

const primaryColor = "#00bea4";
const secondaryColor = "#fa8b00";
const textColor = "#1d1d1d";
const textWhiteColor = "#eeeeee";
const errorColor = "#f05050";

const fontWeightMedium = 600;
const fontWeightBold = 900;

export const theme = createTheme({
  palette: {
    common: {
      black: textColor,
      white: textWhiteColor,
    },
    primary: {
      main: primaryColor,
    },
    secondary: {
      main: secondaryColor,
    },
    error: {
      main: errorColor,
    },
    text: {
      primary: textColor,
      secondary: primaryColor,
      disabled: textColor,
    },
  },
  typography: {
    fontWeightMedium,
    fontWeightBold,
  },
});
