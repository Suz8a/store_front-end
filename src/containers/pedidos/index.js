import DynamicTable from "./../../components/dynamic-table";
import React from 'react';
import PedidosTopBar from "./../../components/pedidos-top-bar"

const data = [
    {
      Folio:"12312",
      Cliente: "Adriana Ochoa",
      Servicio:"Reparación",
      Estado: "En tienda"
    }
  ]

export default function Pedidos() {
    return (
        <div style={{width:"50%", marginLeft:"25%", boxShadow:"0px 1px 8px #00000033"}}>
            <PedidosTopBar />
            <DynamicTable data={data} />
        </div>
    )
}
