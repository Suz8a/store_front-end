import React from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

export default function SpacingGrid() {
  return (
    <Grid container direction="column" justify="center" alignItems="flex-start">
      <Typography variant="h6" component="h2">
        Cliente{" "}
      </Typography>

      <TextField id="name" label="Nombre" />

      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
      >
        <TextField
          id="lastname1"
          label="Apellido Paterno"
          style={{ paddingRight: "30px" }}
        />

        <TextField id="lastname2" label="Apellido Materno" />
      </Grid>
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
      >
        <TextField
          id="phone"
          label="Telefono"
          style={{ paddingRight: "30px" }}
        />

        <TextField
          id="email"
          label="Correo"
          type="email"
          autoComplete="email"
        />
      </Grid>
    </Grid>
  );
}
