import React from "react";
import { v4 as uuid } from "uuid";

function ItemForm(props) {
  return (
    <form className="NewItem" onSubmit={props.onItemFormSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={props.itemName} onChange={props.handleItemName}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={props.onCategoryChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
