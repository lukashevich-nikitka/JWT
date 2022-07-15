import React from "react";

function AdminApp(props) {
  return <div>{`Hello, ${props.userParameters.role} ${props.userParameters.name} ${props.userParameters.surname}`}</div>;
}

export default AdminApp;