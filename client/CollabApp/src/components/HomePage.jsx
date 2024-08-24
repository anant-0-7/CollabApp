import React from 'react';
import "../../public/HomePage.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Greeting from "./Greeting";
import Button from 'react-bootstrap/Button';
import {useNavigate} from "react-router-dom";


function HomePage(){
    const navigate = useNavigate();

    return (

        <div>
      <Greeting />
      <div className="btn-container">
        <Button variant="light" className="btn" onClick={() => navigate("/login")}>Login</Button>
        <Button variant="light" className="btn" onClick={() => navigate("signup")}>Signup</Button>
      </div>
    </div>

    )

}

export default HomePage