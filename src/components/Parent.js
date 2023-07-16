import { useState } from "react";
import Child from "./Child";
import React from "react";

const Parent = () => {
  const itemsArr = [
    { item: "item1", price: "1$" },
    { item: "item2", price: "11$" },
    { item: "item3", price: "12$" },
  ];

  const [Items, setitemsArr] = useState(itemsArr);

  const [item, setItems] = useState("");
  const [price, setPrices] = useState("");

  const addItemsFunc = () => {
    if (price && item) {
      const newobj = {
        item: item,
        price: price,
      };

      setitemsArr([...Items, newobj]);
      setItems("");
      setPrices("");
    }
  };

  return (
    <div className="parent">
      <h1>parent</h1>
      <p>
        itemName:
        <input
          type="text"
          onChange={(event) => {
            setItems(event.target.value);
          }}
          value={item}
        />
      </p>
      {console.log(item, price, Items)}
      <p>
        itemPrice:
        <input
          value={price}
          type="number"
          onChange={(event) => {
            setPrices(event.target.value);
          }}
        />
        {console.log(price)}
      </p>
      <button onClick={addItemsFunc}>Add items</button>
      <Child items={{ Items: Items, setitemsArr: setitemsArr }} />
    </div>
  );
};
export default Parent;
