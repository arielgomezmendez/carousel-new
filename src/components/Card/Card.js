import React from "react";

const Card = ({ card }) => {
  return (
    <div className="card">
      <img src={card.image} alt={card.description} />
      <p>{card.description}</p>
    </div>
  );
};

export default Card;
