import React from "react";
import { MuiThemeProvider, Grid } from "@material-ui/core";
import "./App.css";
import ButtonAppBar from "./components/appBar";
import theme from "./theme";
import SideBar from "./components/side-bar/index";
import SimpleCard from "./components/side-bar/card";
import FileUploader from "./components/file-uploader";
import { StylesProvider } from "@material-ui/styles";
import New from "./components/button";

function App() {
  return (
    <StylesProvider injectFirst={true}>
      <MuiThemeProvider theme={theme}></MuiThemeProvider>
      <div style={{ marginLeft: "40%", marginTop: "15%" }}>
        <FileUploader />
        <New size="100px" variantType="contained" colorTheme="primary" />
      </div>
    </StylesProvider>
  );
}

export default App;
