import React from "react";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import EnProceso from "../../assets/tools-cross.svg";
import Terminados from "../../assets/Check.svg";
import { CardEffects, Titles, Circles, StoreIcon } from "./styled";
import Store from "@material-ui/icons/StoreMallDirectory";
import { withRouter } from "react-router-dom";
import WorkIcon from "@material-ui/icons/Work";

const paths = {
  Reparación: "/workshop/reparacion-form",
  "Cambio de Tamaño": "/workshop/cambio-form",
  Grabado: "/workshop/grabado-form",
  Pulido: "/workshop/pulido-form",
  Limpieza: "/workshop/limpieza-form",
  "En proceso": "/workshop/pedidos",
  Terminados: "/workshop/pedidos-terminados"
};

function SideBarWorkShop(props) {
  function go(text) {
    props.history.push(paths[text]);
  }
  return (
    <CardEffects>
      <div
        style={{
          height: "100%",
          padding: "19px 23px 0px 23px"
        }}
      >
        <Circles>
          <WorkIcon style={{ width: "85px", height: "75px" }} />
        </Circles>

        <div>
          <div style={{ paddingBottom: "10px" }}>
            <Divider />
          </div>
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
export default withRouter(SideBarWorkShop);
