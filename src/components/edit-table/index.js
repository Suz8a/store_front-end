import React, { useState } from "react";
import MaterialTable from "material-table";
import { createUser, deleteUser, updateUser } from "../../api";

function EditTable(props) {
  var usuarios = props.usuarios;

  var dataTable = usuarios.map(usuario => {
    return {
      usuario: usuario.correo,
      rol: usuario.rol,
      contrasena: "**********"
    };
  });

  const [state, setState] = useState({
    columns: [
      { title: "Usuario", field: "usuario" },
      { title: "Rol", field: "rol" },
      { title: "Contraseña", field: "contrasena" }
    ],
    data: dataTable
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
              createUser({
                rol: newData.rol,
                correo: newData.usuario,
                contrasena: newData.contrasena
              });
              newData.contrasena = "**********";
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
              var userToDelete = usuarios.find(
                user => user.correo === oldData.usuario
              );
              deleteUser(userToDelete.id);
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
