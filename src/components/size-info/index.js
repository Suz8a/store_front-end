import React from "react";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import arrow from "../../assets/down-arrow.svg";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
function SizeInfo() {
  return (
    <div>
      <Grid container direction="row" justify="flex-start" alignItems="center">
        <TextField label="Medida Inicial(mm)" style={{ width: "250px" }} />
        <img
          src={arrow}
          style={{ width: "20px", height: "14px", margin: "0px 18px 0px 18px" }}
        />
        <TextField label="Medida Final(mm)" style={{ width: "250px" }} />
      </Grid>
    </div>
  );
}

export default SizeInfo;
