import React, { useState, useEffect } from "react";
import axios from "axios";
import UserApp from "./components/UserApp";
import AdminApp from "./components/AdminApp";

function Main() {
    const [role, setRole] = useState('');
    useEffect(() => {
        const jwt = localStorage.getItem('jwt');
        console.log(jwt);
    }, [])
    return (
        <div>Here!</div>
    )
}

export default Main;