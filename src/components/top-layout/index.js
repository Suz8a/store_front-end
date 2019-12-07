import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import Exiticon from "@material-ui/icons/ExitToApp";
import Logo from "./logoblanco.png";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

function TopLayout(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" style={{ marginLeft: "33px" }}>
            <img src={Logo} width="229px" />
          </Button>
          <Grid container justify="flex-end">
            <Button
              onClick={props.onClickSalir}
              color="inherit"
              style={{ textTransform: "none" }}
            >
              <Exiticon style={{ width: "36px", height: "32px" }} />
              <Typography style={{ fontSize: "22px" }}>Salir</Typography>
            </Button>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default TopLayout;
