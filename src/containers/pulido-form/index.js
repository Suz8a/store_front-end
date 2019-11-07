import React from "react";
import DynamicForm from "../../components/dynamic-form";

function PulidoForm() {
  return (
    <DynamicForm
      title="Pulido"
      cliente="true"
      producto="true"
      descripcion="true"
      presupuesto="true"
    />
  );
}

export default PulidoForm;
