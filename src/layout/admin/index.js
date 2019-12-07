import React, { useEffect, useState } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import TopLayout from "../../components/top-layout";
import { getAllUsers } from "../../api";
import { CircularProgress, LinearProgress } from "@material-ui/core";
import SideBarAdmin from "../../components/side-bar-admin";
import EditTable from "../../components/edit-table";
import { createUser, deleteUser, updateUser } from "../../api";

function Admin(props) {
  const [usuarios, setusuarios] = useState(undefined);

  useEffect(async () => {
    const result = await getAllUsers();
    setusuarios(result.data);
  }, []);

  if (usuarios === undefined)
    return (
      <div>
        <LinearProgress color="secondary" />
      </div>
    );

  function onClickSalir() {
    props.history.push("/login");
  }

  return (
    <div>
      <div>
        <TopLayout onClickSalir={onClickSalir} />
      </div>
      <div
        style={{
          width: "100%",
          height: "725px",
          backgroundColor: "#F4F6F8"
        }}
      >
        <div
          style={{
            display: "inline-block",
            width: "fit-content",
            height: "100%",
            float: "left",
            position: "relative"
          }}
        >
          <SideBarAdmin />
        </div>
        <div
          style={{
            display: "inline-block",
            width: "calc(100vw - 304px)",
            height: "fit-content"
          }}
        >
          <Switch>
            <Route
              path="/admin/usuarios"
              component={() => <EditTable usuarios={usuarios} />}
            />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default withRouter(Admin);
