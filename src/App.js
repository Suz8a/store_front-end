import React from "react";
import "./App.css";
import { Grid } from "@material-ui/core";
import MaterialInfo from "./components/material-info";
import FileUploader from "./components/file-uploader";
import { MuiThemeProvider } from "@material-ui/core";
import { StylesProvider } from "@material-ui/styles";
import theme from "./theme";
import ThemedButton from "./components/button";
import Login from "./components/login";

//este es un cambio en comentario super genial para hacer un commit y push

function App() {
  return (
    <StylesProvider injectFirst={true}>
      <MuiThemeProvider theme={theme}>
        <div style={{ marginLeft: "40%", marginTop: "15%" }}>
          <FileUploader />
          <ThemedButton
            size="100px"
            variantType="contained"
            colorTheme="primary"
          />
          <Login />
        </div>
      </MuiThemeProvider>
    </StylesProvider>
  );
}

export default App;
