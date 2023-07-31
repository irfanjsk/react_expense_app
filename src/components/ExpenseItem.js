import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";
import "./ExpenseItem.css";
import { useState } from "react/cjs/react.production.min";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);
  const handleClick = () => {
    setTitle("Updated!.....");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2> {title} </h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
      <button onClick={handleClick}>Chnage Title </button>
    </Card>
  );
}

export default ExpenseItem;
