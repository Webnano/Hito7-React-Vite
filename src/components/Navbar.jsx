import React, { useContext } from "react";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import { formatNumber } from "../components/CambioM";
import { Link, NavLink } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { AuthContext } from "../context/AuthContext";
import pizzaImg from "../img/pizzamia.png";

function NavbarA() {
  const { total } = useContext(CartContext);
  const { token } = useContext(AuthContext);
  console.log(token);

  const setActiveClass = ({ isActive }) =>
    isActive ? "text-info mt-2 pe-2 text-decoration-none" : "text-white mt-2 pe-2 text-decoration-none";

  return (
    <Navbar bg="dark" variant="dark">
      <Container className="d-flex justify-content-between align-items-center">
        <Nav className="d-flex align-items-center gap-2">
          <Navbar.Brand>
            <img src={pizzaImg} alt="pizza" className="pizza" />
          </Navbar.Brand>
          <Button className="btn-sm" variant="outline-light">
                <NavLink className={setActiveClass} to="/" >🍕Home</NavLink>
              </Button>
          {token ? (
            <>
              <Button className="btn-sm" variant="outline-light">
                <NavLink to="/Profile" className={setActiveClass}>🔓Profile</NavLink>
              </Button>
              <Button className="btn-sm" variant="outline-light">
                <NavLink to="/Logout" className={setActiveClass}>🔒Logout</NavLink>
              </Button>
            </>
          ) : (
            <>
             
              <Button className="btn-sm" variant="outline-light">
                <NavLink to="/Loggin" className={setActiveClass}>🔐Login</NavLink>
              </Button>
              <Button className="btn-sm" variant="outline-light">
                <NavLink to="/Register" className={setActiveClass}>🔐Register</NavLink>
              </Button>
             
              <Button className="btn-sm" variant="outline-info" style={{ marginLeft: "600px" }}>
                <NavLink to="/Cart" className={setActiveClass}>🛒Total: {formatNumber(total)}</NavLink>
              </Button>
          
              
            </>
          )}
        </Nav>
        
      </Container>
    </Navbar>
  );
}

export default NavbarA;