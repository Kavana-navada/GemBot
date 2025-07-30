import React from "react";
import "./Main.css";
import { assets } from "../../assets/assets";
function Main() {
  return (
    <div className="main">
      <div className="nav">
        <p>GemBot</p>
        <img src={assets.user_icon} alt="profile" />
      </div>
      <div className="main-container">
        <div className="greet">
          <p>
            <span>Hello,</span>
          </p>
          <p>How can I help you today?</p>
        </div>
      
      <div className="cards">
        <div className="card">
          <p>Suggest beautiful places to see on an upcoming trip</p>
          <img src={assets.compass_icon} alt="" />
        </div>

        <div className="card">
          <p>Briefly summarize this concept: urban planning </p>
          <img src={assets.bulb_icon} alt="" />
        </div>

        <div className="card">
          <p>Brainstrom team bonding activities for our work retreat </p>
          <img src={assets.mic_icon} alt="" />
        </div>

        <div className="card">
          <p>Improve the readability of the following code </p>
          <img src={assets.code_icon} alt="" />
        </div>
      </div>
      <div className="main-bottom">
        <div className="search-box">
            <input type="text" placeholder="Enter a prompt here" />
            <div>
                <img src={assets.gallery_icon} alt="" />
                <img src={assets.mic_icon} alt="" />
                <img src={assets.send_icon} alt="" />
            </div>
        </div>
        <p className="bottom-info">
            Information goes here
        </p>
      </div>
      </div>
    </div>
  );
}

export default Main;
