import React, { useState } from "react";
import DynamicForm from "../../components/dynamic-form";

function CambioForm() {
  const [nomCliente, setnomCliente] = useState("");
  const [aPaterno, setaPaterno] = useState("");
  const [aMaterno, setaMaterno] = useState("");
  const [telefono, settelefono] = useState("");
  const [correo, setcorreo] = useState("");

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

  //Size information

  function handleMedidaInicial(e) {}

  function handleMedidaFinal(e) {}

  //Description information

  function handleDescripcion(e) {}

  //Material Attached
  function handleOro(e) {}

  function handleBronce(e) {}

  function handlePlata(e) {}

  function handleAcero(e) {}

  //Material used

  function handleOroUsado(e) {}

  function handleBronceUsado(e) {}

  function handlePlataUsado(e) {}

  function handleAceroUsado(e) {}

  //Material used price

  function handleOroUsadoPrecio(e) {}

  function handleBronceUsadoPrecio(e) {}

  function handlePlataUsadoPrecio(e) {}

  function handleAceroUsadoPrecio(e) {}

  //Budget information

  function handleHechura(e) {}

  //Total Calculation

  function calcularPrecio(e) {}

  //Buttons functionality

  function onClickCancelar() {}

  function onClickAceptar() {}

  var data = {
    nombre: nomCliente,
    apellidoPaterno: aPaterno,
    apellidoMaterno: aMaterno,
    telefonoCliente: telefono,
    correoCliente: correo
  };

  console.log(data);

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
      //Size information
      handleMedidaInicial={handleMedidaInicial}
      hadleMedidaFinal={handleMedidaFinal}
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
      //Buttons functionality
      onClickCancelar={onClickCancelar}
      onClickAceptar={onClickAceptar}
    />
  );
}

export default CambioForm;
