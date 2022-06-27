import React from "react";
import errorImg from "../assets/images/error_web_development_website_webpage_icon_192824.svg";

function TodosError() {
  return (
    <React.Fragment>
      <figure>
        <img src={errorImg} alt="" />
      </figure>
      <p>Uuuppppsss... Parece que ha habido una falla en la Maquina</p>
    </React.Fragment>
  );
}

export { TodosError };
