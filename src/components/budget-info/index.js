import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

function BudgetInfo() {
    return (
        <div>
            <Grid container direction = "column" justify = "center" alignItems = "flex-start">
                <Typography variant = "h6" component = "h2"> Presupuesto </Typography>
                <TextField label = "Hechura" type= "number" style = {{paddingRight: "30px"}}/>
                <TextField label = "Total" type= "number"/>
            </Grid>
        </div>
    )
}

export default BudgetInfo;
