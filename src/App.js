import React from "react";
import "./App.css";
import { MuiThemeProvider } from "@material-ui/core";
import { StylesProvider } from "@material-ui/styles";
import theme from "./theme";
import Build from "@material-ui/icons/Build";
import DynamicForm from "./components/dynamic-form";
import GenerateReport from "./components/generate-report";
import Pedidos from "./containers/pedidos/index";

function App() {
  return(
    <StylesProvider injectFirst={true}>
      <MuiThemeProvider theme={theme}>
        <Pedidos />
      </MuiThemeProvider>
    </StylesProvider>
  );
}

export default App;
