import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

function DynamicTable(props) {
  const getKeys = function() {
    return Object.keys(props.data[0]);
  };

  console.log(getKeys());

  const getHeader = function() {
    const keys = getKeys();
    return keys.map((key, index) => {
      return (
        <TableCell key={key}>
          <span>{key}</span>
        </TableCell>
      );
    });
  };

  const RenderRow = props => {
    return props.keys.map((key, index) => {
      return <TableCell key={props.data[key]}>{props.data[key]}</TableCell>;
    });
  };

  const getRowsData = function() {
    const items = props.data;
    const keys = getKeys();
    console.log(items);
    return items.map((row, index) => {
      return (
        <TableRow
          hover
          key={index}
          onClick={() => {
            props.onRowClick(row);
          }}
        >
          <RenderRow key={index} data={row} keys={keys} />
        </TableRow>
      );
    });
  };

  return (
    <Table style={{ width: props.width }} aria-label="simple table">
      <TableHead>
        <TableRow>{getHeader()}</TableRow>
      </TableHead>
      <TableBody>{getRowsData()}</TableBody>
    </Table>
  );
}

export default DynamicTable;
