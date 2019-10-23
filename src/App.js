import React from "react";
import "./App.css";
import {Grid } from "@material-ui/core";
import PedidosTopBar from "./components/pedidos-top-bar";
import Login from './components/login'

function App() {
  return (
      <Grid container>
      <Login/>
      </Grid>
  );
}

export default App;
