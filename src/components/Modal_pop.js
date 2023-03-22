import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import {
  
  Link
} from "react-router-dom";
const Modal_pop = () => {
  const [show, setShow] = useState(false);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const mystyle = {
    color: "white",
    backgroundColor: "black",
    padding: "10px",
    fontFamily: "Arial"
  };
  return (
    <div>
      <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Button style={mystyle} onClick={handleShow}>Apply For the job</Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header style={{ backgroundColor: "whitesmoke" }} closeButton>
          <Modal.Title ></Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <h7>Are You sure You want to proceed Further</h7>

     
      

        </Modal.Body>
        <Modal.Footer style={{ backgroundColor: "whitesmoke" }}>
        <Link as={Link} to='/Apply'>
      <Button variant="dark" type='submit'>
            Proceed
      </Button>
      </Link>
          
        </Modal.Footer>
      </Modal>
    </div>
    </div>
  )
}

export default Modal_pop
