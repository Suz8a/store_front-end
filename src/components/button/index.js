import React from "react";
import { Button } from "@material-ui/core";

function ThemedButton(props) {
  return (
    <div>
      <ThemedButton
        style={{ width: props.buttonSize }}
        variant={props.variantType}
        color={props.colorTheme}
      >
        {props.nombre}
      </ThemedButton>
    </div>
  );
}

export default ThemedButton;
