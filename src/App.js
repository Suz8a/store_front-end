import React from "react";
import "./App.css";
import { Grid } from "@material-ui/core";
import PedidosTopBar from "./components/pedidos-top-bar";
import Text from "./components/textFieldPrueba";
import MuiThemeProvider from "@material-ui/core";
import theme from "./theme";
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';


function App() {
  return (
    < StylesProvider injectFirst={true}>
      <MuiThemeProvider theme={theme}>
        <PedidosTopBar />
        <Text/>
      </MuiThemeProvider>
    </StylesProvider>
  );
}

export default App;
