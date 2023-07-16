import React, { useState } from "react";

const Child = (props) => {
  const deleteItem = (index) => {
    props.items.Items.splice(index, 1);
    props.items.setitemsArr([...props.items.Items]);
  };
  return (
    <div>
      <h1>Child</h1>

      {props.items.Items.length > 0 &&
        props.items.Items.map((obj, index) => {
          return (
            <p>
              <span>item:{obj.item}</span> <span>prices:{obj.price}</span>
              <button
                onClick={() => {
                  deleteItem(index);
                }}
              >
                Remove
              </button>
            </p>
          );
        })}
    </div>
  );
};
export default Child;
