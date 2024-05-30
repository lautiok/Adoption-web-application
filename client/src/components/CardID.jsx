import React from "react";
import { Link } from "react-router-dom";

export const CardID = ({ id, image, description, age, gender, name }) => {
  return (
    <div key={id} className="cardid-container">
      <div className="cardid-image">
        <img src={image} alt={name} />
      </div>

      <div className="cardid-info">
        <h3>{name}</h3>
        <p>Edad {age}, Genero {gender}</p>
        <p>{description}</p>
        <Link className="cardid-button" to={`/formadopt/${id}`}>Adoptar</Link>
      </div>
    </div>
  );
};