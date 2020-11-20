import React from 'react';
import { Modal, Button } from 'react-bootstrap';

function NewModal(props) {
    return(
        <Modal show={props.show} onHide={props.handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>{props.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {props.children}
                <Button type="submit" variant="primary" onClick={props.handleClose}>Add</Button>
            </Modal.Body>
        </Modal>
    );
}

export default NewModal;