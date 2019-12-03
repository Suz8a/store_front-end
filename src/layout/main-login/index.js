import React, { useState } from "react";
import Login from "../../components/login";
import { FirstBackgroundColor, SecondBackgroundColor } from "./styled";
import { authenticate } from "../../api";

function MainLogin() {
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

export default MainLogin;
