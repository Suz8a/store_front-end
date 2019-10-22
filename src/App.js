import React from "react";
import "./App.css";
import { Grid } from "@material-ui/core";
import MaterialInfo from "./components/material-info";
import FileUploader from "./components/file-uploader";

function App() {
  return (
    <Grid container>
      <div style={{ margin: "300px auto 100px auto" }}>
        <FileUploader />
      </div>
    </Grid>
  );
}

export default App;
