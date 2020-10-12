import React from "react";
import { useState } from "react";
import "./card.css";

const Card = ({ detail, selected, mode, onClick }) => {
  return (
    <div className={selected ? "Card selected" : "Card"} onClick={onClick}>
      <div className="container">
        <div className="info">
          <h4 className="task">{detail.taskName}</h4>
          <p className="time">{detail.time}</p>
        </div>
        {selected && <div className="btn-group">
          {mode !== "done" && <button title="Mark as Done" id="done"><i className="fas fa-check" /></button>}
          {mode === "default" && <button title="Edit Task" id="edit"><i className="fas fa-pen" /></button>}
          {mode === "done" && <button title="Undone Task" id="edit"><i className="fas fa-undo" /></button>}
          {(mode !== "create" || mode !== "edit") && <button title="Delete Task" id="del"><i className="fa fa-trash-alt" /></button>}
        </div>}
      </div>
    </div>
  );
}

export default Card;