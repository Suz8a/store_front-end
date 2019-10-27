import React from "react";
import { CardLogIn, InputData, Text, CardDark } from "./styled";
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
    <div>
      <CardLogIn>
        <Text
          style={{
            fontFamily: "Roboto",
            letterSpacing: "1.34px",
            fontStyle: "Medium",
            fontSize: "15px/20px"
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
              <TextField id="input-with-icon-grid" label="Correo" />
            </Grid>
          </Grid>
          <Grid container spacing={1} alignItems="flex-end">
            <Grid item>
              <LockIcon style={{ color: "#9C9C9CDE" }} fontSize="small" />
            </Grid>
            <Grid item>
              <TextField id="input-with-icon-grid" label="Constraseña" />
            </Grid>
          </Grid>
        </InputData>
        <CardDark>
          <div style={{ margin: "50% 9%" }}>
            <img src={Logo} alt="El Troquel" height="100" width="410" />
          </div>
        </CardDark>
        <div style={{ marginLeft: "45%", marginTop: "25%", position:"absolute" }}>
        <StylesProvider injectFirst={true}>
      <MuiThemeProvider theme={theme}>
          <ThemedButton
            height="800"
            width="300"
            variantType="contained"
            colorTheme="primary"
            value="hola bb"
            text-align="center"
          />
      </MuiThemeProvider>
    </StylesProvider>
        </div>
      </CardLogIn>
    </div>
  );
}
