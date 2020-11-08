import React from 'react';
import Layout from '../../components/Layout';
import Input from '../../components/UI/Input';

import { Container, Form, Button, Row, Col } from 'react-bootstrap';

function Signup(props) {
    return (
        <>
            <Layout>
                <Container style={{marginTop: '50px'}}>
                    <Row>
                        <Col md={{span: 6, offset: 3}}>
                            <h1>Sign Up</h1><br/><hr/><br/>
                            <Form>
                                <Row>
                                    <Col md={6}>
                                        <Input controlId="formFirstName" lable="First Name" placeholder="First Name" value="" type="text" onChange={() => {}} />
                                    </Col>
                                    <Col md={6}>
                                        <Input controlId="formLastName" lable="Last Name" placeholder="Last Name" value="" type="text" onChange={() => {}} />
                                    </Col>
                                </Row>
                                <Input controlId="formEmail" lable="Email" placeholder="Enter Email" value="" type="email" onChange={() => {}} />

                                <Input controlId="formPassword" lable="Password" placeholder="Enter Password" value="" type="password" onChange={() => {}} />
                                
                                <Button variant="primary" type="submit">
                                    Sign Up
                                </Button>
                            </Form> 
                        </Col>
                    </Row>
                </Container>
            </Layout>
        </>
    );
}

export default Signup;