import React, { useState, useEffect } from "react";
import NavBar from "../component/navbar";
import Card from "../component/card";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";

const EditPage = () => {
  const history = useHistory();
  const { id } = useParams();
  const [task, setTask] = useState(null);

  async function onSubmit(task, time) {
    await axios.patch(`http://localhost:1000/api/tasks/${id}`, {
      task: task,
      time: time,
    });
    history.push("/");
  }

  const fetchData = async () => {
    const res = await axios.get(`http://localhost:1000/api/tasks/${id}`);
    setTask(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="EditPage">
      <h1 style={{ fontSize: "48px", margin: "0.5rem 0" }}>Edit</h1>
      <div className="card-container">
        <Card onSubmit={onSubmit} mode={"edit"} detail={task} />
      </div>
    </div>
  );
};

export default EditPage;
