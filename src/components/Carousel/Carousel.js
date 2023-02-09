import React, { useState } from "react";
import Card from "../Card/Card";
import { CSSTransition } from "react-transition-group";
import { cards } from "../Data/Data";
import "./Carousel.css";

const Carousel = () => {
  const [index, setIndex] = useState(0);
  const [show, setShow] = useState(true);

  const handleNext = () => {
    setTimeout(() => {
      setIndex(index === cards.length - 1 ? 0 : index + 1);
    }, 300);
    setShow(false);
    setTimeout(() => {
      setShow(true);
    }, 300);
  };

  const handlePrev = () => {
    setTimeout(() => {
      setIndex(index === 0 ? cards.length - 1 : index - 1);
    }, 300);
    setShow(false);
    setTimeout(() => {
      setShow(true);
    }, 300);
  };

  return (
    <section className="carousel-container">
      <CSSTransition in={show} timeout={3000} classNames="card-transition">
        <Card card={cards[index]} />
      </CSSTransition>
      <div className="buttons-container">
        <button onClick={handlePrev}>Prev</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </section>
  );
};

export default Carousel;
