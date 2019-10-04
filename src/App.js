import React from "react";
import { MuiThemeProvider, Grid } from "@material-ui/core";
import "./App.css";
import ButtonAppBar from "./components/appBar";
import theme from "./theme";
import SideBar from "./components/side-bar";
import ClientInfo from "./components/client-info";

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Grid container>
        <SideBar />
        <ButtonAppBar />
      </Grid>
    </MuiThemeProvider>
  );
}

export default App;
