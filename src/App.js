import React from "react";
import "./App.css";
import { Grid } from "@material-ui/core";
import SideBar from "./components/side-bar";

function App() {
  return (
    <Grid container>
      <SideBar />
    </Grid>
  );
}

export default App;
