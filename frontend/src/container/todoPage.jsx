import React, { useState } from "react";
import NavBar from "../component/navbar";
import Card from "../component/card";

const TodoPage = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const mock = [{
    taskName: "🍔 Dinner",
    time: "2020-10-30T20:00"
  }, {
    taskName: "🎮 Play Game",
    time: "2020-10-30T21:00"
  }, {
    taskName: "📚 Study",
    time: "2020-10-30T22:00"
  }]

  return (
    <div className="TodoPage">
      <NavBar />
      <h1 style={{ fontSize: "48px", margin: "0.5rem 0" }}>Todo</h1>
      <div className="card-container">
        {mock.map((ele, i) => <Card mode={"default"} detail={ele} selected={selectedCard === i} key={i} onClick={() => setSelectedCard(i)} />)}
      </div>
    </div>
  );
};

export default TodoPage;
