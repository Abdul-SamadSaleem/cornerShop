import React, { useState } from "react";
import UIfx from "uifx";
import "./Item.css";
import cash from "./cash.mp3";

const Item = props => {
  const beep = new UIfx(cash);

  const [itemCount, setItemCount] = useState(0);

  return (
    <div className="item">
      <h2>{itemCount}</h2>
      <img src={props.img} alt={props.alt} className="itemPic" />
      <h1 className="item__desc">{props.desc}</h1>
      <button
        onClick={() => {
          beep.play();
          setItemCount(itemCount + 1);
        }}
      >
        +
      </button>
    </div>
  );
};

export default Item;
