import React from "react";
import NavBar from "../component/navbar";

const ContactPage = () => {
  return (
    <div className="ContactPage">
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
          <h2>ฉันรัก ประเทศไทย</h2>
          <div style={{backgroundColor: "#c8c8c8", width: "25vw", height: "1px", margin: "1rem 0"}}></div>
          <p>Email : fishstop@todona.com</p>
          <p>Tel : 080-123-4567</p>
        </div>
        <div className="pic">
          <img src="https://images.unsplash.com/photo-1541647376583-8934aaf3448a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt="profile-pic"
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