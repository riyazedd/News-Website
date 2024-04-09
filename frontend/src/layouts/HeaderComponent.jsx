import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

export default function HeaderComponent() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" bg='dark' data-bs-theme="dark">
        <Navbar.Brand href="/" className='ms-5'>News Website</Navbar.Brand>
          <Nav className="me-auto" style={{fontSize:'18px',textUnderlineOffset: '10px'}}>
            <NavLink to="/" activeclassname="active" className="nav-link" style={({ isActive }) => ({
                textDecoration: isActive ? 'underline' :'none'
              })}>Home</NavLink>
            <NavLink to="/about" activeclassname="active" className="nav-link" style={({ isActive }) => ({
                textDecoration: isActive ? 'underline' :'none'
              })}>About</NavLink>
            <NavLink to="/contact" activeclassname="active" className="nav-link" style={({ isActive }) => ({
                textDecoration: isActive ? 'underline' :'none'
              })}>Contact</NavLink>
            <NavLink to="/news" activeclassname="active" className="nav-link" style={({ isActive }) => ({
                textDecoration: isActive ? 'underline' :'none'
              })}>News</NavLink>
            <NavLink to="/login" activeclassname="active" className="nav-link" style={({ isActive }) => ({
                textDecoration: isActive ? 'underline' :'none'
              })}>Login</NavLink>
            <NavLink to="/register" activeclassname="active" className="nav-link" style={({ isActive }) => ({
                textDecoration: isActive ? 'underline' :'none'
              })}>Register</NavLink>
          </Nav>
    </Navbar>
  );
}
