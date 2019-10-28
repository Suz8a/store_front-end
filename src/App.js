import React from "react";
import "./App.css";
import { Grid } from "@material-ui/core";
import ClientDetails from "./components/client-details";
import ClientInfo from "./components/client-info";
import { StylesProvider } from "@material-ui/styles";
import { MuiThemeProvider } from "@material-ui/core";
import theme from "./theme";

function App() {
  return (
    <StylesProvider injectFirst={true}>
      <MuiThemeProvider theme={theme}>
        <ClientDetails tel="6672047175" />
        <ClientInfo />
      </MuiThemeProvider>
    </StylesProvider>
  );
}

export default App;
