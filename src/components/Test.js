import React, { useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
function Test(props) {
  console.log(props);
  const [show, setShow] = useState(false);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  let history = useHistory();
  const verify = (event) => {
   
    const email = props.email; 
    const otp = event.target.otp.value;
    const store = {email,otp};
    console.log(store);
    axios.post("http://52.3.252.238:4000/employee/verify",store).then(response => {
      console.log(response);
      event.target.reset();
      window.alert("welcome")
      history.push("/Sign_in");
      
    })
    .catch(error => {
      console.log(error);
      window.alert("error")
    })
    handleClose();
  };
  return (
    <>
      
      <button type="submit" bg="dark" class="textCenter1" onClick={handleShow}>Register</button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>OTP Verification</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <h7>Your OTP is Sent Successfully to your Registered Email Id</h7>
<Form onSubmit={verify} method='POST'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Your OTP</Form.Label>
        <Form.Control type="integer" placeholder="Enter Your 4 digit Otp" name="otp" required />
        <Form.Text className="text-muted">
          Do not share your OTP with anyone else.
        </Form.Text>
      </Form.Group>
      <Button variant="dark">
        Resend OTP
      </Button>
      <Button variant="dark" type='submit'>
            Submit
      </Button>
</Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
    </>
  );
}


export default Test;