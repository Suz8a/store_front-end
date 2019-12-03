import React from "react";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import Limpieza from "../../assets/floor-brush.svg";
import cambioTamaño from "../../assets/scissors.svg";
import Reparacion from "../../assets/heal.svg";
import Grabado from "../../assets/spell.svg";
import Pulido from "../../assets/clean.svg";
import EnProceso from "../../assets/tools-cross.svg";
import Terminados from "../../assets/Check.svg";
import { CardEffects, Titles, Circles, StoreIcon } from "./styled";
import Store from "@material-ui/icons/StoreMallDirectory";
import { withRouter } from "react-router-dom";

const paths = {
  Reparación: "/recepcionist/reparacion-form",
  "Cambio de Tamaño": "/recepcionist/cambio-form",
  Grabado: "/recepcionist/grabado-form",
  Pulido: "/recepcionist/pulido-form",
  Limpieza: "/recepcionist/limpieza-form",
  "En proceso": "/recepcionist/pedidos",
  Terminados: "/recepcionist/pedidos-terminados"
};

console.log(paths.Reparación);

function SideBarStore(props) {
  function go(text) {
    props.history.push(paths[text]);
  }
  return (
    <CardEffects>
      <div
        style={{
          height: "100%",
          widht: "302px",
          padding: "19px 23px 0px 23px"
        }}
      >
        <Circles>
          <Store style={{ width: "85px", height: "75px" }} />
        </Circles>

        <div>
          <div style={{ paddingBottom: "10px" }}>
            <Divider />
          </div>

          <Titles>SERVICIOS</Titles>
          <List>
            {[
              "Reparación",
              "Cambio de Tamaño",
              "Grabado",
              "Pulido",
              "Limpieza"
            ].map((text, index) => (
              <ListItem
                onClick={() => {
                  go(text);
                }}
                button
                key={text}
                style={{ paddingLeft: "25px" }}
              >
                <ListItemIcon style={{ minWidth: "33px" }}>
                  {index === 0 && <img src={Reparacion} />}
                  {index === 1 && <img src={cambioTamaño} />}
                  {index === 2 && <img src={Grabado} />}
                  {index === 3 && <img src={Pulido} />}
                  {index === 4 && <img src={Limpieza} />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Titles>PEDIDOS</Titles>
          <List>
            {["En proceso", "Terminados"].map((text, index) => (
              <ListItem
                onClick={() => {
                  go(text);
                }}
                button
                key={text}
                style={{ paddingLeft: "25px" }}
              >
                <ListItemIcon style={{ minWidth: "33px" }}>
                  {index === 0 && <img src={EnProceso} />}
                  {index === 1 && <img src={Terminados} />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </div>
      </div>
    </CardEffects>
  );
}
export default withRouter(SideBarStore);
