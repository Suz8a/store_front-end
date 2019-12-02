import React from "react";
import SideBarStore from "../../components/side-bar-store";
import TopLayout from "../../components/top-layout";
import DynamicForm from "../../components/dynamic-form";
import DynamicTable from "../../components/dynamic-table";
import CambioForm from "../../containers/cambio-form";
import LimpiezaForm from "../../containers/limpieza-form";
import GrabadoForm from "../../containers/grabado-form";
import {
  Grid
} from "@material-ui/core";
import PulidoForm from "../../containers/pulido-form";
import ReparacionForm from "../../containers/reparacion-form";
import DetalleServicio from "../../containers/detalle-servicio";
import DetallePedido from "../../containers/detalle-pedido";

function Recepcionista() {
  return ( <div >
    <div >
    <TopLayout/>
    </div> 
    <div style = {
      {
        width: "100%",
        height: "fit-content",
        backgroundColor: "#F4F6F8"
      }}>
    <div style = {
      {
        display: "inline-block",
        width: "fit-content",
        height: "100%",
        float: "left",
        position: "relative"
      }
    }>
    <SideBarStore/>
    </div> 
    <div style = { {
    display: "inline-block",
    width: "calc(100vw - 304px)",
    height: "fit-content"
  }}>
  <DetalleServicio/>
  </div> </div >
  </div>
);
}

export default Recepcionista;