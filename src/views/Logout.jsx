import React from 'react'
import { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Logout = () => {
  const {logout} = useContext(AuthContext);
  return (
    <>
    <div style={{height: '50vh', textAlign: 'center', marginTop: '80px'}}>
        <h2> ¿Desea cerrar sesión? </h2>
        <NavLink to="/loggin"><Button variant= 'dark' onClick={logout} > Cerrar Aplicacion </Button></NavLink>
        
      </div>
      </>
  )
}

export default Logout