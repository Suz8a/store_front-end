import React from "react";
import Divider from "@material-ui/core/Divider";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";
import Typography from "@material-ui/core/Typography";

//Componente para el menú lateral izquierdo
//Por alguna razón no logro hacer que se vea lo que hago, tendré que seguir investigando...

//Trata de seguir la estructura siguiente, se crea la funcion que retorna JSX, se exporta con "export default <nombre de
//la funcion>"

//utilizaste la libreria @material-ui/icons, por lo tanto debes instalarla con el comando "npm install @material-ui/icons"
//tenias un "classess" innecesario en el primer <div>, esto te causaba errores
//despues de corregir todo esto, importas la funcion en App y lo utilizas como si fuera una etiqueta html

function SideBar() {
  return (
    <div>
      <div />
      <Divider />
      <Typography>SERVICIOS</Typography>
      <List>
        {[
          "Reparación",
          "Cambio de Tamaño",
          "Grabado",
          "Pulido",
          "Limpieza"
        ].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Typography>PEDIDOS</Typography>
      <List>
        {["En proceso", "Terminados"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default SideBar;
