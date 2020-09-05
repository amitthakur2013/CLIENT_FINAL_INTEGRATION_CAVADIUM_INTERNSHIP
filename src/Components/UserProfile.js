import React, { useState} from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import swal from 'sweetalert';
const UserProfile = () => {

  let user=JSON.parse(localStorage.getItem("user")).data;
  const [name, setName] = useState(user.name);
  const [DOB, setDOB] = useState(user.DOB);
  const [gender, setGender] = useState(user.gender);
  const [email, setEmail] = useState(user.email);
  const [phoneNumber, setPhoneNumber] = useState(user.phoneNo);
  const [oldPassword,setOldPassword]=useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword,setConfirmPassword]=useState("");
  //const [inviteCode, setInviteCode] = useState("");
  //const [referCode, setReferCode] = useState("");
  const updateProfile=(e) => {
    e.preventDefault();
    axios.put("http://localhost:3124/api/customer/my-account",{
      name
    },{withCredentials:true})
    .then((data)=>{
      localStorage.setItem("user",JSON.stringify(data));
      swal({
        title: "Updated Successfully!",
        text: "",
        icon: "success",
        button: "Close",
      });
    })
    .catch(err => console.log(err))
  }

  const showform=(e)=>{
    e.preventDefault();
    e.target.style.display="none";
    document.querySelector("#pass").style.display="";
  }

  const changePassword=(e) => {
    e.preventDefault();
    axios.put("http://localhost:3124/api/customer/changePassword",{
      oldPassword,
      newPassword,
      confirmPassword
    },{withCredentials:true})
    .then((resp)=>{
      if(resp.data.customer){
        if(resp.data.message.includes("Successfully")){
          swal({
            title: resp.data.message,
            text: "",
            icon: "success",
            button: "Close",
          });
        } else {
          swal({
          title: resp.data.message,
          text: "",
          icon: "error",
          button: "Close",
        });
        }
        
      }
      else{
        swal({
          title: resp.data,
          text: "",
          icon: "error",
          button: "Close",
        });
      }
      console.log(resp)
      //localStorage.setItem("user",JSON.stringify(data));
    })
    .catch(err => console.log(err))
  }

  return (
    <>
    <Form >
      <Form.Group controlId="formBasicEmail">
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Name"
            
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>DOB</Form.Label>
          <Form.Control
            value={DOB}
            onChange={(e) => setDOB(e.target.value)}
            type="text"
            placeholder="dob"
            disabled
          />
        </Form.Group>
        {
          //TODO add gender input field
        }
        <Form.Label>Email address</Form.Label>
        <Form.Control
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Enter email"
          disabled
        />
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Mobile</Form.Label>
        <Form.Control
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          type="number"
          placeholder="Phone number"
          disabled
        />
      </Form.Group>

      <Button onClick={(e) => updateProfile(e)} variant="primary" type="submit">
        Save
      </Button>
      {" "}
      <Button onClick={(e) => showform(e)} variant="primary" type="submit">
        Change Password
      </Button>
    </Form>
    <br/>
    
      <br/>

    <Form id="pass" style={{display:"none"}}>
      <Form.Group controlId="formBasicEmail">
          <Form.Label>Enter Old Password</Form.Label>
          <Form.Control
            onChange={(e) => setOldPassword(e.target.value)}
            type="password"
            placeholder="Old Password"
            
          />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Enter New Password</Form.Label>
          <Form.Control
            onChange={(e) => setNewPassword(e.target.value)}
            type="password"
            placeholder="New Password"
            
          />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            onChange={(e) => setConfirmPassword(e.target.value)}
            type="password"
            placeholder="Confirm Password"
            
          />
        </Form.Group>
       
      <Button onClick={(e) => changePassword(e)} variant="primary" type="submit">
        Change Password
      </Button>
    </Form>
    </>
  );
};

export default UserProfile;
