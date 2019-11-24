import React, { useState } from "react";
import DynamicForm from "../../components/dynamic-form";

const productos = {
  1: "Anillo",
  2: "Collar",
  3: "Pulsera",
  4: "Reloj"
};
function CambioForm() {
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
  const [oro, setoro] = useState("");
  const [bronce, setbronce] = useState("");
  const [plata, setplata] = useState("");
  const [acero, setacero] = useState("");
  //Material used
  const [oroUsado, setoroUsado] = useState("");
  const [bronceUsado, setbronceUsado] = useState("");
  const [plataUsado, setplataUsado] = useState("");
  const [aceroUsado, setaceroUsado] = useState("");
  //Material used price
  const [oroUsadoPrecio, setoroUsadoPrecio] = useState(0);
  const [bronceUsadoPrecio, setbronceUsadoPrecio] = useState(0);
  const [plataUsadoPrecio, setplataUsadoPrecio] = useState(0);
  const [aceroUsadoPrecio, setaceroUsadoPrecio] = useState(0);
  //Budget information
  const [hechura, sethechura] = useState(0);

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

  //Buttons functionality

  function onClickCancelar() {}

  function onClickAceptar() {}

  const [servicioSeleccionado, setServicioSeleccionado] = useState(-1);

  function seleccionarServicio(value) {
    setServicioSeleccionado(value.target.value);
  }
  console.log(servicioSeleccionado, "SERVICIO SELECCIONADO");

  var dataClient = {
    nombre: nomCliente,
    apellidoPaterno: aPaterno,
    apellidoMaterno: aMaterno,
    telefonoCliente: telefono,
    correoCliente: correo
  };

  var dataPedido = {
    servicio: servicioSeleccionado,
    peso: peso,
    url: "",
    mInicial: medidaInicial,
    mFinal: medidaFinal,
    descripcion: descripcion,
    oro: oro,
    bronce: bronce,
    plata: plata,
    acero: acero,
    oroUsado: oroUsado,
    oroUsadoPrecio: oroUsadoPrecio,
    bronceUsado: bronceUsado,
    bronceUsadoPrecio: bronceUsadoPrecio,
    aceroUsado: aceroUsado,
    aceroUsadoPrecio: aceroUsadoPrecio,
    total: calcularTotal()
  };
  console.log(calcularTotal());
  console.log(dataClient);
  console.log(dataPedido);
  console.log(values);

  return (
    <DynamicForm
      title="Cambio de Tamaño"
      //Campos requeridos en el formulario
      cliente="true"
      producto="true"
      medidas="true"
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
      handlePlataUsado={handleBronceUsado}
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

export default CambioForm;
