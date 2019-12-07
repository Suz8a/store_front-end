import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import { MuiThemeProvider } from "@material-ui/core";
import { StylesProvider } from "@material-ui/styles";
import theme from "./theme";
import Build from "@material-ui/icons/Build";
import Recepcionista from "./layout/recepcionista";
import Taller from "./layout/taller";
import Admin from "./layout/admin";
import MainLogin from "./layout/main-login";
import { NotificationProvider } from "./components/notification.provider";

function App() {
  return (
    <StylesProvider injectFirst={true}>
      <MuiThemeProvider theme={theme}>
        <NotificationProvider>
          <BrowserRouter>
            <Switch>
              <Route path="/login" component={MainLogin} />
              <Route path="/recepcionist" component={Recepcionista} />
              <Route path="/admin" component={Admin} />
              <Route path="/workshop" component={Taller} />
            </Switch>
          </BrowserRouter>
        </NotificationProvider>
      </MuiThemeProvider>
    </StylesProvider>
  );
}

export default App;
