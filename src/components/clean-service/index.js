import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ClientDetails from "../client-details";
function CleanService() {
  
  return (
    <Paper>
    <Typography variant="h5" component="h3">
      This is a sheet of paper.
    </Typography>
    <Typography component="p">
      Paper can be used to build surface or other elements for your application.
    </Typography>
  </Paper>
  );
}
export default CleanService();