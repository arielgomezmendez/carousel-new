import React from "react";
import "./Card.css";

const Card = ({ card }) => {
  return (
    <div className="card">
      <div className="image-container">
        <img src={card.image} alt={card.description} />
      </div>
      <h3>{card.description}</h3>
    </div>
  );
};

export default Card;
