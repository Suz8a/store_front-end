import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  overrides: {
    MuiButton: {
      contained: {
        borderRadius: "20px"
      },
      outlined: {
        borderRadius: "20px"
      }
    }
  },
  palette: {
    primary: {
      main: "#212121"
    },
    secondary: {
      main: "#9C9C9C"
    }
  }
});

export default theme;
