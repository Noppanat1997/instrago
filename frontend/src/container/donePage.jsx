import React, { useState, useEffect } from "react";
import NavBar from "../component/navbar";
import Card from "../component/card";
import axios from "axios";

const DonePage = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [tasks, setTasks] = useState([]);

  const fetchData = async () => {
    const res = await axios.get(`http://localhost:1000/api/tasks/done`);
    setTasks(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onUnDone = async (id) => {
    try {
      await axios.patch(`http://localhost:1000/api/tasks/${id}`, {
        isFinished: false
      });

      const newTasks = tasks.filter(ele => ele._id !== id);
      setTasks(newTasks);
    } catch (err) {
      console.log(err);
    }
  };

  const onDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:1000/api/tasks/${id}`);

      const newTasks = tasks.filter(ele => ele._id !== id);
      setTasks(newTasks);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="TodoPage">
      <NavBar />
      <h1 style={{ fontSize: "48px", margin: "0.5rem 0" }}>Done</h1>
      <div className="card-container">
        {tasks.length !== 0 ? tasks.map((ele, i) => (
          <Card
            mode={"done"}
            onUnDone={() => onUnDone(ele._id)}
            onDelete={() => onDelete(ele._id)}
            detail={ele}
            selected={selectedCard === i}
            key={i}
            onClick={() => setSelectedCard(i)}
          />
        )) : <p style={{ textAlign: "center" }}>You haven't done any task.</p>}
      </div>
    </div>
  );
};

export default DonePage;
