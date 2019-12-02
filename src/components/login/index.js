import React from "react";
import { CardLogIn, InputData, Text, CardDark, backg } from "./styled";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import EmailIcon from "@material-ui/icons/Email";
import LockIcon from "@material-ui/icons/Lock";
import Logo from "./../../assets/logo.png";
import { MuiThemeProvider } from "@material-ui/core";
import { StylesProvider } from "@material-ui/styles";
import theme from "./../../theme";
import ThemedButton from "./../button";

export default function Login() {
  return (
    <div style={{background: "#00000010", position: "absolute", width: "694px"}}>
      <CardLogIn>
        <Text
          style={{
            fontFamily: "Roboto",
            letterSpacing: "1.34px",
            fontStyle: "Medium",
            fontSize: "15px/20px",
          }}
        >
          Inicio de sesión
        </Text>
        <InputData>
          <Grid container spacing={1} alignItems="flex-end">
            <Grid item>
              <EmailIcon style={{ color: "#9C9C9CDE" }} fontSize="small" />
            </Grid>
            <Grid item>
              <TextField
                style={{ width: "266px" }}
                id="input-with-icon-grid"
                label="Correo"
              />
            </Grid>
          </Grid>
          <Grid container spacing={1} alignItems="flex-end">
            <Grid item>
              <LockIcon style={{ color: "#9C9C9CDE" }} fontSize="small" />
            </Grid>
            <Grid item>
              <TextField
                style={{ width: "266px" }}
                id="input-with-icon-grid"
                label="Constraseña"
                type="Password"
              />
            </Grid>
          </Grid>
        </InputData>
        <CardDark>
          <div style={{ margin: "50% 9%" }}>
            <img src={Logo} alt="El Troquel" height="100" width="410" />
          </div>
        </CardDark>
        <div
          style={{ marginLeft: "38%", marginTop: "24%", position: "absolute" }}
        >
          <ThemedButton
            buttonSize="283px"
            variantType="contained"
            colorTheme="primary"
            nombre="Entrar"
          />
        </div>
      </CardLogIn>
      </div>
 
  );
}
