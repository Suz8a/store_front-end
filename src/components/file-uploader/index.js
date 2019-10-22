import React from "react";
import Dropzone from "react-dropzone";
import { useState } from "react";
import cloud from "../../assets/upload-cloud.svg";
import Grid from "@material-ui/core/Grid";

import {
  Cloud,
  Description,
  DropArea,
  Item,
  UploadButton,
  CancelIconContainer,
  CancelIcon,
  ButtonDescription
} from "./styled";

import * as mime from "mime-types";

function FileUploader() {
  const [lista, setLista] = useState([]);
  const imgExtension = [".jpg", ".png"];
  function onDelete(index) {
    return () => {
      const newLista = [...lista];
      newLista.splice(index, 1);
      setLista(newLista);
    };
  }
  return (
    <Dropzone
      onDrop={files => {
        let files_with_preview = files
          .filter(file =>
            imgExtension.some(extension => mime.lookup(extension) == file.type)
          )
          .map(file => {
            file["preview"] = URL.createObjectURL(file);
            return file;
          });

        const new_files = [...lista, ...files_with_preview];

        setLista(new_files);
      }}
    >
      {({ getRootProps, getInputProps }) => (
        <div
          {...getRootProps()}
          onClick={() => {}}
          className=""
          style={{ width: "254px", height: "124px" }}
        >
          <input {...getInputProps()} />
          <DropArea>
            {lista.length === 0 ? (
              <>
                <div style={{ marginTop: "30px" }}>
                  <Cloud src={cloud} />
                  <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                  >
                    {" "}
                    <Description>Arrastre imagen aqui</Description>
                  </Grid>
                </div>
              </>
            ) : null}

            {lista.length > 0 ? (
              <div style={{ width: "auto", height: "92px", overflow: "auto" }}>
                {lista.map((file, index) => (
                  <Item key={index}>
                    {file.path}
                    <CancelIconContainer onClick={onDelete(index)}>
                      <CancelIcon />
                    </CancelIconContainer>
                  </Item>
                ))}
              </div>
            ) : null}

            <UploadButton onClick={getRootProps().onClick}>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
              >
                {" "}
                Seleccionar archivos
              </Grid>
            </UploadButton>
          </DropArea>
        </div>
      )}
    </Dropzone>
  );
}

/**              <img
                  src={file.preview}
                  alt={file.path}
                  style={{ width: 50, height: 50, padding: "5px" }}
                /> */

export default FileUploader;
