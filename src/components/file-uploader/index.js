import React from "react";
import Dropzone from "react-dropzone";
import { useState } from "react";
import cloud from "../../assets/upload-cloud.svg";
import {
  Cloud,
  Description,
  DropArea,
  Item,
  UploadButton,
  CancelIconContainer
} from "./styled";
import CancelIcon from "@material-ui/icons/Cancel";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles({
  cancelIcon: {
    width: "14px",
    height: "14px"
  },
  buttonDescription: {
    margin: "0px auto 0px auto",
    fontSize: "10px",
    height: "15px",
    width: "fit-content",
    fontWeight: "bold"
  }
});

function FileUploader() {
  const [lista, setLista] = useState([]);
  const classes = useStyles();
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
        let files_with_preview = [];
        files.map(file => {
          file["preview"] = URL.createObjectURL(file);
          files_with_preview.push(file);
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
                <div style={{ marginTop: "33px" }}>
                  <Cloud src={cloud} />
                  <Description>Arrastre imagen aqui</Description>
                </div>
              </>
            ) : null}

            {lista.length > 0 ? (
              <div style={{ width: "auto", height: "101px", overflow: "auto" }}>
                {lista.map((file, index) => (
                  <Item>
                    {file.path}
                    <CancelIconContainer onClick={onDelete(index)}>
                      <CancelIcon className={classes.cancelIcon} />
                    </CancelIconContainer>
                  </Item>
                ))}
              </div>
            ) : null}

            <UploadButton onClick={getRootProps().onClick}>
              <Typography className={classes.buttonDescription}>
                Seleccionar archivos
              </Typography>
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
