import React, { useState } from "react";

function UserApp() {
  const [userData, setUserData] = useState({});
  return <div>{`Hello, ${userData.role} ${userData.name} ${userData.surname}`}</div>;
}

export default UserApp;
