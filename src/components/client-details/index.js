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
          Cliente:
          <div
            style={{
              color: "gray",
              display: "inline-block",
              margin: "0px 5px 0px 5px",
              width: "307px"
            }}
          >
            {props.name}
          </div>
        </Typography>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
        >
          <Typography
            variant="subtitle1"
            component="h2"
            style={{ width: "fit-content" }}
          >
            {" "}
            Telefono:
            <div
              style={{
                color: "gray",
                display: "inline-block",
                margin: "0px 5px 0px 5px",
                width: "117px"
              }}
            >
              {props.tel}
            </div>
          </Typography>
          <Typography variant="subtitle1" component="h2">
            {" "}
            Correo:
            <div
              style={{
                color: "gray",
                display: "inline-block",
                margin: "0px 5px 0px 5px",
                width: "207px"
              }}
            >
              {props.email}
            </div>
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default ClientDetails;
