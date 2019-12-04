import React, { useState } from "react";
import { Form } from "../../components/dynamic-form/styled";
import DynamicTable from "../../components/dynamic-table";
import ClientService from "../../components/client-service";
import Description from "../../components/description";
import ThemedButton from "../../components/button";
import FileUploader from "../../components/file-uploader";
import DetailsTitle from "../../components/details-title";

const data = [
  { MaterialAdjunto: "Plata", Peso: "80gr" },
  { MaterialAdjunto: "Oro", Peso: "95gr" }
];
const data1 = [
  { MaterialAUtilizar: "Plata", Peso: "80gr" },
  { MaterialAUtilizar: "Oro", Peso: "95gr" }
];

function DetalleServicio(props) {
  const [productFiles, setProductFiles] = useState([]);

  function deleteProductFile(index) {
    return () => {
      const newLista = [...productFiles];
      newLista.splice(index, 1);
      setProductFiles(newLista);
    };
  }

  return (
    <Form>
      <div style={{ padding: "50px 100px" }}>
        <div style={{ marginTop: "40px" }}>
          <DetailsTitle servicio="Reparacion" folio="278112" />
        </div>
        <div style={{ marginTop: "40px" }}>
          <ClientService
            name="Suzclem Adriana Ochoa"
            product="Pulsera"
            weight="90"
          />
        </div>
        <div style={{ marginTop: "40px" }}>
          <DynamicTable data={data} />
        </div>
        <div style={{ marginTop: "40px" }}>
          <DynamicTable data={data1} />
        </div>
        <div style={{ marginTop: "40px" }}>
          <Description />
        </div>
        <div style={{ marginTop: "40px" }}>
          <FileUploader
            width="560px"
            fileExtensions={[".jpg", ".png"]}
            lista={productFiles}
            onDelete={deleteProductFile}
            onSetLista={setProductFiles}
          />
        </div>
        <div style={{ marginTop: "45px", marginBottom: "50px" }}>
          <ThemedButton
            marginR="30px"
            buttonSize="188px"
            variantType="outlined"
            text="Reportar Problema"
            colorTheme="secondary"
          />
          <div
            style={{ float: "right", marginTop: "45px", marginBottom: "50px" }}
          >
            <ThemedButton
              marginR="30px"
              buttonSize="120px"
              variantType="outlined"
              text="Cancelar"
              colorTheme="secondary"
            />
            <ThemedButton
              buttonSize="168px"
              variantType="contained"
              text="Guardar"
              colorTheme="primary"
            />
          </div>
        </div>
      </div>
    </Form>
  );
}

export default DetalleServicio;
