

import React from "react"
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'
import Link from "./Link";

export default function Sidebar() {
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
            <Navbar.Brand href="#"><strong>World Covid19</strong></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    {/* <Nav.Link href="#"> */}
                        <Link href="/">
                            <a>Home</a>
                        </Link>
                    {/* </Nav.Link> */}
                    {/* <Nav.Link href="#"> */}
                    <Link href="/who"><a>WHO News</a></Link>
                    {/* </Nav.Link> */}
                    {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown> */}
                </Nav>
                {/* <Nav>
                    <Link href="#deets"><a>covidIndia</a></Link>
                    <Link href="#memes"><a>
                        info</a>
                    </Link>
                </Nav> */}
            </Navbar.Collapse>
        </Navbar>
    )
}