import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link, Route, Routes } from 'react-router-dom';
import Login from '../Auth/Login';

import SignUp from '../Auth/SignUp';


export default function Home() {
    const [auth, setAuth] = useState("");
    console.log(auth)
    // useEffect(()=>{

    // },[auth])
    return (
        // Nav bar 
        <div>



            <Navbar bg="primary" expand="lg">
                <Container fluid>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none" /><path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" /></svg>

                    <Navbar.Brand href="#" style={{ color: "white" }}>upGrad E-Shop</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success" style={{ color: "white" }}>Search</Button>

                        </Nav>
                        {auth === '' ?
                            <Form className="d-flex">
                                <Nav.Link href="#action1" style={{ color: "white" }}>Home</Nav.Link>
                                <Nav.Link href="#action2" style={{ color: "white" }}>Add Product</Nav.Link>
                                <Button onClick={() => setAuth("login")} variant="outline-success" style={{ color: "white", background: "red" }}>LOGOUT</Button>

                            </Form>
                            :
                            <Form className="d-flex">
                                <Nav.Link href="/login" style={{ color: "white" }}>
                                    LOGIN</Nav.Link>
                                <Nav.Link href="/signUp" style={{ color: "white" }}>SIGN UP</Nav.Link>
                            </Form>
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {/* routers  */}
            <Routes>

                <Route path='/login' element={<Login />}>

                </Route>
                <Route path='/signUp' element={<SignUp />}>

                </Route>
            </Routes>
        </div>
    )
}

export function login() {
    return (
        <>
            <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
            >
                <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                />
                <Button variant="outline-success" style={{ color: "white" }}>Search</Button>

            </Nav>
        </>
    )
}


export function signIn() {
    return (
        <div> <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
        >
            <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
            />
            <Button variant="outline-success" style={{ color: "white" }}>Search</Button>

        </Nav></div>
    )
}


