import React from "react";
import Dropzone from "react-dropzone";
import { useState } from "react";

function FileUploader() {
  var state = {
    dropzone1: [],
    dropzone2: []
  };

  const [lista, setLista] = useState([]);
  debugger;
  return (
    <div>
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
          <div {...getRootProps()} className="">
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
              {lista.map(file => (
                <div style={{ fontSize: "10px", padding: "2px 2px 0px 5px" }}>
                  {file.path}
                </div>
              ))}
            </div>
          </div>
        )}
      </Dropzone>
    </div>
  );
}

/**              <img
                  src={file.preview}
                  alt={file.path}
                  style={{ width: 50, height: 50, padding: "5px" }}
                /> */

export default FileUploader;
