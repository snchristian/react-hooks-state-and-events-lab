import React from "react";
import { useState } from 'react';


function Item({ name, category }) {

 const [isAdded,setAdded]=useState(false);
function incart(){
  setAdded(!isAdded);
}

const carted = isAdded ? 'in-cart' : ""

  return (
    <li className={carted}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={incart}>{isAdded ? "Remove From Cart" : "Add To Cart"}</button>
    </li>
  );
}

export default Item;
