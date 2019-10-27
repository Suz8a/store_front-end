import React from "react";
import "./App.css";
import { Grid } from "@material-ui/core";
import Login from "./components/login";
import { MuiThemeProvider } from "@material-ui/core";
import { StylesProvider } from "@material-ui/styles";
import theme from "./theme";

//este es un cambio en comentario super genial para hacer un commit y push

function App() {
  return (
    <StylesProvider injectFirst={true}>
      <MuiThemeProvider theme={theme}>
        <Login />
      </MuiThemeProvider>
    </StylesProvider>
  );
}

export default App;
