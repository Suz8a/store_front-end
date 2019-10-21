import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

function DetailsTitle(props) {
  return (
    <div>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
      >
        <Typography variant="h6" component="h2">
          {" "}
          Detalles del Pedido{" "}
        </Typography>
        <Typography variant="subtitle1"> Folio: {props.folio} </Typography>
      </Grid>
    </div>
  );
}

export default DetailsTitle;
