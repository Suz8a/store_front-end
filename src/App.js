import React from "react";
import "./App.css";
import { Grid } from "@material-ui/core";
import MaterialInfo from "./components/material-info";
import FileUploader from "./components/file-uploader";
import { MuiThemeProvider } from "@material-ui/core";
import { StylesProvider } from "@material-ui/styles";
<<<<<<< HEAD
import theme from "./theme";

function App() {
  return (
    <StylesProvider injectFirst>
      <MuiThemeProvider theme={theme}>
        <Grid container>
          <FileUploader />
        </Grid>
      </MuiThemeProvider>
=======
import New from "./components/button";

function App() {
  return (
    <StylesProvider injectFirst={true}>
      <MuiThemeProvider theme={theme}></MuiThemeProvider>
      <div style={{ marginLeft: "40%", marginTop: "15%" }}>
        <FileUploader />
        <New size="100px" variantType="contained" colorTheme="primary" />
      </div>
>>>>>>> 73e44639175437c6a63fd996c6689410258117c5
    </StylesProvider>
  );
}

export default App;
