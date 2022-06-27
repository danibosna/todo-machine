import React from "react";
import task from "../assets/images/clipboard_task_list_rtl_regular_icon_203753.svg";
import newTask from "../assets/images/1486395885-plus_80605.svg";
import "./TodosEmty.css";

function TodosEmty() {
  return (
    <React.Fragment>
      <h2>It`s Time to Create a New Task</h2>
      <figure>
        <img src={task} alt="" />
      </figure>
      <div className="EmtyText">
        <p>Press</p>
        <img src={newTask} />
        <p>to Add a New Task.</p>
      </div>
    </React.Fragment>
  );
}

export { TodosEmty };
