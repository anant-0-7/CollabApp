import React from 'react';
import "../../public/HomePage.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Greeting from "./Greeting";
import Button from 'react-bootstrap/Button';


function HomePage(){
    return (

        <div>
      <Greeting />
      <div className="btn-container">
        <Button variant="light" className="btn">Login</Button>
        <Button variant="light" className="btn">Signup</Button>
      </div>
    </div>

    )

}

export default HomePage