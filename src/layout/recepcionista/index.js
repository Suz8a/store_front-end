import React, { useEffect, useState } from "react";
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
import { CircularProgress, LinearProgress } from "@material-ui/core";

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
  const [pedidos, setpedidos] = useState(undefined);
  const [clientes, setclientes] = useState(undefined);

  useEffect(async () => {
    const result = await getAllPedidos();
    setpedidos(result.data);
  }, []);

  useEffect(async () => {
    const result = await getAllClients();
    setclientes(result.data);
  }, []);

  if (pedidos === undefined || clientes === undefined)
    return (
      <div>
        <LinearProgress color="secondary" />
      </div>
    );

  var data = pedidos.map(pedido => {
    var cliente = clientes.find(client => client.id === pedido.cliente_id);

    return {
      folio: pedido.folio,
      cliente: `${cliente.nombre} ${cliente.apellido_paterno} ${cliente.apellido_materno}`,
      servicio: pedido.servicio,
      estado: pedido.estado
    };
  });

  console.log(pedidos);
  console.log(clientes);
  console.log(data);

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
                component={() => (
                  <Pedidos
                    data={data.filter(pedido => pedido.estado !== "Terminado")}
                  />
                )}
              />
              <Route
                path="/recepcionist/pedidos-terminados"
                component={() => (
                  <Pedidos
                    data={data.filter(pedido => pedido.estado === "Terminado")}
                  />
                )}
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
