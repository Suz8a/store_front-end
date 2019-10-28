import styled, { keyframes } from "styled-components";
import { Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import Tienda from "../../assets/store.svg";

export const CardEffects = styled(Card)`
  margin-top: 75;
  margin-left: -2;
  width: 304px;
  height: 726px;
  background: #ffffff;
  box-shadow: 0px 16px 10px #00000033;
  border-radius: 4px;
  opacity: 1;
`;
export const Titles = styled(Typography)`
  text-align: left;
  font-family: Roboto;
  letter-spacing: 0.12px;
  color: #546e7a99;
  opacity: 1;
  margin-top: 261px;
  margin-left: 23px;
  width: 90px;
  height: 24px;
`;
export const Circles = styled.div`
  border-radius: 65px;
  height: 130px;
  width: 130px;
  background: black;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 4px 5px #00000033;
  opacity: 1;
  margin: 19px auto 25px auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const StoreIcon = styled(Tienda)`
  margin-top: 121px;
  margin-left: 108px;
`;
