import React from "react";
import Description from "../description";
import Typography from "@material-ui/core/Typography";
import ThemedButton from "../button";
import { Paper } from "@material-ui/core";

function GenerateReport({
  onClickEnviar,
  onClickCancelar,
  handleDescripcion,
  descripcion
}) {
  return (
    <Paper
      style={{
        width: "763px",
        height: "360px",
        padding: "30px",
        margin: "50px auto 20px auto"
      }}
    >
      <div
        style={{
          width: "fit-content",
          height: "fit-content",
          margin: "10px auto 0px auto"
        }}
      >
        <Typography
          variant="h6"
          style={{ fontSize: "25px", paddingBottom: "40px" }}
        >
          Generar Reporte
        </Typography>
        <Description
          handleDescripcion={handleDescripcion}
          style={{
            width: "670px",
            height: "165px",
            margin: "27px 101px 28px 112px"
          }}
        />
      </div>
      <div
        style={{
          paddingLeft: "250px",
          marginTop: "40px",
          float: "right",
          marginRight: "94px"
        }}
      >
        <ThemedButton
          onClick={onClickCancelar}
          marginR="30px"
          buttonSize="120px"
          variantType="outlined"
          text="Cancelar"
          colorTheme="secondary"
        />
        <ThemedButton
          onClick={onClickEnviar}
          buttonSize="168px"
          variantType="contained"
          text="Enviar"
          colorTheme="primary"
        />
      </div>
    </Paper>
  );
}

export default GenerateReport;
