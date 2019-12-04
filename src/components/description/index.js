import React from "react";
import { TextBox } from "./styled";

export default function Description(props) {
  return (
    <div>
      <TextBox
        onInput={props.handleDescripcion}
        placeholder="Ingresar una descripción"
        maxLength="400"
        type="text"
        cols="40"
        rows="5"
        value={props.descripcion}
        disabled={props.disabled}
      />
    </div>
  );
}
