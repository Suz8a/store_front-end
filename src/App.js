import React from "react";
import { MuiThemeProvider, Grid } from "@material-ui/core";
import "./App.css";
<<<<<<< HEAD
import Nuevo from "./components/button";
import SizeInfo from "./components/size-info";
import ExpansionPanel from "./components/expansion-panel";
import DetailsTitle from "./components/details-title";
import ClientDetails from "./components/client-details";
import ServiceDetails from "./components/service-details";

import theme from "./theme";
<<<<<<< HEAD
import TopLayout from './components/top-layout';
=======
import ProductInfo from "./components/product-info";
>>>>>>> c1d8bfa9d4bf3442c5a1bb431369c1c3912a5ec4

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
<<<<<<< HEAD
      <TopLayout/>
>>>>>>> 24ca8a59a96702ccce69835018244c2af1a3803e
    </MuiThemeProvider>
=======
      <ProductInfo/>
      </MuiThemeProvider>

>>>>>>> c1d8bfa9d4bf3442c5a1bb431369c1c3912a5ec4
=======
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
>>>>>>> 2267712de4b124721e377f3c2b4bcd779f047c18
  );
}

export default App;
