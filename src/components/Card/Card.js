import React from "react";
import "./Card.css";

const Card = ({ card }) => {
  return (
    <div className="card">
      <img src={card.image} alt={card.description} />
      <h3>{card.description}</h3>
    </div>
  );
};

export default Card;
