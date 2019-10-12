import React from "react";
import { MuiThemeProvider, Grid } from "@material-ui/core";
import "./App.css";
import Nuevo from "./components/button";
import theme from "./theme";
import BudgetInfo from './components/budget-info';

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Grid container>
        <div>
        </div>
        <div style={{ paddingLeft: "30px" }}>
        </div>
      </Grid>
      <BudgetInfo/>
    </MuiThemeProvider>
  );
}

export default App;
