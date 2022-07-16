import React from 'react';

function AdminApp(props) {
  const { userParameters } = props;
  return <div>{`Hello, ${userParameters.role} ${userParameters.name} ${userParameters.surname}`}</div>;
}

export default AdminApp;
