import React from "react";
import { Form } from "./styled";
import ClientInfo from "../client-info";
import { Typography } from "@material-ui/core";
import ProductInfo from "../product-info";
import SizeInfo from "../size-info";
import Description from "../description";
import MaterialInfo from "../material-info";
import MaterialUsado from "../material-used-info";
import BudgetInfo from "../budget-info";
import ThemedButton from "../button";

function DynamicForm(props) {
  return (
    <Form>
      <div style={{ padding: "50px 100px" }}>
        <Typography
          variant="h6"
          style={{ fontSize: "25px", paddingBottom: "40px" }}
        >
          {props.title}
        </Typography>
        <ClientInfo />
        <div style={{ marginTop: "40px" }}>
          <ProductInfo />
        </div>
        <div style={{ marginTop: "30px" }}>
          <SizeInfo />
        </div>
        <div style={{ marginTop: "40px" }}>
          <Description />
        </div>
        <div style={{ marginTop: "40px" }}>
          <MaterialInfo />
        </div>
        <div style={{ marginTop: "40px" }}>
          <MaterialUsado />
        </div>
        <div style={{ marginTop: "40px" }}>
          <BudgetInfo />
        </div>

        <div
          style={{ float: "right", marginTop: "45px", marginBottom: "50px" }}
        >
          <ThemedButton
            marginR="30px"
            buttonSize="120px"
            variantType="outlined"
            text="Cancelar"
            colorTheme="secondary"
          />
          <ThemedButton
            buttonSize="168px"
            variantType="contained"
            text="Guardar"
            colorTheme="primary"
          />
        </div>
      </div>
    </Form>
  );
}

export default DynamicForm;
