import React from 'react'
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
function SizeInfo() {
    return (
        <div>
            <Grid  container  direction="row"  justify="flex-start"  alignItems="center">
                <TextField label="Medida Inicial(mm)" style={{width:"250px"}}/>
                <ArrowRightAltIcon style={{fontSize:"40px"}}/>
                <TextField label="Medida Final(mm)" style={{width:"250px"}}/>
            </Grid>
        </div>
    )
}

export default SizeInfo;
