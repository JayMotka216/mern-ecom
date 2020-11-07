import React from 'react';

import { Jumbotron, Container } from 'react-bootstrap';

import Layout from '../../components/Layout';

function Home(props) {
    return (
        <>
        <Layout>
                <Jumbotron style={{margin: '5rem', background: '#fff'}} className="text-center">
                    <h1>Welcome to Admin Dashboard!</h1>
                </Jumbotron>
        </Layout>
        </>
    );
}

export default Home;