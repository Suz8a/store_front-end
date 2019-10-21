import React from "react";
import "./App.css";
import { Grid } from "@material-ui/core";
import PedidosTopBar from "./components/pedidos-top-bar";

function App() {
  return (
    <Grid container>
      <PedidosTopBar />
    </Grid>
  );
}

export default App;
