import React from 'react';
import { Link } from 'react-router-dom';

export const Card = ({ image, text, _id, customContent }) => {
  return (
    <div className="card">
      <div className="image-container">
        <img src={image} alt="Dog" className="card-image" />
        {customContent ? customContent : <Link className="card-button" to={`/pets/${_id}`}>{text}</Link>}
      </div>
    </div>
  );
};
