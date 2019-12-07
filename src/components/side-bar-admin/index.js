import React from "react";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import EnProceso from "../../assets/tools-cross.svg";
import { CardEffects, Titles, Circles, StoreIcon } from "./styled";
import Store from "@material-ui/icons/StoreMallDirectory";
import People from "@material-ui/icons/People";
import { withRouter } from "react-router-dom";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";

const paths = {
  Todos: "/admin/usuarios"
};

function SideBarAdmin(props) {
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
          <VerifiedUserIcon style={{ width: "85px", height: "75px" }} />
        </Circles>

        <div>
          <div style={{ paddingBottom: "10px" }}>
            <Divider />
          </div>
          <Titles>USUARIOS</Titles>
          <List>
            {["Todos"].map((text, index) => (
              <ListItem
                onClick={() => {
                  go(text);
                }}
                button
                key={text}
                style={{ paddingLeft: "25px" }}
              >
                <ListItemIcon style={{ minWidth: "33px" }}>
                  {index === 0 && <People />}
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

export default withRouter(SideBarAdmin);
