import React from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

function BudgetInfo(props) {
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
          style={{ color: "#546E7ADE", width: "98px", height: "20px" }}
        >
          {" "}
          Presupuesto{" "}
        </Typography>
        <TextField
          onInput={props.handleHechura}
          label="Hechura"
          type="number"
          style={{ width: "256px", marginTop: "15px" }}
        />
        <TextField
          inputProps={{
            readOnly: true
          }}
          onInput={props.calcularTotal}
          label="Total"
          type="number"
          style={{ width: "256px", marginTop: "15px" }}
        />
      </Grid>
    </div>
  );
}

export default BudgetInfo;
