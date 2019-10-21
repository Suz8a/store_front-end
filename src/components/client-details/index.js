import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

function ClientDetails(props) {
  return (
    <div>
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="flex-start"
      >
        <Typography variant="subtitle1" component="h1">
          {" "}
          Cliente: {props.client}{" "}
        </Typography>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
        >
          <Typography variant="subtitle1" component="h2">
            {" "}
            Telefono: {props.tel}{" "}
          </Typography>
          <Typography
            variant="subtitle1"
            component="h2"
            style={{ paddingLeft: "30px" }}
          >
            {" "}
            Correo: {props.email}{" "}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default ClientDetails;
