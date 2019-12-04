import React, { useState } from "react";
import DynamicForm from "../../components/dynamic-form";
import { useNotificationProvider } from "../../components/notification.provider";
import { createClient, createPedido, uploadImage } from "../../api";
import { CircularProgress, Paper } from "@material-ui/core";

const productos = {
  1: "Anillo",
  2: "Collar",
  3: "Pulsera",
  4: "Reloj"
};

function ReparacionForm(props) {
  const { notify } = useNotificationProvider();
  //cliente information
  const [nomCliente, setnomCliente] = useState("");
  const [aPaterno, setaPaterno] = useState("");
  const [aMaterno, setaMaterno] = useState("");
  const [telefono, settelefono] = useState("");
  const [correo, setcorreo] = useState("");
  //Product information
  const [values, setValues] = React.useState({ Seleccionar: "" });
  const [peso, setpeso] = useState("");
  //Size information
  const [medidaInicial, setmedidaInicial] = useState("");
  const [medidaFinal, setmedidaFinal] = useState("");
  //Description information
  const [descripcion, setdescripcion] = useState("");
  //Material attached
  const [oro, setoro] = useState(0);
  const [bronce, setbronce] = useState(0);
  const [plata, setplata] = useState(0);
  const [acero, setacero] = useState(0);
  //Material used
  const [oroUsado, setoroUsado] = useState(0);
  const [bronceUsado, setbronceUsado] = useState(0);
  const [plataUsado, setplataUsado] = useState(0);
  const [aceroUsado, setaceroUsado] = useState(0);
  //Material used price
  const [oroUsadoPrecio, setoroUsadoPrecio] = useState(0);
  const [bronceUsadoPrecio, setbronceUsadoPrecio] = useState(0);
  const [plataUsadoPrecio, setplataUsadoPrecio] = useState(0);
  const [aceroUsadoPrecio, setaceroUsadoPrecio] = useState(0);
  //Budget information
  const [hechura, sethechura] = useState(0);
  //Loading state
  const [isLoading, setisLoading] = useState(false);

  //Client information
  function handleNombre(e) {
    setnomCliente(e.target.value);
  }

  function handleAPaterno(e) {
    setaPaterno(e.target.value);
  }

  function handleAMaterno(e) {
    setaMaterno(e.target.value);
  }

  function handleTelefono(e) {
    settelefono(e.target.value);
  }

  function handleCorreo(e) {
    setcorreo(e.target.value);
  }

  //Product information

  const handleChange = event => {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value
    }));
  };

  function handlePeso(e) {
    setpeso(e.target.value);
  }

  const [productFiles, setProductFiles] = useState([]);
  function deleteProductFile(index) {
    return () => {
      const newLista = [...productFiles];
      newLista.splice(index, 1);
      setProductFiles(newLista);
    };
  }

  //Size information

  function handleMedidaInicial(e) {
    setmedidaInicial(e.target.value);
  }

  function handleMedidaFinal(e) {
    setmedidaFinal(e.target.value);
  }

  //Description information

  function handleDescripcion(e) {
    setdescripcion(e.target.value);
  }

  //Material Attached
  function handleOro(e) {
    setoro(e.target.value);
  }

  function handleBronce(e) {
    setbronce(e.target.value);
  }

  function handlePlata(e) {
    setplata(e.target.value);
  }

  function handleAcero(e) {
    setacero(e.target.value);
  }

  //Material used

  function handleOroUsado(e) {
    setoroUsado(e.target.value);
  }

  function handleBronceUsado(e) {
    setbronceUsado(e.target.value);
  }

  function handlePlataUsado(e) {
    setplataUsado(e.target.value);
  }

  function handleAceroUsado(e) {
    setaceroUsado(e.target.value);
  }

  //Material used price

  function handleOroUsadoPrecio(e) {
    setoroUsadoPrecio(e.target.value);
  }

  function handleBronceUsadoPrecio(e) {
    setbronceUsadoPrecio(e.target.value);
  }

  function handlePlataUsadoPrecio(e) {
    setplataUsadoPrecio(e.target.value);
  }

  function handleAceroUsadoPrecio(e) {
    setaceroUsadoPrecio(e.target.value);
  }

  //Budget information

  function handleHechura(e) {
    sethechura(e.target.value);
  }

  //Total Calculation

  function calcularTotal(e) {
    return (
      parseInt(aceroUsadoPrecio) +
      parseInt(oroUsadoPrecio) +
      parseInt(bronceUsadoPrecio) +
      parseInt(plataUsadoPrecio) +
      parseInt(hechura)
    );
  }

  const [servicioSeleccionado, setServicioSeleccionado] = useState(-1);

  function seleccionarServicio(value) {
    setServicioSeleccionado(value.target.value);
  }
  console.log(servicioSeleccionado, "SERVICIO SELECCIONADO");

  //Buttons functionality

  function onClickCancelar() {
    props.history.push("/recepcionist/pedidos");
  }

  async function onClickAceptar() {
    try {
      setisLoading(true);
      var { data: client } = await createClient(
        nomCliente,
        aMaterno,
        aPaterno,
        correo,
        telefono
      );
      var {
        data: { imageUrl: link_imagen }
      } = await uploadImage(productFiles);
      var pedido = await createPedido(
        "reparacion",
        descripcion,
        "En proceso",
        link_imagen,
        client.id,
        "something",
        "Any",
        {
          nombre_joya: productos[servicioSeleccionado],
          peso_joya: parseInt(peso),
          medida_inicial: parseInt(medidaInicial),
          medida_final: parseInt(medidaFinal)
        },
        [
          { nombre_material: "oro", gramos: parseInt(oro) },
          { nombre_material: "bronce", gramos: parseInt(bronce) },
          { nombre_material: "plata", gramos: parseInt(plata) },
          { nombre_material: "acero", gramos: parseInt(acero) }
        ],
        [
          {
            nombre_material: "oro",
            gramos: parseInt(oroUsado),
            precio: parseInt(oroUsadoPrecio)
          },
          {
            nombre_material: "bronce",
            gramos: parseInt(bronceUsado),
            precio: parseInt(bronceUsadoPrecio)
          },
          {
            nombre_material: "plata",
            gramos: parseInt(plataUsado),
            precio: parseInt(plataUsadoPrecio)
          },
          {
            nombre_material: "acero",
            gramos: parseInt(aceroUsado),
            precio: parseInt(aceroUsadoPrecio)
          }
        ],
        {
          hechura: hechura,
          total: calcularTotal()
        }
      );
      props.history.push("/recepcionist/pedidos");
      notify("El pedido se ha guardado exitosamente");
    } catch (e) {
      props.history.push("/recepcionist/pedidos");
      notify("Error en guardar el pedido");
    }
    setisLoading(false);
  }

  if (isLoading)
    return (
      <Paper
        style={{
          margin: "auto",
          width: "100%",
          height: "100%",
          textAlign: "center",
          paddingTop: "150px",
          paddingBottom: "1314px"
        }}
      >
        <CircularProgress />
      </Paper>
    );

  return (
    <DynamicForm
      title="Reparación"
      //Campos requeridos en el formulario
      cliente="true"
      producto="true"
      descripcion="true"
      materialAdjunto="true"
      materialUtilizar="true"
      presupuesto="true"
      //Client information
      handleNombre={handleNombre}
      handleAPaterno={handleAPaterno}
      handleAMaterno={handleAMaterno}
      handleTelefono={handleTelefono}
      handleCorreo={handleCorreo}
      //Product information
      onSeleccionarServicio={seleccionarServicio}
      servicioSeleccionado={servicioSeleccionado}
      handleChange={handleChange}
      handlePeso={handlePeso}
      productFiles={productFiles}
      onProductFileDelete={deleteProductFile}
      onSetProductFile={setProductFiles}
      //Size information
      handleMedidaInicial={handleMedidaInicial}
      handleMedidaFinal={handleMedidaFinal}
      //Description information
      handleDescripcion={handleDescripcion}
      //Material Attached
      handleOro={handleOro}
      handleBronce={handleBronce}
      handlePlata={handlePlata}
      handleAcero={handleAcero}
      //Material used
      handleOroUsado={handleOroUsado}
      handleBronceUsado={handleBronceUsado}
      handlePlataUsado={handlePlataUsado}
      handleAceroUsado={handleAceroUsado}
      //Material used price
      handleOroUsadoPrecio={handleOroUsadoPrecio}
      handleBronceUsadoPrecio={handleBronceUsadoPrecio}
      handlePlataUsadoPrecio={handlePlataUsadoPrecio}
      handleAceroUsadoPrecio={handleAceroUsadoPrecio}
      //Budget information
      handleHechura={handleHechura}
      total={calcularTotal()}
      //Buttons functionality
      onClickCancelar={onClickCancelar}
      onClickAceptar={onClickAceptar}
    />
  );
}

export default ReparacionForm;
