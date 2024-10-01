import React from 'react';
import Header from '../components/Header';
import CardPizza from '../components/CardPizza';
import { useEffect, useState } from "react";


function Home() {
  const [pizzas, setPizzas] = useState([]);
  const getPizzas = async () => {
    const respuesta = await fetch("http://localhost:5000/api/pizzas");
    const pizzas = await respuesta.json();
    setPizzas(pizzas);
  };

  useEffect(() => {
    getPizzas();
  }, []);
  return (
    <div>
      <Header />
      <p></p>
      
      <div className="container mt-5">
        <div className="row">
          {pizzas.map((p) => (
            <div className="col-md-4 mb-4" key={p.id}>
              <CardPizza  
               img={p.img}
               ingredients={p.ingredients}
               name={p.name}
               price={p.price}
               isHome={true}
               id={p.id}            
              />
            </div>
          ))}
        </div>
      </div>
    </div>
    
  );
}


export default Home;
