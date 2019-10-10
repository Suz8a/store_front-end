import styled from "styled-components";
import { Typography } from "@material-ui/core";

export const Cloud = styled.img`
  display: block;
  margin: 20px auto 0px auto;
`;

export const Description = styled(Typography)`
  display: block;
  margin: 0px auto 0px auto;
  width: fit-content;
  height: 16px;
  font-size: 11px;
  font-weight: bold;
  letter-spacing: 1px;
  color: #9c9c9cde;
  opacity: 1;
`;

export const DropArea = styled.div`
  height: 124px;
  width: 254px;
  background: white;
  border-radius: 4px;
  border: 1px dashed #00000058;
  position: relative;
`;

export const Item = styled.div`
  width: auto;
  font-size: 10px;
  margin: 4px 5px 0px 5px;
  padding: 5px;
  border: 1px solid #00000058;
  border-radius: 10px;
`;

export const UploadButton = styled.div`
  width: auto;
  height: 15px;
  background: black;
  padding: 2px 5px 2px 5px;
  color: white;
  margin: auto;
  left: 0px;
  right: 0px;
  bottom: 0px;
  position: absolute;
  border-radius: 2px;
  &:hover {
    background: #494949;
  }
`;

export const CancelIconContainer = styled.div`
  float: right;
  &:hover {
    color: red;
  }
`;
