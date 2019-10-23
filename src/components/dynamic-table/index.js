import React from "react";

function DynamicTable(props) {

    getKeys = function(){
        return Object.keys(this.props.data[0]);
        }

    getHeader = function(){
            var keys = this.getKeys();
            return keys.map((key, index)=>{
            return <TableHead key={key}>{key.toUpperCase()}</TableHead>
        })
    }

    const RenderRow = (props) =>{
        return props.keys.map((key, index)=>{
        return <TableRow key={props.data[key]}>{props.data[key]}</TableRow>
        })
       }
        

  return (
    <Table style={{width="650"}} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Dessert (100g serving)</TableCell>
          <TableCell align="right">Calories</TableCell>
          <TableCell align="right">Fat&nbsp;(g)</TableCell>
          <TableCell align="right">Carbs&nbsp;(g)</TableCell>
          <TableCell align="right">Protein&nbsp;(g)</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map(row => (
          <TableRow key={row.name}>
            <TableCell component="th" scope="row">
              {row.name}
            </TableCell>
            <TableCell align="right">{row.calories}</TableCell>
            <TableCell align="right">{row.fat}</TableCell>
            <TableCell align="right">{row.carbs}</TableCell>
            <TableCell align="right">{row.protein}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default DynamicTable;
