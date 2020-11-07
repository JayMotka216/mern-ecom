import React from 'react';
import { Form } from 'react-bootstrap';

function Input(props) {
    return(<>
        <Form.Group controlId={props.controlId}>
            <Form.Label>{props.lable}</Form.Label>
            <Form.Control type={props.type} value={props.value} onChnage={props.onChnage} placeholder={props.placeholder} />
            <Form.Text className="text-muted">
                {props.errorMessage}
            </Form.Text>
        </Form.Group>
    </>);
}

export default Input;