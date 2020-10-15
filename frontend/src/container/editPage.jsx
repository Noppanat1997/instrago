import React, { useState } from "react";
import NavBar from "../component/navbar";
import Card from "../component/card";

const EditPage = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const mock = {
    taskName: "🍔 Dinner",
    time: "2020-10-30T20:00"
  }

  return (
    <div className="EditPage">
      <NavBar />
      <h1 style={{ fontSize: "48px", margin: "0.5rem 0" }}>Edit</h1>
      <div className="card-container">
        <Card mode={"create"} detail={mock}/>
      </div>
    </div>
  );
};

export default EditPage;
