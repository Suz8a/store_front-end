import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import SideBarStore from "../../components/side-bar-store";
import TopLayout from "../../components/top-layout";
import CambioForm from "../../containers/cambio-form";
import LimpiezaForm from "../../containers/limpieza-form";
import GrabadoForm from "../../containers/grabado-form";
import PulidoForm from "../../containers/pulido-form";
import ReparacionForm from "../../containers/reparacion-form";
import Pedidos from "../../containers/pedidos";
import {
  createClient,
  createPedido,
  getAllClients,
  getAllPedidos,
  getClientById,
  getPedidoByFolio,
  getPedidoById,
  updatePedido,
  uploadImage
} from "../../api";

const data22 = [
  {
    folio: "12345",
    cliente: "Suzclem Adriana Ochoa Casillas",
    servicio: "Reparación",
    estado: "Procesando"
  },
  {
    folio: "22222",
    cliente: "Jesus Abraham Zavala Quintero",
    servicio: "Pulido",
    estado: "En taller"
  },
  {
    folio: "22222",
    cliente: "Jesus Abraham Zavala Quintero",
    servicio: "Pulido",
    estado: "En tienda"
  },
  {
    folio: "22222",
    cliente: "Jesus Abraham Zavala Quintero",
    servicio: "Pulido",
    estado: "Terminado"
  }
];

function Recepcionista() {
  var { data: pedidos } = getAllPedidos();
  var { data: clientes } = getAllClients();

  var data;

  return (
    <div>
      <div>
        <TopLayout />
      </div>
      <div
        style={{
          width: "100%",
          height: "1507px",
          backgroundColor: "#F4F6F8"
        }}
      >
        <div
          style={{
            display: "inline-block",
            width: "fit-content",
            height: "100%",
            float: "left",
            position: "relative"
          }}
        >
          <SideBarStore />
        </div>
        <div
          style={{
            display: "inline-block",
            width: "calc(100vw - 304px)",
            height: "fit-content"
          }}
        >
          <BrowserRouter>
            <Switch>
              <Route
                path="/recepcionist/pedidos"
                component={() => <Pedidos data={data} />}
              />
              <Route path="/recepcionist/cambio-form" component={CambioForm} />
              <Route
                path="/recepcionist/limpieza-form"
                component={LimpiezaForm}
              />
              <Route
                path="/recepcionist/grabado-form"
                component={GrabadoForm}
              />
              <Route path="/recepcionist/pulido-form" component={PulidoForm} />
              <Route
                path="/recepcionist/reparacion-form"
                component={ReparacionForm}
              />
            </Switch>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
}

export default Recepcionista;
