

import React from "react"
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'
import Link from "./Link";

export default function Sidebar(props) {
    return (
        <Navbar sticky="top" collapseOnSelect expand="lg" bg="white" variant="light">
            <style jsx>{`
            .selected {
               color:blue;
               font-weight:bolder
            },
            navbar-nav .jsx-2752944551{
                padding:0 20px;
                color:black
            }
            .bg-light{
                background-color:#fff
            }
            `}</style>
            <Navbar.Brand href="#">
                    <strong>
                        World Covid19</strong>
                </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#">
                        <Link className="nav-link" href="/">
                            <a>Home</a>
                        </Link>
                    </Nav.Link>
                    <Nav.Link href="#">
                        <Link className="nav-link" href="/who"><a>WHO News</a></Link>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>

    )
}
