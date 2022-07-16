import React from 'react';

function UserApp(props) {
  const { userParameters } = props;
  return <div>{`Hello, ${userParameters.role} ${userParameters.name} ${userParameters.surname}`}</div>;
}

export default UserApp;
