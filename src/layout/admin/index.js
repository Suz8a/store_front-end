import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import TopLayout from "../../components/top-layout";
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
import SideBarAdmin from "../../components/side-bar-admin";
import EditTable from "../../components/edit-table";

function Admin() {
  const [pedidos, setpedidos] = useState(undefined);
  const [clientes, setclientes] = useState(undefined);

  useEffect(async () => {
    const result = await getAllPedidos();
    setpedidos(result.data);
  }, []);

  return (
    <div>
      <div>
        <TopLayout />
      </div>
      <div
        style={{
          width: "100%",
          height: "725px",
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
          <SideBarAdmin />
        </div>
        <div
          style={{
            display: "inline-block",
            width: "calc(100vw - 304px)",
            height: "fit-content"
          }}
        >
          <Switch>
            <Route path="/admin/usuarios" component={() => <EditTable />} />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default Admin;
