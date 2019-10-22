import React from "react";
import "./App.css";
import { Grid } from "@material-ui/core";
import MaterialInfo from "./components/material-info";
import FileUploader from "./components/file-uploader";
import { MuiThemeProvider } from "@material-ui/core";

function App() {
  return (
    <MuiThemeProvider>
      <Grid container>
        <FileUploader />
      </Grid>
    </MuiThemeProvider>
  );
}

export default App;
