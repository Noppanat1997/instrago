import React, { useState } from "react";
import NavBar from "../component/navbar";

const ContactPage = () => {
  return (
    <div className="ContactPage">
      <NavBar />
      <h1 style={{ fontSize: "48px", margin: "0.5rem 0" }}>Contact</h1>
      <div className="card-container"
        style={{
          backgroundColor: "white",
          borderRadius: "8px",
          padding: "2rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <div className="info">
          <h2 style={{marginBottom: "1rem"}}>James Client</h2>
          <p>Email : jame123@gmail.com</p>
          <p>Tel : 081-234-5678</p>
        </div>
        <div className="pic">
          <img src="https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png" alt="profile-pic"
          style={{
            borderRadius: "50%",
            width: "80px",
            height: "80px",
            backgroundColor: "#eaeaea",
            objectFit: "cover"
          }}
          />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;