import React, { useState, useEffect } from "react";
import NavBar from "../component/navbar";
import Card from "../component/card";
import axios from "axios";
import { useHistory } from "react-router-dom";

const TodoPage = () => {
  const history = useHistory();
  const [selectedCard, setSelectedCard] = useState(null);
  const [tasks, setTasks] = useState([]);

  const fetchData = async () => {
    const res = await axios.get(`http://localhost:1000/api/tasks/todo`);
    setTasks(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onEdit = (id) => {
    history.push(`/edit/${id}`);
  };

  const onDone = async (id) => {
    try {
      await axios.patch(`http://localhost:1000/api/tasks/${id}`, {
        isFinished: true
      });

      const newTasks = tasks.filter(ele => ele._id !== id);
      setTasks(newTasks);
    } catch (err) {
      console.log(err);
    }
  }

  const onDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:1000/api/tasks/${id}`);

      const newTasks = tasks.filter(ele => ele._id !== id);
      setTasks(newTasks);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="TodoPage">
      <h1 style={{ fontSize: "48px", margin: "0.5rem 0" }}>Todo</h1>
      <div className="card-container">
        {tasks.length !== 0 ? tasks.map((ele, i) => (
          <Card
            mode={"default"}
            onDone={() => onDone(ele._id)}
            onEdit={() => onEdit(ele._id)}
            onDelete={() => onDelete(ele._id)}
            detail={ele}
            selected={selectedCard === i}
            key={i}
            onClick={() => setSelectedCard(i)}
          />
        )) : <p style={{ textAlign: "center" }}>Hooray! You have no more task todo.</p>}
      </div>
    </div>
  );
};

export default TodoPage;
