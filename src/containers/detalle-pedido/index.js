import React from "react";
import { Form } from "../../components/dynamic-form/styled";
import DetailsTitle from "../../components/details-title";
import ExpancionPanel from "../../components/expansion-panel";
import ClientDetails from "../../components/client-details";
import ServiceDetails from "../../components/service-details";
import Description from "../../components/description";
import ThemedButton from "../../components/button";
import { withRouter } from "react-router-dom";

function DetallePedido(props) {
  function onClickVolver() {
    props.history.push("/recepcionist/pedidos");
  }
  function onClickEstado() {}

  return (
    <Form>
      <div style={{ padding: "50px 100px" }}>
        <div style={{ marginTop: "40px" }}>
          <DetailsTitle folio={props.folio} />
        </div>
        <div
          style={{ float: "right", marginTop: "20px", marginBottom: "50px" }}
        ></div>
        <div style={{ marginTop: "40px" }}>
          <ClientDetails
            name={props.name}
            tel={props.tel}
            email={props.email}
          />
        </div>
        <div style={{ marginTop: "40px" }}>
          <ServiceDetails
            serv={props.serv}
            product={props.product}
            weight={props.weight}
          />
        </div>
        <div style={{ marginTop: "40px" }}>
          <Description descripcion={props.descripcion} disabled={true} />
        </div>
        <div style={{ marginTop: "40px" }}>
          <ExpancionPanel cantidad="500" />
        </div>
        <div
          style={{ float: "right", marginTop: "45px", marginBottom: "50px" }}
        >
          <ThemedButton
            onClick={onClickVolver}
            marginR="30px"
            buttonSize="120px"
            variantType="outlined"
            text="Volver"
            colorTheme="secondary"
          />
          <ThemedButton
            onClick={onClickEstado}
            buttonSize="168px"
            variantType="contained"
            text="Estado"
            colorTheme="primary"
          />
        </div>
      </div>
    </Form>
  );
}

export default withRouter(DetallePedido);
