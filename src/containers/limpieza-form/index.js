import React from "react";
import DynamicForm from "../../components/dynamic-form";

function LimpiezaForm() {
  return (
    <DynamicForm
      title="Limpieza"
      cliente="true"
      producto="true"
      descripcion="true"
      presupuesto="true"
    />
  );
}

export default LimpiezaForm;
