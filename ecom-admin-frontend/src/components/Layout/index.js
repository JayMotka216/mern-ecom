import React from 'react';
import Header from '../Header';

import { Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import './style.css';

function Layout(props) {
    return (
        <>
            <Header />
            {props.sidebar ? <>
                <Container fluid>
                    <Row>
                        <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
                            <div className="sidebar-sticky pt-3">
                                <ul className="nav flex-column">
                                    <li className="nav-item sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 border-bottom">
                                        <a><NavLink exact to={`/`} >Home</NavLink></a>
                                    </li>
                                    <li className="nav-item sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 border-bottom">
                                        <a><NavLink to={`/category`} >Category</NavLink></a>
                                    </li>
                                    <li className="nav-item sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 border-bottom">
                                        <a><NavLink to={`/products`} >Products</NavLink></a>
                                    </li>
                                    <li className="nav-item sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 border-bottom">
                                        <a><NavLink to={`/orders`} >Orders</NavLink></a>
                                    </li>
                                </ul>

                                <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                                </h6>
                                <ul className="nav flex-column mb-2">
                                </ul>
                            </div>
                        </nav>

                        <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4" style={{paddingTop : '60px'}}>
                            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                                <h1 className="h2">{props.title}</h1>
                            </div>
                            {props.children}
                        </main>
                    </Row>
                </Container>
            </> : props.children}
        </>
    );
}

export default Layout;