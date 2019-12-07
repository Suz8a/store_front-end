import React, { useState } from "react";
import Login from "../../components/login";
import { FirstBackgroundColor, SecondBackgroundColor } from "./styled";
import { authenticate } from "../../api";
import { withRouter } from "react-router-dom";

function MainLogin(props) {
  const [correo, setcorreo] = useState("");
  const [contrasena, setcontrasena] = useState("");

  function handleCorreo(e) {
    setcorreo(e.target.value);
  }
  function handleContrasena(e) {
    setcontrasena(e.target.value);
  }
  async function onClickEntrar() {
    try {
      var usuario = await authenticate(correo, contrasena);
      console.log(usuario.data);
      if (usuario.data.rol === "recepcionista")
        props.history.push("/recepcionist/pedidos");
      if (usuario.data.rol === "jefe_taller")
        props.history.push("/workshop/pedidos");
      if (usuario.data.rol === "admin") props.history.push("/admin/usuarios");
    } catch {
      alert("El usuario o contraseña son incorrectos");
    }
  }
  return (
    <div>
      <FirstBackgroundColor />
      <SecondBackgroundColor />
      <Login
        handleCorreo={handleCorreo}
        handleContrasena={handleContrasena}
        onClickEntrar={onClickEntrar}
      />
    </div>
  );
}

export default withRouter(MainLogin);
