import React from "react";
import "./App.css";
import { Grid } from "@material-ui/core";
import MaterialInfo from "./components/material-info";
import FileUploader from "./components/file-uploader";
import { MuiThemeProvider } from "@material-ui/core";
import { StylesProvider } from "@material-ui/styles";
import theme from "./theme";
import ThemedButton from "./components/button";
import DynamicTable from "./components/dynamic-table";

const data = [
  {
    Folio: "12345",
    Cliente: "Suzclem Adriana Ochoa Casillas",
    Servicio: "Reparación",
    Estado: "Procesando"
  },
  {
    Folio: "22222",
    Cliente: "Jesus Abraham Zavala Quintero",
    Servicio: "Pulido",
    Estado: "En Taller"
  }
];

function App() {
  return (
    <StylesProvider injectFirst={true}>
      <MuiThemeProvider theme={theme}>
        <DynamicTable data={data} />
      </MuiThemeProvider>
    </StylesProvider>
  );
}

export default App;
