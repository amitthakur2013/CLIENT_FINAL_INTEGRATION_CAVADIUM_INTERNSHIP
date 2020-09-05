import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import swal from 'sweetalert';

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login=async(e) => {
    e.preventDefault()
    try{
    const data=await axios.post("http://localhost:3124/api/customer/login",{
      username,
      password
    },{
      withCredentials: true,
      headers:{
        'Content-Type': 'application/json'
      }
    })
      console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$")
      console.log(data)
      localStorage.setItem("user",JSON.stringify(data));
      window.location.reload(false);
  } catch(err) {
    swal({
        title: "Email/phone or Password does not match",
        text: "",
        icon: "error",
        button: "Close",
      });
  }
  
    
  }
  
  return (
    <Form>
      <Form.Group>
        {/* <Form.Group controlId="formBasicEmail"> */}
        <Form.Label>Email address</Form.Label>
        <Form.Control
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          placeholder="Enter email or phone"
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
        />
      </Form.Group>

      <Button onClick={(e) => login(e)} variant="primary" type="submit">
        Login
      </Button>
    </Form>
  );
};

export default LoginForm;
