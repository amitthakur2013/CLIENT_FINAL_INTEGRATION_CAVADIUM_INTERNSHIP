import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import swal from 'sweetalert';

const ResetForm=(props) => {
	const [confirmPassword, setConfirmPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const reset=(e) => {
  	e.preventDefault();
  	axios.post(`http://localhost:3124/api/customer/forgot_password/${props.match.params.token}`,{
  		newPassword,
  		confirmPassword
  	},{withCredentials:true})
  	.then((resp)=>{
  		console.log(resp);
  		if(resp.data.customer) {
  			swal({
        title: "Password Changed Successfully",
        text: "",
        icon: "success",
        button: "Close",
      });
  		props.history.push('/');	
  		} else {
  				swal({
        title: resp.data,
        text: "",
        icon: "error",
        button: "Close",
      });
  				
  		}	
  	})
  	.catch(err => {
  		swal({
        title: "Something went wrong!",
        text: "",
        icon: "error",
        button: "Close",
      });
  		props.history.push('/');
  		
  	});
  }

  return (
    <Form style={{paddingTop:"200px",position:"top"}}>
      <Form.Group>
        
        <Form.Label>New Password</Form.Label>
        <Form.Control
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          type="password"
          placeholder="Enter new Password"
        />
        
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          type="password"
          placeholder="Password"
        />
      </Form.Group>

      <Button onClick={(e) => reset(e)} variant="primary" type="submit">
        Reset
      </Button>
    </Form>
  );
}

export default ResetForm;