import React, { useState } from "react";
import MaterialTable from "material-table";

function EditTable() {
  const [state, setState] = useState({
    columns: [
      { title: "Usuario", field: "usuario" },
      { title: "Rol", field: "rol" }
    ],
    data: [
      { usuario: "Adriana", rol: "Recepcionista" },
      { usuario: "Abraham", rol: "Jefe de taller" }
    ]
  });

  return (
    <MaterialTable
      style={{
        width: "772px",

        margin: "105px auto 20px auto"
      }}
      title="Usuarios"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState(prevState => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          })
      }}
    />
  );
}

export default EditTable;
