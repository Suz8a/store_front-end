
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Exiticon from '@material-ui/icons/ExitToApp';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit">
          <img src="https://scontent.fhmo2-1.fna.fbcdn.net/v/t1.0-9/40269682_317748365639307_3448012741799837696_n.png?_nc_cat=107&_nc_oc=AQnEG7TI61-vtM1kwWsTyq-WvfwweHiJyOn2x7nqHQU2bgxtn6NeN6bSQpA-F-SlyBQ&_nc_ht=scontent.fhmo2-1.fna&oh=a4cf7752606f79b8dfa15fc96309cb01&oe=5DF53550"
           width="60"
           height="40"/>
          </Button>
          <Grid  container  justify="flex-end"><Button color="inherit"><Exiticon/>Salir</Button></Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}
