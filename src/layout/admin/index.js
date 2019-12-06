import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import TopLayout from "../../components/top-layout";
import { getAllUsers } from "../../api";
import { CircularProgress, LinearProgress } from "@material-ui/core";
import SideBarAdmin from "../../components/side-bar-admin";
import EditTable from "../../components/edit-table";

function Admin() {
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

  debugger;

  return (
    <div>
      <div>
        <TopLayout />
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

export default Admin;
