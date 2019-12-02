import React, { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import SideBarWorkshop from "../../components/side-bar-workshop";
import TopLayout from "../../components/top-layout";
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
  }
];

function Taller() {
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

  return (
    <div>
      <div>
        <TopLayout />
      </div>
      <div
        style={{
          width: "100%",
          height: "fit-content",
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
          <SideBarWorkshop />
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
                path="/workshop/pedidos"
                component={() => (
                  <Pedidos
                    data={data.filter(pedido => pedido.estado === "En taller")}
                  />
                )}
              />
              <Route
                path="/workshop/pedidos-terminados"
                component={() => (
                  <Pedidos
                    data={data.filter(pedido => pedido.estado === "Terminado")}
                  />
                )}
              />
            </Switch>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
}

export default Taller;
