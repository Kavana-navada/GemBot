import React,{useContext} from "react";

import "./Main.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";
function Main() {
  const {  
    recentPrompt,
    showResult,
    loading,
    resultData,
    input,
    setInput,
    onSent}=useContext(Context);

    const handleInput=(e)=>{
      setInput(e.target.value)
    }
  return (
    <div className="main">
      <div className="nav">
        <p>GemBot</p>
        <img src={assets.user_icon} alt="profile" />
      </div>
      <div className="main-container">

        {!showResult?<>
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
        
        </>:<div className="result">
          <div className="result-title">
            <img src={assets.user_icon} alt="" />
            <p>
              {recentPrompt}
            </p>
          </div>
          <div className="result-data">
            <img src={assets.gemini_icon} alt="" />
            {loading?<div className="loader">
              <hr />
              <hr />
              <hr />

            </div>:<p dangerouslySetInnerHTML={{__html:resultData}}></p>
              }
            

            
          </div>
          
          </div>}
        
      <div className="main-bottom">
        <div className="search-box">
            <input onChange={handleInput} value={input} type="text" placeholder="Enter a prompt here" />
            <div>
                <img src={assets.gallery_icon} alt="" />
                <img src={assets.mic_icon} alt="" />
                <img  onClick={()=>onSent()} src={assets.send_icon} alt="" />
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
