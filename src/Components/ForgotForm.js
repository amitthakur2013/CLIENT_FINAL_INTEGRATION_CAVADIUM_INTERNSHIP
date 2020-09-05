import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import swal from 'sweetalert';

const ForgotForm = () => {
  const [email, setEmail] = useState("");

  const change=(e) => {
    e.preventDefault();
    axios.post("http://localhost:3124/api/customer/forgot-password",{email},{withCredentials:true})
    .then((resp)=>{
      if(resp.data.includes("@")){
        swal({
        title: "Email Sent",
        text: resp.data,
        icon: "success",
        button: "Close",
      });
      } else {
        swal({
        title: resp.data,
        text: "",
        icon: "error",
        button: "Close",
      });
      }
      
      //document.querySelector("#frm1").style.display="none";

    })
    .catch((err)=> {
      swal({
        title: "Something went wronng!",
        text: "",
        icon: "error",
        button: "Close",
      });
    })
    

  }

  return (
    
    <Form id="frm1">
      <Form.Group>
        {/* <Form.Group controlId="formBasicEmail"> */}
        <Form.Label>Email address</Form.Label>
        <Form.Control
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder="Enter email"
        />
        <Form.Text className="text-muted">
          Enter email associated to your account.
        </Form.Text>
      </Form.Group>


      <Button onClick={(e) => change(e)} variant="primary" type="submit">
        Proceed
      </Button>
    </Form>

    
  );
};

export default ForgotForm;
