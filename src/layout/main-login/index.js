import React from "react";
import Login from "../../components/login";
import { FirstBackgroundColor, SecondBackgroundColor } from "./styled";

function MainLogin() {
  return (
    <div>
      <FirstBackgroundColor />
      <SecondBackgroundColor />
      <Login />
    </div>
  );
}

export default MainLogin;
