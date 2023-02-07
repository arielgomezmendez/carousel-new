import React, { useState } from "react";
import Card from "../Card/Card";
import { CSSTransition } from "react-transition-group";

const Carousel = () => {
  const [index, setIndex] = useState(0);
  const cards = [
    {
      image: "https://picsum.photos/200",
      description: "Image 1",
    },
    {
      image: "https://picsum.photos/200",
      description: "Image 2",
    },
    {
      image: "https://picsum.photos/200",
      description: "Image 3",
    },
  ];

  const handleNext = () => {
    setIndex(index === cards.length - 1 ? 0 : index + 1);
  };

  const handlePrev = () => {
    setIndex(index === 0 ? cards.length - 1 : index - 1);
  };

  return (
    <div className="carousel-container">
      <CSSTransition in={true} timeout={500} classNames="card-transition">
        <Card card={cards[index]} />
      </CSSTransition>
      <div className="buttons-container">
        <button onClick={handlePrev}>Prev</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default Carousel;
