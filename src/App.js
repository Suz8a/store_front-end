import React from "react";
import "./App.css";
import { MuiThemeProvider, Grid } from "@material-ui/core";
import PedidosTopBar from "./components/pedidos-top-bar";
import Text from "./components/textFieldPrueba";
import theme from "./theme";
import {StylesProvider} from '@material-ui/core/styles';
import ClientInfo from './components/client-info';
import ClientDetails from './components/client-details';
import ExpancionPanel from './components/expansion-panel';
import BudgetInfo from './components/budget-info';
import DetailsTitle from "./components/details-title";
import MaterialInfo from "./components/material-info";
import MaterialUsado from "./components/material-used-info";
import ProductInfo from "./components/product-info";
import ServiceDetails from './components/service-details';
import SizeInfo from "./components/size-info";
import SideBar from "./components/side-bar";
import CleanService from "./components/clean-service";
import Paper from "@material-ui/core/Paper";

import Typography from "@material-ui/core/Typography";

function App() {
  return (
    <StylesProvider injectFirst={true}>
      <MuiThemeProvider theme={theme}>
        <ExpancionPanel cantidad="20000"/>
      </MuiThemeProvider>
    </StylesProvider>
  );
}

export default App;
