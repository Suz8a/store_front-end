import React from "react";
import { Button } from "@material-ui/core";

function New(props) {
  return (
    <div class>
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

export default New;
