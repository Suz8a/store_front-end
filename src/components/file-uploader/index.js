import React from "react";
import Dropzone from "react-dropzone";
import { useState } from "react";
import cloud from "../../assets/upload-cloud.svg";
import styled from "styled-components";

const descriptionStyle = {
  display: "block",
  margin: "5px auto 0px auto",
  width: "160px",
  font: "Roboto",
  fontSize: "14px",
  letterSpacing: "1px",
  color: "#9C9C9CDE",
  opacity: 1
};

const cloudStyle = {
  display: "block",
  margin: "auto",
  marginTop: "20px"
};

function FileUploader() {
  const [lista, setLista] = useState([]);

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
          className=""
          style={{ width: "254px", height: "124px" }}
        >
          <input {...getInputProps()} />
          <div
            style={{
              height: "124px",
              width: "254px",
              backgroundColor: "white",
              borderRadius: "4px",
              border: "1px dashed #00000058"
            }}
          >
            {lista.length === 0 ? (
              <>
                <img src={cloud} style={cloudStyle} />
                <div style={descriptionStyle}>Arrastre imagen aqui</div>
              </>
            ) : null}
            {lista.map(file => (
              <div
                style={{
                  fontSize: "10px",
                  padding: "2px 2px 0px 5px",
                  float: "left"
                }}
              >
                {file.path}
              </div>
            ))}
          </div>
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
