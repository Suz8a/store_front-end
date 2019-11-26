import DynamicTable from "./../../components/dynamic-table";
import React from "react";
import PedidosTopBar from "./../../components/pedidos-top-bar";
import Build from "@material-ui/icons/Build";

const data = [
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
    estado: "En Taller"
  }
];

export default function Pedidos() {
  const tableData = data.map(({ folio, cliente, servicio, estado }) => {
    let status = "";
    if (estado === "En Taller") {
      status = (
        <div style={{ color: "blue" }}>
          <Build></Build> En taller{" "}
        </div>
      );
    }
    if (estado === "Procesando") {
      status = (
        <div style={{ color: "gray" }}>
          <Build></Build> Procesando{" "}
        </div>
      );
    }

    return {
      Folio: folio,
      Cliente: cliente,
      Servicio: servicio,
      Estado: status
    };
  });

  return (
    <div
      style={{
        width: "50%",
        marginLeft: "25%",
        boxShadow: "0px 1px 8px #00000033"
      }}
    >
      <PedidosTopBar />
      <DynamicTable data={tableData} />
    </div>
  );
}
