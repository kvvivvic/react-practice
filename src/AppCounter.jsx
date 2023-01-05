import React from "react";
import Counter from "./components/Counter";
import "./App.css";
import { useState } from "react";

const AppCounter = () => {
  const [count, setCount] = useState(0);
  const onClick = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div className="container">
      <div className="banner">
        Total Count: {count} {count > 10 ? "😿" : "🥴"}
      </div>
      <div className="counters">
        <Counter total={count} onClick={onClick} />
        <Counter total={count} onClick={onClick} />
      </div>
    </div>
  );
};

export default AppCounter;
