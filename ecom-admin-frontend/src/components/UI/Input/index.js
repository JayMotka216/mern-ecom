import React from 'react';
import { Form } from 'react-bootstrap';

function Input(props) {
    return(<>
        <Form.Group>
            <Form.Label>{props.lable}</Form.Label>
            <Form.Control type={props.type} value={props.value} onChange={props.onChange} placeholder={props.placeholder} />
            <Form.Text className="text-muted">
                {props.errorMessage}
            </Form.Text>
        </Form.Group>
    </>);
}

export default Input;