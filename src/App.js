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
<<<<<<< HEAD
import BudgetInfo from "./components/budget-info";
=======
import MaterialUsado from "./components/material-used-info";
>>>>>>> 2286888d3f67a0296be21cd46d7ed3ba9a268d92

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Grid container>
        <div></div>
        <div style={{ paddingLeft: "30px" }}></div>
      </Grid>
<<<<<<< HEAD
      <BudgetInfo />
=======
      <MaterialUsado/>
>>>>>>> 2286888d3f67a0296be21cd46d7ed3ba9a268d92
    </MuiThemeProvider>
  );
}

export default App;
