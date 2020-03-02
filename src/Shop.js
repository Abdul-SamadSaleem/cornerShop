import React from "react";
import Item from "./Item";
import "./Shop.css";

const Shop = () => {
  return (
    <div className="shop">
      <Item
        img="https://images-na.ssl-images-amazon.com/images/I/51rL3TLtSGL._SL1500_.jpg"
        alt="quality air pods"
        desc="Quality Air Pods"
      />
      <Item
        img="https://i.pinimg.com/originals/70/f3/ae/70f3ae451a3f4b14e17068b79b113ef2.png"
        alt="cheap air pods"
        desc="Cheap Air Pods"
      />
      <Item
        img="https://cdn.shopify.com/s/files/1/0075/0459/2986/products/1_1200x1200_e2bf14f4-4ce0-4d0a-9af1-ea41ce815677_1200x1200.png?v=1579742538"
        alt="basic air pods"
        desc="Basic Air Pods"
      />
      <Item
        img="https://images-na.ssl-images-amazon.com/images/I/71HADnKWaJL._SY355_.jpg"
        alt="quality keyboard"
        desc="Quality Keyboard"
      />
      <Item
        img="https://previews.123rf.com/images/ajt/ajt1501/ajt150100022/35808423-burned-and-broken-computer-keyboard-isolated-on-white-background.jpg"
        alt="free keyboard"
        desc="Free Keyboard"
      />
      <Item
        img="https://i.pinimg.com/originals/25/24/96/252496a254a40a20343004864c22f5ef.jpg"
        alt="quality mouse"
        desc="Quality Mouse"
      />
      <Item
        img="https://images-na.ssl-images-amazon.com/images/I/61hcStMGUOL._SX679_.jpg"
        alt="1 million pound note"
        desc="1 Million Pounds"
      />
      <Item
        img="https://preview.redd.it/yo6kklbphlg01.png?auto=webp&s=b8c3ec324c6cb2765888b37b5a46cb206ae08f64"
        alt="Water Cooled PC"
        desc="Water Cooled P.C"
      />
      <Item
        img="https://yt3.ggpht.com/a/AGF-l79ee2K-jju14ExP-rfE3kFD07HPqoVS2zZA2A=s900-c-k-c0xffffffff-no-rj-mo"
        alt="Web Dev Simplified's Youtube Channel"
        desc="Web Dev Simplified's Youtube Channel"
      />
    </div>
  );
};

export default Shop;
