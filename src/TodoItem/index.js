import React from "react";
import { XCircleIcon, CheckIcon } from "@heroicons/react/solid";
import "./TodoItem.css";

function TodoItem(props) {
  return (
    <li className="TodoItem">
      <CheckIcon
        className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
        onClick={props.onComplete}
      />
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>
      <XCircleIcon className="Icon Icon-delete" onClick={props.onDelete} />
    </li>
  );
}

export { TodoItem };
