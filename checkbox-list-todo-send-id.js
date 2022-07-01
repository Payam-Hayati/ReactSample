import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import "./Content.css";

export default function Content() {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: false,
      item: "One half pound bag of Cocoa Covered Almonds",
    },
    {
      id: 2,
      checked: true,
      item: "Item 2",
    },
    {
      id: 3,
      checked: false,
      item: "Item 3",
    },
  ]);


  const handlechange = (id) => {
    console.log(id);
    const listItems = items.map((itm) => (itm.id === id ? {...itm, checked: !itm.checked} : itm));
    setItems(listItems);
  }

  return (
    <div className="main">
      <ul>
        {items.map((itm) => (
          <li className="item" key={itm.id}>
            <input type="checkbox" checked={itm.checked} onChange={() => {handlechange(itm.id)}} />
            <label>{itm.item}</label>
            <FaTrashAlt role="button" tabIndex="0" />
          </li>
        ))}
      </ul>
    </div>
  );
}
