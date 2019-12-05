import React, { useState } from "react";
import { Form } from "../../components/dynamic-form/styled";
import DynamicTable from "../../components/dynamic-table";
import ClientService from "../../components/client-service";
import Description from "../../components/description";
import ThemedButton from "../../components/button";
import FileUploader from "../../components/file-uploader";
import DetailsTitle from "../../components/details-title";

function DetalleServicio(props) {
  const [fileList, setFileList] = useState([]);

  const materialesUtilizar = props.material_utilizar;
  const materialesAdjunto = props.material_adjunto;
  const data = [];
  const data1 = [];
  var disabled;

  materialesAdjunto.map(material => {
    if (material.gramos != 0)
      data.push({
        "Material adjunto": material.nombre_material,
        "Peso (gr)": material.gramos
      });
  });

  materialesUtilizar.map(material => {
    if (material.gramos != 0)
      data1.push({
        "Material a utilizar": material.nombre_material,
        "Peso (gr)": material.gramos
      });
  });

  function addFile(file) {
    setFileList([...fileList, ...file]);
  }

  function deleteFile(fileIndex) {
    const newFileList = [...fileList];
    newFileList.splice(fileIndex, 1);
    setFileList(newFileList);
  }

  return (
    <Form>
      <div style={{ padding: "50px 100px" }}>
        <div style={{ marginTop: "40px" }}>
          <DetailsTitle title={props.servicio} folio={props.folio} />
        </div>
        <div style={{ marginTop: "40px" }}>
          <ClientService
            name={props.name}
            product={props.product}
            weight={props.weight}
          />
        </div>
        <div style={{ marginTop: "40px" }}>
          <DynamicTable data={data} />
        </div>
        <div style={{ marginTop: "40px" }}>
          <DynamicTable data={data1} />
        </div>
        <div style={{ marginTop: "40px" }}>
          <Description descripcion={props.descripcion} disabled={true} />
        </div>
        <div style={{ marginTop: "40px" }}>
          <FileUploader
            onDelete={deleteFile}
            fileExtensions={[".jpg", ".png"]}
            onSetLista={addFile}
            lista={fileList}
            width="560px"
          />
        </div>
        <div style={{ marginTop: "45px", marginBottom: "50px" }}>
          <div
            style={{ float: "right", marginTop: "45px", marginBottom: "50px" }}
          >
            <ThemedButton
              marginR="64px"
              buttonSize="188px"
              variantType="outlined"
              text="Reportar Problema"
              colorTheme="secondary"
            />
            <ThemedButton
              marginR="20px"
              buttonSize="120px"
              variantType="outlined"
              text="Cancelar"
              colorTheme="secondary"
            />
            <ThemedButton
              buttonSize="168px"
              variantType="contained"
              text={props.estado_taller}
              colorTheme="primary"
            />
          </div>
        </div>
      </div>
    </Form>
  );
}

export default DetalleServicio;
