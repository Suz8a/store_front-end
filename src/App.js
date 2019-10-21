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

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <DetailsTitle folio="1309131" />
      <ClientDetails
        client="Suzclem Adriana Ochoa Casillas"
        tel="6673823990"
        email="suadocca@gmail.com"
      />
      <ServiceDetails service="Reparación" product="Pulsera" weight="100" />
      <ExpansionPanel cantidad="5000" />
    </MuiThemeProvider>
  );
}

export default App;
