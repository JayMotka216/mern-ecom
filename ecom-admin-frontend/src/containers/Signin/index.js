import React, { useEffect, useState } from 'react';

import Layout from '../../components/Layout';
import Input from '../../components/UI/Input';

import { Container, Form, Button, Row, Col } from 'react-bootstrap';

import { isUserLoggedIn, Login } from '../../actions';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

function Signin(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState();
    const auth = useSelector(state => state.auth);

    const dispatch = useDispatch();

    useEffect(() => {
        if(!auth.authenticate){
            dispatch(isUserLoggedIn());
        }
    } ,[]);

    const userLogin = (e) => {
        e.preventDefault();

        const user = {
            email: email,
            password: password
        };

        dispatch(Login(user));
    };

    if(auth.authenticate) {
        return <Redirect to="/" />
    }

    const isNotValid = email === '' || password === '' || password.length <8 || password.length >16;

    return (
        <>
            <Layout>
                <Container style={{marginTop: '50px'}}>
                    <Row>
                        <Col md={{span: 6, offset: 3}}>
                            <h1>Sign In</h1><br/><hr/><br/>
                            <Form onSubmit={userLogin}>
                                <Input controlId="formEmail" lable="Email" placeholder="Enter Email" value={email} type="email" onChange={(e) => setEmail(e.target.value)} />

                                <Input controlId="formPassword" lable="Password" placeholder="Enter Password" value={password} type="password" onChange={(e) => setPassword(e.target.value)} />

                                <Button variant="primary" type="submit" disabled={isNotValid}>
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