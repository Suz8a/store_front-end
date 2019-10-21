import React from "react";
import { MuiThemeProvider, Grid } from "@material-ui/core";
import "./App.css";
import Nuevo from "./components/button";
import SizeInfo from "./components/size-info";
import ExpansionPanel from "./components/expansion-panel";
import DetailsTitle from "./components/details-title";
import ClientDetails from "./components/client-details";
import ServiceDetails from "./components/service-details";
import TopLayout from "./components/top-layout";
import ProductInfo from "./components/product-info";
import theme from "./theme";
import BudgetInfo from "./components/budget-info";
import MaterialUsado from "./components/material-used-info";

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Grid container>
        <MaterialUsado />
      </Grid>
      <BudgetInfo />
    </MuiThemeProvider>
  );
}

export default App;
