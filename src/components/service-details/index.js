import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

function ServiceDetails(props) {
    return (
        <div>
              <Grid container direction="column" justify="flex-start" alignItems="flex-start">
                <Typography variant = "subtitle1" component = "h1"> Servicio: {props.service} </Typography>
                <Grid container direction="row" justify="flex-start" alignItems="flex-start">
                    <Typography variant = "subtitle1" component = "h2"> Producto: {props.product}  </Typography>
                    <Typography variant = "subtitle1" component = "h2" style={{ paddingLeft: "30px" }}> Peso: {props.weight}gr </Typography>
                </Grid>
            </Grid> 
        </div>
    )
}

export default ServiceDetails;
