import React from 'react';

import Layout from '../../components/Layout';
import Input from '../../components/UI/Input';

import { Container, Form, Button, Row, Col } from 'react-bootstrap';

import { Login } from '../../actions';
import { useDispatch } from 'react-redux';

function Signin(props) {
    const dispatch = useDispatch();

    const userLogin = (e) => {
        e.preventDefault();

        const user = {
            email: 'xyz@gmail.com',
            password: 'abcxyz216'
        };

        dispatch(Login(user));
    };

    return (
        <>
            <Layout>
                <Container style={{marginTop: '50px'}}>
                    <Row>
                        <Col md={{span: 6, offset: 3}}>
                            <h1>Sign In</h1><br/><hr/><br/>
                            <Form onSubmit={userLogin}>
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