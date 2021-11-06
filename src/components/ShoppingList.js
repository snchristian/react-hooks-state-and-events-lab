import React from "react";
import Item from "./Item";
import { useState } from 'react';

function ShoppingList({ items }) {
    const[categorys,setitems]=useState(items)
    const [filterby,setfilterby] = useState("All")
   
    function filterCategory(event){
      setfilterby(event.target.value)
    }
    const selectedCategory= categorys.filter((item)=>{
      if(filterby === "All"){
        return true;
      }
      else{
        return item.category === filterby;
      }
    })

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter"onChange={filterCategory}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {selectedCategory.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
