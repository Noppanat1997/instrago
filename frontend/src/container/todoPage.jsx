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

  const onDone = async (id,index) =>{
    try{
      await axios.patch(`http://localhost:1000/api/tasks/${id}`, {
        isFinished: true
      });
      
      const newTasks = tasks
      setTasks(newTasks.splice(index,1))
    } catch(err) {
      console.log(err)
    }
  }

  return (
    <div className="TodoPage">
      <NavBar />
      <h1 style={{ fontSize: "48px", margin: "0.5rem 0" }}>Todo</h1>
      <div className="card-container">
        {tasks.map((ele, i) => (
          <Card
            mode={"default"}
            onDone={()=>onDone(ele._id,i)}
            onEdit={()=>onEdit(ele._id)}
            detail={ele}
            selected={selectedCard === i}
            key={i}
            onClick={() => setSelectedCard(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoPage;
