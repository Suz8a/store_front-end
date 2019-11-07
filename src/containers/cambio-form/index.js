import React from "react";
import DynamicForm from "../../components/dynamic-form";

function CambioForm() {
  return (
    <DynamicForm
      title="Cambio de Tamaño"
      cliente="true"
      producto="true"
      medidas="true"
      descripcion="true"
      materialAdjunto="true"
      materialUtilizar="true"
      presupuesto="true"
    />
  );
}

export default CambioForm;
