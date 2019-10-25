import React from "react";
import "./App.css";
import { Grid } from "@material-ui/core";
import PedidosTopBar from "./components/pedidos-top-bar";

function App() {
  return (
    <StylesProvider injectFirst={true}>
      <MuiThemeProvider theme={theme}>
        <PedidosTopBar />
      </MuiThemeProvider>
    </StylesProvider>
  );
}

export default App;
