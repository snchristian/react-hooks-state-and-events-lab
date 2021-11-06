import React from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import { useState } from 'react';

function App() {

  const [isToggled,setToggled]= useState(false);
  
  function toggled(){
    setToggled(!isToggled)
  }
  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const appClass = isToggled ? "App dark" : "App light"

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={toggled}>Dark Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
