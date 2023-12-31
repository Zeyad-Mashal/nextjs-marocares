import React from "react";
import './imageList.css';

const Card = ({ imageUrl, text }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt="Card Image" width="115" height="65"/>
      <p>{text}</p>
    </div>
  );
};

export default Card;
