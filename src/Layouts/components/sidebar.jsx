import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import Link from './Link';

export default function Sidebar() {
  return (
    <Navbar
      sticky="top"
      collapseOnSelect
      expand="lg"
      bg="white"
      variant="light"
    >
      <style jsx>
        {`
          .selected {
            color: blue;
            font-weight: bolder;
          }
          ,
          navbar-nav .jsx-2752944551 {
            padding: 0 20px;
            color: black;
          }
          .bg-light {
            background-color: #fff;
          }
        `}
      </style>
      <Navbar.Brand href="/">
        <strong>World Covid19</strong>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#">
            <Link className="nav-link" href="/">
              Home
            </Link>
          </Nav.Link>
          <Nav href="#" />
          <Nav.Link href="#">
            <Link className="nav-link" href="/who">
              WHO News
            </Link>
          </Nav.Link>
          <Nav href="#" />
          <Nav.Link href="#">
            <Link className="nav-link" href="/feeds">
              Feeds
            </Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
