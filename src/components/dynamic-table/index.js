import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

function DynamicTable(props) {
  const getKeys = function() {
    return Object.keys(this.props.data[0]);
  };

  console.log(getKeys());

  const getHeader = function() {
    var keys = this.getKeys();
    return keys.map((key, index) => {
      return <TableHead key={key}>{key.toUpperCase()}</TableHead>;
    });
  };

  const RenderRow = props => {
    return props.keys.map((key, index) => {
      return <TableRow key={props.data[key]}>{props.data[key]}</TableRow>;
    });
  };

  const getRowsData = function() {
    var items = this.props.data;
    var keys = this.getKeys();
    return items.map((row, index) => {
      return (
        <TableCell key={index}>
          <RenderRow key={index} data={row} keys={keys} />
        </TableCell>
      );
    });
  };

  return (
    <Table style={{ width: "650" }} aria-label="simple table">
      <TableHead>
        <TableRow>{getHeader}</TableRow>
      </TableHead>
      <TableBody>{getRowsData}</TableBody>
    </Table>
  );
}

export default DynamicTable;
