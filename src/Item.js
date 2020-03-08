import React from "react";
import "./Item.css";

const Item = props => {
  return (
    <div className="item">
      <img src={props.img} alt={props.alt} className="itemPic" />
      <h1 className="item__desc">{props.desc}</h1>
      <button>+</button>
    </div>
  );
};

export default Item;
