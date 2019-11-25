import React from "react";
import { Button } from "@material-ui/core";

function ThemedButton(props) {
  return (
    <Button
      href="#top"
      onClick={props.onClick}
      style={{ width: props.buttonSize, marginRight: props.marginR }}
      variant={props.variantType}
      color={props.colorTheme}
    >
      {props.text}
    </Button>
  );
}

export default ThemedButton;
