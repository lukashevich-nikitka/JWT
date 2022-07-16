/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from '@material-ui/core';
import UserApp from './components/UserApp';
import AdminApp from './components/AdminApp';
import ErrorModale from './components/ErrorModale';
import '../../styles/main-page.css';

function Main() {
  const [userParameters, setUserParameters] = useState({});
  const [userClick, setUserClick] = useState(false);
  const [adminClick, setAdminClick] = useState();
  useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    axios
      .get(`http://localhost:4200/api/get/${jwt}`)
      .then((res) => setUserParameters(res.data));
    const nav = document.querySelectorAll('a');
    nav.forEach((el) => el.className = 'display-out');
  }, []);
  const openUserPage = () => setUserClick(true);
  const openAdminPage = () => ((userParameters.role === 'admin') ? setAdminClick('click') : setAdminClick('error'));
  if (userClick) {
    return <UserApp userParameters={userParameters} />;
  } if (adminClick === 'click') {
    return <AdminApp userParameters={userParameters} />;
  } if (adminClick === 'error') {
    return <ErrorModale />;
  }
  return (
    <div className="main-page-wrapper">
      <div>{`Hello, ${userParameters.name} ${userParameters.surname}`}</div>
      <div>
        <Button type="submit" size="large" variant="outlined" onClick={openAdminPage}>
          Admin
        </Button>
        <Button type="submit" size="large" variant="outlined" onClick={openUserPage}>
          User
        </Button>
      </div>
    </div>
  );
}

export default Main;
