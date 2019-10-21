import React from "react";
import { MuiThemeProvider, Grid } from "@material-ui/core";
import "./App.css";
import Nuevo from "./components/button";
import SizeInfo from "./components/size-info";
import ExpansionPanel from "./components/expansion-panel";
import DetailsTitle from "./components/details-title";
import ClientDetails from "./components/client-details";
import ServiceDetails from "./components/service-details";

import theme from "./theme";
import TopLayout from './components/top-layout';

function App() {
  return (
    <MuiThemeProvider theme={theme}>
<<<<<<< HEAD
      <DetailsTitle folio="1309131" />
      <ClientDetails
        client="Suzclem Adriana Ochoa Casillas"
        tel="6673823990"
        email="suadocca@gmail.com"
      />
      <ServiceDetails service="Reparación" product="Pulsera" weight="100" />
      <ExpansionPanel cantidad="5000" />
=======
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
>>>>>>> 24ca8a59a96702ccce69835018244c2af1a3803e
    </MuiThemeProvider>
  );
}

export default App;
