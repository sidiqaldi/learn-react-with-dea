import React, { useState } from 'react';
import { Button, Card, Modal } from 'react-bootstrap';

const Item = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <React.Fragment>

    <Card className="my-3 cursor-pointer" onClick={handleShow} style={{ width: '18rem', cursor: 'pointer'}}>
        <Card.Body>
          <Card.Title>{props.data.id} - {props.data.title}</Card.Title>
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.data.id} - {props.data.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.data.body}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

    </React.Fragment>
  )
}

export default Item