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
          <span style={{ color: "#546E7A" }}>Cliente:</span>
          <div
            style={{
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
            <span style={{ color: "#546E7A" }}>Telefono:</span>
            <div
              style={{
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
            <span style={{ color: "#546E7A" }}>Correo:</span>
            <div
              style={{
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
