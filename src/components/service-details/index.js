import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

function ServiceDetails(props) {
    return (
        <div>
          <Grid container direction="column" justify="flex-start" alignItems="flex-start">
            <Typography variant="subtitle1" component="h1">{" "} Servicio:
              <div style={{color: "gray", display: "inline-block", margin: "0px 5px 0px 5px", width:"307px"}}>
                {props.serv}
              </div>
            </Typography>
            <Grid container direction="row" justify="flex-start" alignItems="flex-start">
              <Typography variant="subtitle1" component="h2" style={{ width: "fit-content" }}>{" "}Producto:
                <div style={{color: "gray",display: "inline-block",margin: "0px 5px 0px 5px", width:"117px"}}>
                  {props.product}
                </div>
              </Typography>
              <Typography variant="subtitle1" component="h2">{" "}Peso: 
                <div style={{color: "gray", display: "inline-block", margin: "0px 5px 0px 5px", width:"207px"}}>
                  {props.weight}gr
                </div> 
              </Typography>
            </Grid>
          </Grid>
        </div>
      );
}

export default ServiceDetails;
