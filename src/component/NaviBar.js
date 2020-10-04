import React from "react";
import "../style/navbar.css"
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const Navibar = () => {
    return (
        <>
            <header id="header">
                <Navbar bg="light" expand="lg" fixed="top" >
                    <Navbar.Brand href="#home">WLH</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#about">About</Nav.Link>
                            <Nav.Link href="#portfolio">Portfolio</Nav.Link>
                            <Nav.Link href="#skills">Skills</Nav.Link>
                            <Nav.Link href="#contact">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </header>
        </>
    )
}

export default Navibar