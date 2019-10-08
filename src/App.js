import React from "react";
import { MuiThemeProvider, Grid } from "@material-ui/core";
import "./App.css";
import ButtonAppBar from "./components/appBar";
import theme from "./theme";
import SideBar from "./components/side-bar/index";
import SimpleCard from "./components/side-bar/card";
import FileUploader from "./components/file-uploader";

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <FileUploader />
    </MuiThemeProvider>
  );
}

export default App;
