import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

function ClientInfo(props) {
  return (
    <Grid container direction="column" justify="center" alignItems="flex-start">
      <Typography variant="h6" component="h2" style={{ color: "#546E7ADE" }}>
        Cliente{" "}
      </Typography>
      <TextField
        onInput={props.handleNombre}
        label="Nombre"
        style={{ width: "256px", margin: "15px 5px 0px 5px" }}
      />
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
      >
        <TextField
          onInput={props.handleAPaterno}
          label="Apellido Paterno"
          style={{ width: "256px", margin: "15px 5px 0px 5px" }}
        />
        <TextField
          onInput={props.handleAMaterno}
          id="lastname2"
          label="Apellido Materno"
          style={{ width: "256px", margin: "15px 5px 0px 25px" }}
        />
      </Grid>
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
      >
        <TextField
          onInput={props.handleTelefono}
          label="Telefono"
          style={{ width: "256px", margin: "15px 5px 0px 5px" }}
        />
        <TextField
          onInput={props.handleCorreo}
          label="Correo"
          type="email"
          autoComplete="email"
          style={{ width: "256px", margin: "15px 5px 0px 25px" }}
        />
      </Grid>
    </Grid>
  );
}

export default ClientInfo;
