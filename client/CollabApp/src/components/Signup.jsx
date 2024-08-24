import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import "../../public/Form.css"
import { useDispatch } from 'react-redux';
import { userExists } from '../redux/reducers/auth.js';

function BasicExample() {
    const dispatch=useDispatch();
    const[input, setInput] = useState({name: "", email: "", username: "", password: ""});

    function handleChange(event){
        setInput({...input, [event.target.name]: event.target.value});
    }

    async function submit(e){
      const config={
        withCredentials:true,
        headers:{
            "Content-Type":"application/json",
        }
      };
        e.preventDefault();
        try{
            const {data}=await axios.post(`http://localhost:3000/user/register`,{username:input.username,password:input.password,name:input.name,email:input.email},config);
            dispatch(userExists(data.user));
            
        }
        catch(e){
            console.log(e);
              
        }
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
