import React, { useState } from 'react';
import Layout from '../../components/Layout';
import Input from '../../components/UI/Input';

import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { UserSignup } from '../../actions';
import { Redirect } from 'react-router-dom';

function Signup(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [error, setError] = useState();
    const user = useSelector(state => state.user);
    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();

    if(auth.authenticate) {
        return <Redirect to='/' />
    }

    const userSignup = (e) => {
        e.preventDefault();
        const user = {
            firstName,
            lastName,
            email,
            password
        }

        dispatch(UserSignup(user));
    };

    const isNotValid = email === '' || password === '' || password.length <8 || password.length >16 || firstName === '' || lastName === '';

    return (
        <>
            <Layout>
                <Container style={{marginTop: '50px'}}>
                    <Row>
                        <Col md={{span: 6, offset: 3}}>
                            <p>{user.message}</p>
                            <h1>Sign Up</h1><br/><hr/><br/>
                            <Form onSubmit={userSignup}>
                                <Row>
                                    <Col md={6}>
                                        <Input lable="First Name" placeholder="First Name" value={firstName} type="text" onChange={(e) => setFirstName(e.target.value)} />
                                    </Col>
                                    <Col md={6}>
                                        <Input lable="Last Name" placeholder="Last Name" value={lastName} type="text" onChange={(e) => setLastName(e.target.value)} />
                                    </Col>
                                </Row>
                                <Input lable="Email" placeholder="Enter Email" value={email} type="email" onChange={(e) => setEmail(e.target.value)} />

                                <Input lable="Password" placeholder="Enter Password" value={password} type="password" onChange={(e) => setPassword(e.target.value)} />
                                
                                <Button variant="primary" type="submit" disabled={isNotValid}>
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