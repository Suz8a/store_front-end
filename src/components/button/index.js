import React from "react";
import { Button } from "@material-ui/core";

export default function New(props) {
  return (
    <div>
      <Button
        style={{ width: props.buttonSize }}
        variant={props.variantType}
        color={props.colorTheme}
      >
        {props.nombre}
      </Button>
    </div>
  );
}

