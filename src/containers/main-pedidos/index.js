import React from "react";
import SideBarStore from "../../components/side-bar-store";
import TopLayout from "../../components/top-layout";
import DynamicForm from "../../components/dynamic-form";
import DynamicTable from "../../components/dynamic-table";

function MainPedidos() {
  return (
    <div>
      <div>
        <TopLayout />
      </div>
      <div style={{ display: "inline", float: "left", width: "100%" }}>
        <div style={{ display: "inline", float: "left" }}>
          <SideBarStore />
        </div>
        <div
          style={{
            height: "calc(100vh - 70px)",
            display: "inline",
            float: "left",
            width: "100%",
            padding: "80px auto 60px auto",
            backgroundColor: "#F4F6F8"
          }}
        >
          <DynamicForm />
        </div>
      </div>
    </div>
  );
}

export default MainPedidos;
