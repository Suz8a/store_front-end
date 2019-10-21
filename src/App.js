import React from "react";
import "./App.css";
import { Grid } from "@material-ui/core";
import MaterialInfo from "./components/material-info";
import Text from "./components/textFieldPrueba";

function App() {
  return (
    <Grid container>
      <MaterialInfo />
      <Text />
    </Grid>
  );
}

export default App;
