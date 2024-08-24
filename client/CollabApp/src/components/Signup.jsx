import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import "../../public/Form.css"

function BasicExample() {

    const[input, setInput] = useState({name: "", email: "", username: "", password: ""});

    function handleChange(event){
        setInput({...input, [event.target.name]: event.target.value});
    }

    function submit(e){
        e.preventDefault();
        axios.post('http://localhost:3000/user/register', {
            name: input.name,
            email: input.email,
            username: input.username,
            password: input.password
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
          <Form.Group className="mb-3">
            <Form.Label>Full Name</Form.Label>
            <Form.Control type="text" placeholder="Full Name" onChange = {handleChange} name = "name"/>

          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Email" onChange = {handleChange} name = "email" />

          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Username"  onChange = {handleChange} name = "username" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password"  onChange = {handleChange} name = "password"/>
          </Form.Group>

          <Button variant="primary" type="submit" onClick = {submit}>
            Signup
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default BasicExample;
