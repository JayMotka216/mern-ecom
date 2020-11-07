import React from 'react';

import Layout from '../../components/Layout';
import Input from '../../components/UI/Input';

import { Container, Form, Button, Row, Col } from 'react-bootstrap';

function Signin(props) {
    return (
        <>
            <Layout>
                <Container style={{marginTop: '50px'}}>
                    <Row>
                        <Col md={{span: 6, offset: 3}}>
                            <Form>
                                <Input controlId="formEmail" lable="Email" placeholder="Enter Email" value="" type="email" onChange={() => {}} />

                                <Input controlId="formPassword" lable="Password" placeholder="Enter Password" value="" type="password" onChange={() => {}} />

                                <Button variant="primary" type="submit">
                                    Sign In
                                </Button>
                            </Form> 
                        </Col>
                    </Row>
                </Container>
            </Layout>
        </>
    );
}

export default Signin;