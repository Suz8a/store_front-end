import React from "react";
import "./App.css";
import { Grid } from "@material-ui/core";
import BudgetInfo from "./components/budget-info";

function App() {
  return (
    <Grid container>
      <BudgetInfo />
    </Grid>
  );
}

export default App;
