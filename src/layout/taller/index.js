import React, { useEffect, useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import SideBarWorkshop from "../../components/side-bar-workshop";
import TopLayout from "../../components/top-layout";
import Pedidos from "../../containers/pedidos";
import { withRouter } from "react-router-dom";
import DetalleServicio from "../../containers/detalle-servicio";
import {
  getAllClients,
  getAllPedidos,
  updatePedido,
  uploadImage,
  createTicket
} from "../../api";
import { CircularProgress, LinearProgress } from "@material-ui/core";
import GenerateReport from "../../components/generate-report";

const data22 = [
  {
    folio: "12345",
    cliente: "Suzclem Adriana Ochoa Casillas",
    servicio: "Reparación",
    estado: "Procesando"
  }
];

function Taller(props) {
  const [pedidos, setpedidos] = useState(undefined);
  const [clientes, setclientes] = useState(undefined);
  const [pedidoInfo, setpedidoInfo] = useState("");
  const [clientInfo, setclientInfo] = useState("");
  const [pedidoUpdated, setpedidoUpdated] = useState("");
  const [descripcion, setdescripcion] = useState("");

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

  async function onRowClick(pedido) {
    console.log(pedido.Folio);
    console.log(pedido.Servicio);
    const pedidoInfo = pedidos.find(p => p.folio == pedido.Folio);
    const clientInfo = clientes.find(
      cliente => cliente.id == pedidoInfo.cliente_id
    );
    setpedidoUpdated(pedidoInfo);

    setpedidoInfo({
      folio: pedidoInfo.folio,
      product: pedidoInfo.joya.nombre_joya,
      weight: pedidoInfo.joya.peso_joya,
      descripcion: pedidoInfo.descripcion,
      material_utilizar: pedidoInfo.material_utilizar,
      material_adjunto: pedidoInfo.material_adjunto,
      estado_taller: pedidoInfo.estado_taller,
      servicio: pedido.Servicio,
      inicial: pedidoInfo.joya.medida_inicial,
      final: pedidoInfo.joya.medida_final,
      estado_tienda: pedidoInfo.estado_tienda,
      estado_taller: pedidoInfo.estado_taller
    });
    setclientInfo({
      name: `${clientInfo.nombre} ${clientInfo.apellido_paterno} ${clientInfo.apellido_materno}`,
      tel: clientInfo.telefono,
      email: clientInfo.correo
    });

    props.history.push("/workshop/detalle-servicio");
  }

  function onClickVolver() {
    props.history.push("/workshop/pedidos");
  }

  async function onClickEstado(fileList) {
    console.log(fileList);
    if (pedidoUpdated.estado_taller === "Recibir joya") {
      pedidoUpdated.estado_taller = "Enviar joya";
      await updatePedido(pedidoUpdated.id, pedidoUpdated);
      props.history.push("/workshop/pedidos");
    }

    if (pedidoInfo.estado_taller === "Enviar joya" && fileList.length === 0)
      alert("Favor de subir imagen de evidencia");

    if (pedidoInfo.estado_taller === "Enviar joya" && fileList.length !== 0) {
      var {
        data: { imageUrl: link_imagen_taller }
      } = await uploadImage(fileList);
      pedidoUpdated.link_imagen_taller = link_imagen_taller;

      pedidoUpdated.estado_taller = "Terminado";
      pedidoUpdated.estado = "En tienda";

      await updatePedido(pedidoUpdated.id, pedidoUpdated);
      props.history.push("/workshop/pedidos");
    }
  }

  function handleDescripcion(e) {
    setdescripcion(e.target.value);
    console.log(descripcion);
  }

  async function onClickEnviar() {
    if (descripcion === "") alert("Favor de agregar una descripción");

    if (descripcion !== "") {
      await createTicket(clientInfo.email, {
        pedido_id: pedidoUpdated.id,
        descripcion: descripcion,
        estado: "abierto"
      });
    }
  }

  function onClickCancelar() {
    props.history.push("/workshop/pedidos");
  }

  return (
    <div>
      <div>
        <TopLayout />
      </div>
      <div
        style={{
          width: "100%",
          height: "1260px",
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
          <Switch>
            <Route
              path="/workshop/detalle-servicio"
              component={() => (
                <DetalleServicio
                  onClickVolver={onClickVolver}
                  onClickEstado={onClickEstado}
                  folio={pedidoInfo.folio}
                  name={clientInfo.name}
                  product={pedidoInfo.product}
                  weight={pedidoInfo.weight}
                  descripcion={pedidoInfo.descripcion}
                  cantidad={pedidoInfo.cantidad}
                  hechura={pedidoInfo.hechura}
                  material_utilizar={pedidoInfo.material_utilizar}
                  material_adjunto={pedidoInfo.material_adjunto}
                  servicio={pedidoInfo.servicio}
                  inicial={pedidoInfo.inicial}
                  final={pedidoInfo.final}
                  estado_tienda={pedidoInfo.estado_tienda}
                  estado_taller={pedidoInfo.estado_taller}
                />
              )}
            />
            <Route
              path="/workshop/reporte"
              component={() => (
                <GenerateReport
                  handleDescripcion={handleDescripcion}
                  onClickEnviar={onClickEnviar}
                  onClickCancelar={onClickCancelar}
                />
              )}
            />
            <Route
              path="/workshop/pedidos"
              component={() => (
                <Pedidos
                  onRowClick={onRowClick}
                  data={data.filter(pedido => pedido.estado === "En taller")}
                />
              )}
            />
            <Route
              path="/workshop/pedidos-terminados"
              component={() => (
                <Pedidos
                  onRowClick={onRowClick}
                  data={data.filter(
                    pedido =>
                      pedido.estado === "En tienda" ||
                      pedido.estado === "Terminado"
                  )}
                />
              )}
            />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default withRouter(Taller);
