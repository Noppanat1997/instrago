import React from "react";
import NavBar from "../component/navbar";
import Card from "../component/card";
import {useHistory} from "react-router-dom"
import axios from "axios"

const CreatePage = () => {
  const history = useHistory()

  async function  onSubmit(task,time) {
    await axios.post(`http://localhost:1000/api/tasks`, {
      task: task,
      time:  time
    })
    history.push("/")
  }

  return (
    <div className="CreatePage">
      <NavBar />
      <h1 style={{ fontSize: "48px", margin: "0.5rem 0" }}>Create</h1>
      <div className="card-container">
        <Card onSubmit={onSubmit} mode={"create"}/>
      </div>
    </div>
  );
};

export default CreatePage;