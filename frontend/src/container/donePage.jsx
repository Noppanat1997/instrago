import React, { useState } from "react";
import NavBar from "../component/navbar";
import Card from "../component/card";

const DonePage = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const mock = [{
    taskName: "💪 Excercise",
    time: "2020-10-30T17:00"
  }]

  return (
    <div className="TodoPage">
      <NavBar />
      <h1 style={{ fontSize: "48px", margin: "0.5rem 0" }}>Done</h1>
      <div className="card-container">
        {mock.map((ele, i) => <Card mode={"done"} detail={ele} selected={selectedCard === i} key={i} onClick={() => setSelectedCard(i)} />)}
      </div>
    </div>
  );
};

export default DonePage;