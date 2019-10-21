import React from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

function MaterialInfo() {
  return (
    <div>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="flex-start"
      >
        <Typography variant="h6" component="h2">
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
            label="Oro (gr)"
            type="number"
            style={{ paddingRight: "30px" }}
          />
          <TextField label="Bronce (gr)" type="number" />
        </Grid>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
        >
          <TextField
            label="Plata (gr)"
            type="number"
            style={{ paddingRight: "30px" }}
          />
          <TextField label="Acero Inoxidable (gr)" type="number" />
        </Grid>
      </Grid>
    </div>
  );
}

export default MaterialInfo;
