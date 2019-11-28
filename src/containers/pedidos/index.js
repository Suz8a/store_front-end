import DynamicTable from "./../../components/dynamic-table";
import React from "react";
import PedidosTopBar from "./../../components/pedidos-top-bar";
import Build from "@material-ui/icons/Build";
import watch from "../../assets/watch.svg";
import tienda from "../../assets/tienda.svg";

export default function Pedidos({ data }) {
  const tableData = data.map(({ folio, cliente, servicio, estado }) => {
    let status = "";
    if (estado === "En taller") {
      status = (
        <div>
          <Build style={{ color: "#0887D1", width: "15px", height: "15px" }} />
          <div style={{ display: "inline-block", marginLeft: "5px" }}>
            En taller{" "}
          </div>
        </div>
      );
    }
    if (estado === "Procesando") {
      status = (
        <div>
          <img src={watch} />
          <div style={{ display: "inline-block", marginLeft: "5px" }}>
            Procesando
          </div>
        </div>
      );
    }
    if (estado === "En tienda") {
      status = (
        <div>
          <img src={tienda} style={{ width: "20px", height: "20px" }} />
          <div style={{ display: "inline-block", marginLeft: "5px" }}>
            En tienda
          </div>
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
        width: "772px",
        height: "500px",
        boxShadow: "0px 1px 8px #00000033",
        margin: "100px auto",
        backgroundColor: "white"
      }}
    >
      <PedidosTopBar />
      <div style={{ height: "360px", overflow: "scroll" }}>
        <DynamicTable data={tableData} />
      </div>
    </div>
  );
}
