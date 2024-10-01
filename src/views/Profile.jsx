import React from "react";
import { useContext } from "react";
import { Container, Card, Button, CardBody } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Profile = () => {
  const {logout} = useContext(AuthContext);
  return (
    <Container className="d-flex flex-column justify-content-center align-items-center" style={{ height: "80vh" }}>
      <div style={{ width: "75rem" }} className="d-flex justify-content-center flex-column align-items-center" >
            <h1>nano.medina@micorreo.cl</h1>
      </div>
      <NavLink to="/"><Button variant= 'dark' > Cerrar Seccion </Button></NavLink>       
            
    </Container>
  );
};

export default Profile;