import React, { useState } from "react";

export default function ToDoItem(props) {
  const [isClicked, setClicked] = useState(false);

  function handleClick() {
    setClicked((prevValue) => !prevValue);
  }

  return (
    <div>
      <input onClick={handleClick} type="checkbox" id={`${props.id}`}></input>
      <label className={isClicked ? "todo-decoration" : "none"} htmlFor={`${props.id}`}>{props.item}</label>
    </div>
  );
}