import React from "react";
import { useState } from "react";
import "./card.css";

const Card = ({ detail, selected, onClick }) => {
  return (
    <div className={selected ? "Card selected" : "Card"} onClick={onClick}>
      <div className="container">
        <div className="info">
          <h4 className="task">{detail.taskName}</h4>
          <p className="time">{detail.time}</p>
        </div>
        {selected && <div className="btn-group">
          <button title="Mark as Done" id="done"><i className="fas fa-check" /></button>
          <button title="Edit Task" id="edit"><i className="fas fa-pen" /></button>
          <button title="Delete Task" id="del"><i className="fa fa-trash-alt" /></button>
        </div>}
      </div>
    </div>
  );
}

export default Card;