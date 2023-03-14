import React, { useState } from "react";
import "./Carousel.css";
import { pictures } from "./Data";
import { useEffect } from "react";
function Carousel() {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(null);
  useEffect(() => {
    setTimeout(() => {
      slideRight();
    }, 2500);
  });

  const slideRight = () => {
    setCurrent(current === pictures.length - 1 ? 0 : current + 1);
  };

  const slideLeft = () => {
    setCurrent(current === 0 ? pictures.length - 1 : current - 1);
  };
  return (
    <div className="carousel">
      <div className="carousel_wrapper">
        {pictures.map((image, index) => {
          return (
            <div
              key={index}
              className={
                index === current
                  ? "carousel_cards carousel_cards-active"
                  : "carousel_cards"
              }
            >
              <img
                className="card_image"
                src={image.Pictures}
                alt="image_here"
              />
              <div className="card_overlay"></div>
            </div>
          );
        })}
        {/* <div className="carousel_arrow_left" onClick={slideLeft}>
          &lsaquo;
        </div>
        <div className="carousel_arrow_right" onClick={slideRight}>
          &rsaquo;
        </div> */}
      </div>
    </div>
  );
}

export default Carousel;
