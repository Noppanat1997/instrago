import React, { useState } from "react";
import NavBar from "../component/navbar";
import Card from "../component/card";

const CreatePage = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const mock = {
    taskName: "🍔 Dinner",
    time: "2020-10-30T20:00"
  }

  return (
    <div className="CreatePage">
      <NavBar />
      <h1 style={{ fontSize: "48px", margin: "0.5rem 0" }}>Create</h1>
      <div className="card-container">
        <Card mode={"create"} detail={mock}/>
      </div>
    </div>
  );
};

export default CreatePage;