import React from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

function MaterialInfo(props) {
  return (
    <div>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="flex-start"
      >
        <Typography
          variant="h6"
          component="h2"
          style={{ color: "#546E7ADE", height: "20px" }}
        >
          {" "}
          Material Adjunto{" "}
        </Typography>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
        >
          <TextField
            onInput={props.handleOro}
            label="Oro (gr)"
            type="number"
            style={{ width: "180px", marginRight: "50px", marginTop: "15px" }}
          />
          <TextField
            onInput={props.handleBronce}
            label="Bronce (gr)"
            type="number"
            style={{ width: "180px", marginTop: "15px" }}
          />
        </Grid>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
        >
          <TextField
            onInput={props.handlePlata}
            label="Plata (gr)"
            type="number"
            style={{ width: "180px", marginRight: "50px", marginTop: "15px" }}
          />
          <TextField
            onInput={props.handleAcero}
            label="Acero Inoxidable (gr)"
            style={{ width: "180px", marginTop: "15px" }}
            type="number"
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default MaterialInfo;
