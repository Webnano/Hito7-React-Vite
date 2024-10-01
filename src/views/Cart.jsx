import React, { useContext } from "react";
import { Container, Card, Button } from "react-bootstrap";
import { formatNumber } from "../components/CambioM";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartItems, addToCart, decreaseQuantity, calculateTotal } = useContext(CartContext);
  const { total } = useContext(CartContext) || {};

  return (
    <Container className="d-flex justify-content-center align-items-center mt-5">
      <Card border="solid" style={{ width: "30rem" }}>
      <Card.Body className="d-flex flex-column justify-content-center align-items-center">
          <Card.Title className=" text-center pb-3 pt-3">
            <h1><b>Carrito:</b></h1>
            </Card.Title>
          {cartItems.length === 0 ? (
          <p>Tu carrito está vacío</p>
          ) : (
          <Card.Body className="d-flex flex-column justify-content-center align-items-center">
          <ul>
            {cartItems.map((pizza) => (
              <li key={pizza.id}>
                <img className="mb-3" style={{ width: "300px" }} src={pizza.pizzaImg} alt={pizza.pizzaName} />
                <div>
                  <span d-flex gap-3 align-items-center>
                    {pizza.pizzaName} (x{pizza.quantity})
                  </span>
                  <span>{pizza.pizzaPrice * pizza.quantity}</span>
                  <div>
                    <button className="btn btn-danger"   onClick={() => decreaseQuantity(pizza.id)}>-</button>
                   
                    <button className="btn btn-success" onClick={() => addToCart(pizza)}>+</button>
                  </div>
                  <p></p>
                </div>
              </li>
            ))}
          </ul>
          <h3><b>Total: {formatNumber(calculateTotal())} </b></h3>
          <h4>{formatNumber(total)}</h4>
          <Button className="btn btn-info" variant="outline-light"><Link to="/">Pagar</Link></Button>
        </Card.Body>
      )}
     </Card.Body>
      </Card>
    </Container>
  );
};

export default Cart;