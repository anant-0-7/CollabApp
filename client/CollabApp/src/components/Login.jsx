import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import "../../public/Form.css"

function BasicExample() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function handleUser(e){
        setUsername(e.target.value);
        console.log(username);
    }
    
    function handlePassword(e){
        setPassword(e.target.value);
        console.log(password);
    }

    function submit(e){
        e.preventDefault();
        axios.post('http://localhost:3000/user/login', {
            username: username,
            password: password
        })
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        });
    }


  return (
    <div className="form-container">
      <div className="form-wrapper">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control type="email" placeholder="Username" onChange = {handleUser} />

          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password"  onChange = {handlePassword}/>
          </Form.Group>
          <Button variant="primary" type="submit" onClick = {submit}>
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default BasicExample;
