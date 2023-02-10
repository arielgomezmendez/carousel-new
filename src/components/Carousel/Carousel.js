import React, { useState } from "react";
import Card from "../Card/Card";
import { CSSTransition } from "react-transition-group";
import { cards } from "../Data/Data";
import "./Carousel.css";
import { useEffect } from "react";

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
        <button className="button-prev" onClick={handlePrev}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-chevron-left"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#2c3e50"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <polyline points="15 6 9 12 15 18" />
          </svg>
        </button>
        <button className="button-next" onClick={handleNext}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-chevron-right"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#2c3e50"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <polyline points="9 6 15 12 9 18" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Carousel;
