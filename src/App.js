import React from "react";
import { MuiThemeProvider, Grid } from "@material-ui/core";
import "./App.css";
import ButtonAppBar from "./components/appBar";
import theme from "./theme";
import SideBar from "./components/side-bar/index";
import SimpleCard from "./components/side-bar/card";
import FileUploader from "./components/file-uploader";
import { StylesProvider } from "@material-ui/styles";

function App() {
  return (
    <StylesProvider injectFirst>
      <MuiThemeProvider theme={theme}>
        <div style={{ marginLeft: "40%", marginTop: "15%" }}>
          <FileUploader />
        </div>
      </MuiThemeProvider>
    </StylesProvider>
  );
}

export default App;
