import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";
import { v4 as uuid } from "uuid";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const [search, setSearch] = useState("");

  const [foodList, setFoodList] = useState([...items]);
  const [itemName, setItemName] = useState("");
  const [itemCategory, setItemCategory] = useState("Produce")

  function handleAddListCatChange(event){
    setItemCategory(event.target.value);
  }

  function handleSubmit(event){
    event.preventDefault();
    const newItem = {id: uuid(), name: itemName, category: itemCategory,};
    //console.log(newItem);
    setFoodList([...foodList, newItem]);
    setItemName("");
    setItemCategory("Produce");
  }

  function handleItemName(event){
    setItemName(event.target.value);
  }

  function handleSearchChange(event){
    setSearch(event.target.value);
  }

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = foodList.filter((item) => {
    if (selectedCategory === "All") return item.name.includes(search);
    return (item.category === selectedCategory && item.name.includes(search));
  });

  return (
    <div className="ShoppingList">
      <ItemForm 
      onCategoryChange={handleAddListCatChange} 
      onItemFormSubmit={handleSubmit} 
      handleItemName={handleItemName} 
      itemName={itemName}
      />
      <Filter 
      onCategoryChange={handleCategoryChange} 
      search={search} 
      onSearchChange={handleSearchChange}
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
