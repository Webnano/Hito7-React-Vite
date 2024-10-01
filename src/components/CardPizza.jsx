import React, { useContext } from "react";
import { Card, Button } from "react-bootstrap";
import { CartContext } from "../context/CartContext";
import { formatNumber } from "../components/CambioM";
import "/src/CardPizza.css";

export const CardPizza = ({ id, name, price, ingredients, img, desc }) => {
  const { addToCart } = useContext(CartContext);



  const createCart = (id, pizzaName, pizzaImg, pizzaPrice) => {

    const newElementCart = {
      id,
      pizzaName,
      pizzaImg,
      pizzaPrice,
      quantity: 1,
    };
    addToCart(newElementCart);
  };
  return (
    <div>
      <Card >
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <hr />
          <div className="d-flex justify-content-center fs-6">
            <Card.Text>
              <strong>Ingredientes: 🍕</strong>
            </Card.Text>  
          </div>
          <ul className="list-group list-group-flush">
            {ingredients?.map((ingredients, id) => (
              <li key={id} className="list-group-item text-center">
                {ingredients}
              </li>
            ))}
          </ul>
          <hr />
          <div className="d-flex justify-content-center">
            <strong>Precio: ${formatNumber(price)}</strong>
          </div>
          <div className="d-flex justify-content-between p-3">
            <Button className="border" variant="light">
              Ver más 👀
            </Button>
            <Button
              variant="dark"
              onClick={() => createCart(id, name, img, price)}
            >
              Añadir 🛒
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardPizza;