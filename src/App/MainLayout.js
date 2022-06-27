import React from "react";
import "./App.css";

function MainLayout({ children }) {
  return (
    <main className="App-main">
      <h1>TODO`s Machine</h1>
      {children}
    </main>
  );
}

export { MainLayout };
