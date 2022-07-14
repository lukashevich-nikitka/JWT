import React, { useState } from "react";

function AdminApp() {
  const [adminData, setAdminData] = useState({});
  return <div>{`Hello, ${adminData.role} ${adminData.name} ${adminData.surname}`}</div>;
}

export default AdminApp;