import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import FormHelperText from '@material-ui/core/FormHelperText';
import prueba from './prueba.png';



const useStyles = makeStyles(theme => ({
  formControl: {
    minWidth: 200,
  },
}));

export default function ProductInfo() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    Seleccionar: '',
  });

  const inputLabel = React.useRef(null);


  const handleChange = event => {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <Grid
    container direction = "row"
>
    <Grid
    item xs={4} sm={2}
   container direction="column"
    justify = "flex-start"
    alignItems = "flex-start">
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="Selectlist">Seleccionar</InputLabel>
        <Select
          value={values.Seleccionar}
          onChange={handleChange}
          inputProps={{
            name: 'Seleccionar',
            id: 'Selectlist',
          }}
        >
          <MenuItem value={1}>Ten</MenuItem>
          <MenuItem value={2}>Twenty</MenuItem>
          <MenuItem value={3}>Thirty</MenuItem>
        </Select>
      </FormControl>



            <TextField
            id = "gramos"
            label = "Peso (gr) "
            type = "number"  className={classes.formControl}/>
      </Grid>




      <Grid item xs={12} sm>
              <img src={prueba}/></Grid>



            </Grid>
  );
}
