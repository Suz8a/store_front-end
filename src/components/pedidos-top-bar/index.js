import React from "react";
import Input from "@material-ui/core/Input";
import SearchIcon from "@material-ui/icons/Search";
import InputAdornment from "@material-ui/core/InputAdornment";

function PedidosTopBar(props) {
  return (
    <div>
      <h2
        style={{
          fontFamily: "Roboto",
          marginLeft: "447px",
          marginTop: "206px",
          position: "absolute",
          textAlign: "left",
          color: "#000000DE"
        }}
      >
        Pedidos
      </h2>
      <Input
        style={{
          marginLeft: "890px",
          marginTop: "210px",
          position: "absolute",
          color: "#546E7ADE"
        }}
        placeholder="Buscar"
        id="input-with-icon-adornment"
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        }
      />
    </div>
  );
}
export default PedidosTopBar;
