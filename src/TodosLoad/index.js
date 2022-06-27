import React from "react";
import "./TodosLoad.css";

function TodosLoad() {
  return (
    <li className="LoadItem">
      <span className="LoadIcon-check"></span>
      <p className="LoadText">Loading...</p>
      <span className="LoadIcon-delete"></span>
    </li>
  );
}

export { TodosLoad };
