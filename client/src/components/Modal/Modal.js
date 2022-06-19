import React, {useState} from "react";
import {Modal, Button} from 'react-bootstrap';

export default function InfoModal() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        React is painful
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>React is painful</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, click a button below if you agree!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            I agree
          </Button>
          <Button variant="primary" onClick={handleClose}>
            I agree
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}