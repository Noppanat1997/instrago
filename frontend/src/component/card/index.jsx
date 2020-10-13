import React from "react";
import { useState } from "react";
import "./card.css";

const Card = ({ detail, selected, mode, onClick }) => {
  function currentDate() {
    const d = new Date()
    var month = "" + (d.getMonth() + 1)
    var day = "" + d.getDate()
    var year = d.getFullYear()

    if (day.length < 2) day = '0' + day
    if (month.length < 2) month = '0' + month

    return [year, month, day].join("-")
  }

  function currentTime() {
    const d = new Date()
    var hour = "" + d.getHours()
    var minute = "" + d.getMinutes()

    if (hour.length < 2) hour = '0' + hour
    if (minute.length < 2) minute = '0' + minute

    return [hour, minute].join(":")
  }

  return (
    <div className={selected ? "Card selected" : "Card"} onClick={onClick}>
      {mode === "create" || mode === "edit" ? <div className="container">
        <div className="info">
          <input className="task-input" type="text" placeholder="Todo..." defaultValue={detail ? detail.taskName : "Todo..."} required /><br />
          <input className="time-input" type="datetime-local" defaultValue={detail ? detail.time : currentDate() + "T" + currentTime()} min={currentDate() + "T" + currentTime()} required />
        </div>
        <div className="btn-group">
          <button title="Save" id="done"><i className="fas fa-check" /></button>
        </div>
      </div> : <div className="container">
          <div className="info">
            <h4 className="task">{detail.taskName}</h4>
            <p className="time">{new Date(detail.time).toLocaleString([], { dateStyle: 'long', timeStyle: 'short' })}</p>
          </div>
          {selected && <div className="btn-group">
            {mode !== "done" && <button title="Mark as Done" id="done"><i className="fas fa-check" /></button>}
            {mode === "default" && <button title="Edit Task" id="edit"><i className="fas fa-pen" /></button>}
            {mode === "done" && <button title="Undone Task" id="edit"><i className="fas fa-undo" /></button>}
            {(mode !== "create" || mode !== "edit") && <button title="Delete Task" id="del"><i className="fa fa-trash-alt" /></button>}
          </div>}
        </div>}

    </div>
  );
}

export default Card;