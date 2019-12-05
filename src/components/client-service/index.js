import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

function ClientService(props) {
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
            <span style={{ color: "#546E7A" }}>Producto:</span>
            <div
              style={{
                display: "inline-block",
                margin: "0px 5px 0px 5px",
                width: "117px"
              }}
            >
              {props.product}
            </div>
          </Typography>
          <Typography variant="subtitle1" component="h2">
            {" "}
            <span style={{ color: "#546E7A" }}>Peso:</span>
            <div
              style={{
                display: "inline-block",
                margin: "0px 5px 0px 5px",
                width: "207px"
              }}
            >
              {props.weight}gr
            </div>
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default ClientService;
