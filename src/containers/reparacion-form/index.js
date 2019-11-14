import React from "react";
import DynamicForm from "../../components/dynamic-form";

function ReparacionForm() {
  return (
    <DynamicForm
      title="Reparación"
      cliente="true"
      producto="true"
      descripcion="true"
      materialAdjunto="true"
      materialUtilizar="true"
      presupuesto="true"
    />
  );
}

export default ReparacionForm;