import React from "react";
import SideBarStore from "../../components/side-bar-store";
import TopLayout from "../../components/top-layout";
import DynamicForm from "../../components/dynamic-form";
import DynamicTable from "../../components/dynamic-table";

function MainPedidos() {
  return (
    <div>
      <div style={{ width: "100%" }}>
        <TopLayout />
      </div>
      <div style={{ width: "100%" }}>
        <div>
          <SideBarStore />

          <div
            style={{
              display: "inline-block",
              padding: "80px auto 60px auto",
              backgroundColor: "#F4F6F8",
              width: "100%"
            }}
          >
            <DynamicForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPedidos;
