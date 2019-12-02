import React from "react";
import {Form} from "../../components/dynamic-form/styled";
import DetailsTitle from "../../components/details-title";
import ExpancionPanel from "../../components/expansion-panel";
import ClientDetails from "../../components/client-details";
import ServiceDetails from "../../components/service-details";
import Description from "../../components/description";
import ThemedButton from "../../components/button";


function DetallePedido() {
  return (
    <Form>
        <div style={{ padding: "50px 100px" }}>

        <div style={{ marginTop: "40px" }}>
          <DetailsTitle servicio="Reparacion" folio="278112"/>
        </div>
        <div style={{ float: "right", marginTop: "20px", marginBottom: "50px" }}>
          <ThemedButton
            buttonSize="168px"
            variantType="contained"
            text="No se que"
            colorTheme="primary"
          />
        </div>
        <div style={{ marginTop: "40px" }}>
          <ClientDetails name="Suzclem Adriana Ochoa" tel="6673829390" email="suzclem@gmail.com"/>
        </div>
        <div style={{ marginTop: "40px" }}> 
          <ServiceDetails serv="Reparacion" product="Reloj" weight="89"/>
        </div>
        <div style={{ marginTop: "40px" }}>
          <Description/>
        </div>
        <div style={{ marginTop: "40px" }}>
          <ExpancionPanel cantidad="500"/>
        </div>
        <div style={{ float: "right", marginTop: "45px", marginBottom: "50px" }}>
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

export default DetallePedido;
