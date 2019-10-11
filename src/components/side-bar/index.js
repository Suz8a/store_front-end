import React from 'react';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Limpieza from '../../assets/floor-brush.svg';
import cambioTamaño from '../../assets/scissors.svg';
import Reparacion from '../../assets/heal.svg';
import Grabado from '../../assets/spell.svg';
import Tienda from '../../assets/store.svg';
import Pulido from '../../assets/clean.svg';
import EnProceso from '../../assets/tools-cross.svg';
import Terminados from '../../assets/Check.svg';
import { red } from '@material-ui/core/colors';

//Componente para el menú lateral izquierdo
//Por alguna razón no logro hacer que se vea lo que hago, tendré que seguir investigando...

const useStyles = makeStyles({
  card: {
    top: 75,
    left: -2,
    width: 304,
    height: 726,
    background: '#FFFFFF',
    boxShadow: '0px 16px 10px #00000033;',
    borderRadius: 4,
    opacity: 1,
  },
});

function SideBar() {
  const classes = useStyles();
  return (
      <Card className={classes.card}>
        <div>
      <Divider />
      <Typography>
            SERVICIOS
          </Typography>
      <List>
        {['Reparación', 'Cambio de Tamaño', 'Grabado', 'Pulido','Limpieza'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index === 0 && <img src={Reparacion}/>}
              {index === 1 && <img src={cambioTamaño}/>}
              {index === 2 && <img src={Grabado}/>}
              {index === 3 && <img src={Pulido}/>}
              {index === 4 && <img src={Limpieza}/>}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Typography>
            PEDIDOS
          </Typography>
      <List>
        {['En proceso', 'Terminados'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
            {index === 0 && <img src={EnProceso}/>}
            {index === 1 && <img src={Terminados}/>}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      </div>
      </Card>
  )
}

export default SideBar

