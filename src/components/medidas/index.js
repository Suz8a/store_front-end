import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

function Medidas(props) {
  return (
    <div>
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="flex-start"
      >
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
            <span style={{ color: "#546E7A" }}>Medida inicial:</span>
            <div
              style={{
                display: "inline-block",
                margin: "0px 5px 0px 5px",
                width: "117px"
              }}
            >
              {props.inicial} mm
            </div>
          </Typography>
          <Typography variant="subtitle1" component="h2">
            {" "}
            <span style={{ color: "#546E7A" }}>Medida final:</span>
            <div
              style={{
                display: "inline-block",
                margin: "0px 5px 0px 5px",
                width: "207px"
              }}
            >
              {props.final} mm
            </div>
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default Medidas;
