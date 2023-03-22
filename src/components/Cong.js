import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Image } from 'react-bootstrap';

import './Cong.css';
const Cong = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
  return (
    <div>
      <Button className='mt-3' variant="success" onClick={handleShow}>
      Hired
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton style={{backgroundColor: ' 	#009e60'}}>
          <Modal.Title className='text-center' >
            <div className='row' style={{backgroundColor: ' 	#009e60'}}>
            <h1 className='text-center'>Congratulations</h1>
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{backgroundColor: ' 	#F5F5F5'}} className='model'>
        <div id='picture'></div>

        </Modal.Body>
        <Modal.Footer style={{backgroundColor: ' 	#FFD300'}}>
          <Button variant="dark" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleClose} style={{backgroundColor: ' 	#009e60'}}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Cong
