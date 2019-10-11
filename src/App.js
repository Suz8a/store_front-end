import React from "react";
import { MuiThemeProvider, Grid } from "@material-ui/core";
import "./App.css";
import Nuevo from "./components/button";
import theme from "./theme";
import TopLayout from './components/top-layout';

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Grid container>
        <div>
          <Nuevo
            variantType="outlined"
            nombre="Cancelar"
            colorTheme="secondary"
            buttonSize="120px"
          ></Nuevo>
        </div>
        <div style={{ paddingLeft: "30px" }}>
          <Nuevo
            variantType="contained"
            nombre="Guardar"
            colorTheme="primary"
            buttonSize="168px"
          ></Nuevo>
        </div>
      </Grid>
      <TopLayout/>
    </MuiThemeProvider>
  );
}

export default App;
