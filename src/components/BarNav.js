import React from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


export const BarNav = () => {
    
    return (
        <div>
            <Navbar bg="white" expand="lg">
                <Container>
                    <Link style={{textDecoration: "none"}} to="/">
                    <Navbar.Brand className="logo" style={{color:"#FC462D"}}>La Tiendita</Navbar.Brand>
                    </Link>
                    <div>
                        <Nav id="btns" className="me-auto">
                            <Link to="/form">
                            <Button variant=" mx-2" style={{color:"#black"}}>Gestionar Productos</Button>
                            </Link>
                            <Button variant=" mx-2"> <FontAwesomeIcon icon={faShoppingCart}/> Carrito</Button>
                        </Nav>
                        </div>
                </Container>
            </Navbar>
        </div>
    )
}