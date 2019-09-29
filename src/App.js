import React from "react";
import { MuiThemeProvider, Grid } from "@material-ui/core";
import "./App.css";
import Nuevo from "./components/button";
import theme from "./theme";
import SideBar from "./components/side-bar";

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Grid container>
        <div>
          <SideBar />
        </div>
      </Grid>
    </MuiThemeProvider>
  );
}

export default App;
