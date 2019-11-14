import React from "react";
import Input from "@material-ui/core/Input";
import SearchIcon from "@material-ui/icons/Search";
import InputAdornment from "@material-ui/core/InputAdornment";

function PedidosTopBar(props) {
  return (
    <div style={{display:"inline-block", width:"100%"}}>
        <h2
        style={{
          width:"100px",
          fontFamily: "Roboto",
          textAlign: "left",
          color: "#000000DE",
          marginTop:"25px",
          marginLeft:"20px",
          float:"left"
        }}
      >
        Pedidos
      </h2>
      <div style={{width:"250px",float:"right", marginBottom:"40px"}} >
        <Input
        style={{
          color: "#546E7ADE",
          marginRight:"20px",
          marginTop:"15px"
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
      
    </div>
  );
}
export default PedidosTopBar;
