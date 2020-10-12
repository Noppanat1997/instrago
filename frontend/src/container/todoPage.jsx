import React, { useState } from "react";
import NavBar from "../component/navbar";
import Card from "../component/card";
import "./todoPage.css";

const TodoPage = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const mock = [{
    taskName: "🍔 Dinner",
    time: "8:00 PM"
  }, {
    taskName: "🎮 Play Game",
    time: "9:00 PM"
  }, {
    taskName: "📚 Study",
    time: "10:00 PM"
  }]

  return (
    <div className="TodoPage">
      <NavBar />
      <h1>Todo</h1>
      <div className="card-container">
        {mock.map((ele, i) => <Card detail={ele} selected={selectedCard === i} key={i} onClick={() => setSelectedCard(i)}/>)}
      </div>
    </div>
  );
};

export default TodoPage;
