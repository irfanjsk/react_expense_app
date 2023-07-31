import React from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";
import "./ExpenseItem.css";
import { useState } from "react/cjs/react.production.min";

function ExpenseItem(props) {
  const [price, setPrice] = useState(100);
  const handlePriceClick = () => {
    setPrice(75);
  };

  const handleClick = () => {
    console.log("Clicked !!!!");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2> {props.title} </h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
      <button onClick={handleClick}>Change Title </button>
    </Card>
  );
}

export default ExpenseItem;
