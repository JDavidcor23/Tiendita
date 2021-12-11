import React from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import '../styles/BarNav.css'

export const BarNav = () => {
    
    return (
        <div>
            <Navbar bg="white" expand="lg">
                <Container>
                    <Link style={{textDecoration: "none"}} to="/">
                    <Navbar.Brand className="logo" style={{color:"#FC462D"}}>La Tiendita</Navbar.Brand>
                    </Link>
                    <Link style={{textDecoration: "none"}} to="/">
                    <div className='content-select'>
                    <select name="ciudad">
                    <option value="volvo">Bogotá</option>
                    <option value="saab">Medellín</option>
                    <option value="opel">Pasto</option>
                    <option value="audi">Cali</option>
                    </select>
                    </div>
                    
                    </Link>
                    <div>
                        <Nav id="btns" className="me-auto" >
                            <Link to="/carrito">
                            <Button variant=" mx-2" style={{backgroundColor: "#0ac763", color:'white'}}> <FontAwesomeIcon icon={faShoppingCart}/>  </Button>
                            </Link>
                        </Nav>
                        </div>
                </Container>
            </Navbar>
        </div>
    )
}