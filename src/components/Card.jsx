import React from "react";
import PropTypes from "prop-types";
import "../styles/cards.css";

function Card({ title, image, text, url }) {
  return (
    <div className="card text-center bg-dark rounded-0 animate__animated animate__fadeInUp">
      <div className="overflow">
        <img src={image} className="card-img-top" />
      </div>
      <div className="card-body text-light">
        <h4 className="card-title">{title}</h4>
        <p className="card-text text-secondary">
          {text
            ? text
            : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,minus laudantium! Animi quis error voluptatibus quae reiciendis quasi,quos temporibus officia fugiat facere dignissimos ratione! Minima recusandae suscipit nisi esse."}
        </p>
        <a
          href={url}
          target="_blank"
          className="btn btn-outline-secondary rounded-0"
        >
          Go somewhere
        </a>
      </div>
    </div>
  );
}
// importamos prop-types que debemos instalarlo desde npm
Card.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  text: PropTypes.string,
  url: PropTypes.string,
};

export default Card;
