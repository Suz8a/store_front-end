import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router";

function ShowTheLocation() {
  var propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };
  const { match, location, history } = this.props;
  return <div>You are now at {location.pathname}</div>;
}

export default ShowTheLocation;
