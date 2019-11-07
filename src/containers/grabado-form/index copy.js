import React from "react";
import DynamicForm from "../../components/dynamic-form";

function CambioForm() {
  return (
    <DynamicForm
      title="Grabado"
      cliente="true"
      producto="true"
      descripcion="true"
      presupuesto="true"
    />
  );
}

export default CambioForm;
