import React from 'react';

import { Container, Row } from 'react-bootstrap';

import Layout from '../../components/Layout';
import './style.css';

function Home(props) {
    return (
        <>
        <Layout>
            <Container fluid>
                <Row>
                    <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse sidebar">
                    <div className="sidebar-sticky pt-3">
                        <ul className="nav flex-column">
                        <li className="nav-item">
                            <a className="nav-link active" href="#">
                            <span data-feather="home"></span>
                            Dashboard <span className="sr-only">(current)</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                            <span data-feather="file"></span>
                            Orders
                            </a>
                        </li>
                        </ul>

                        <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                        <span>Saved reports</span>
                        <a className="d-flex align-items-center text-muted" href="#" aria-label="Add a new report">
                            <span data-feather="plus-circle"></span>
                        </a>
                        </h6>
                        <ul className="nav flex-column mb-2">
                        </ul>
                    </div>
                    </nav>

                    <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
                    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                        <h1 className="h2">Dashboard</h1>
                    </div>
                    <h2>Section title</h2>
                    </main>
                </Row>
            </Container>
        </Layout>
        </>
    );
}

export default Home;