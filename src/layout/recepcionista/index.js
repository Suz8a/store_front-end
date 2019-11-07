import React from "react";
import SideBarStore from "../../components/side-bar-store";
import TopLayout from "../../components/top-layout";
import DynamicForm from "../../components/dynamic-form";
import DynamicTable from "../../components/dynamic-table";
import CambioForm from "../../containers/cambio-form";
<<<<<<< HEAD
import LimpiezaForm from "../../containers/limpieza-form";
=======
>>>>>>> cb0baffba6eca5963f3a3a3f23a9284eb53705c7

function Recepcionista() {
  return (
    <div>
      <div>
        <TopLayout />
      </div>
      <div
        style={{
          width: "100%",
          height: "fit-content",
          backgroundColor: "#F4F6F8"
        }}
      >
        <div
          style={{
            display: "inline-block",
            width: "fit-content",
            height: "100%",
            float: "left",
            position: "relative"
          }}
        >
          <SideBarStore />
        </div>
        <div
          style={{
            display: "inline-block",
            width: "calc(100vw - 304px)",
            height: "fit-content"
          }}
        >
<<<<<<< HEAD
          <LimpiezaForm/>
=======
          <CambioForm />
>>>>>>> cb0baffba6eca5963f3a3a3f23a9284eb53705c7
        </div>
      </div>
    </div>
  );
}

export default Recepcionista;
