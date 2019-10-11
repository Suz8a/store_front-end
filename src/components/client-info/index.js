import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

function ClientInfo() {
  return (
    <div>
       <Grid container direction = "column" justify = "center" alignItems = "flex-start">
        <Typography variant = "h6" component = "h2"> Cliente </Typography>
        <TextField label = "Nombre"/>
        <Grid container direction = "row" justify = "flex-start" alignItems = "flex-start">
          <TextField label = "Apellido Paterno" style = {{paddingRight: "30px"}}/>
          <TextField label = "Apellido Materno" />
        </Grid>
        <Grid container direction = "row" justify = "flex-start" alignItems = "flex-start">
          <TextField label = "Telefono" style = {{paddingRight: "30px"}}/>
          <TextField label = "Correo" type = "email" autoComplete = "email"/>
        </Grid>
      </Grid >
    </div>
  )
}

export default ClientInfo