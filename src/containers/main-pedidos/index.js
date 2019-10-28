import React from "react";
import SideBarStore from "../../components/side-bar-store";
import TopLayout from "../../components/top-layout";

function MainPedidos() {
  return (
    <div>
      <div style={{ width: "100%" }}>
        <TopLayout />
      </div>
      <SideBarStore />
    </div>
  );
}

export default MainPedidos;
