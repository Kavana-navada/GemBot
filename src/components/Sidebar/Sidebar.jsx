import React, { useContext, useState } from "react";
import "./Sidebar.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";

function Sidebar() {
  const [extended, setExtended] = useState(false);
  const {onSent,prevPrompts,setRecentPrompt}=useContext(Context)

  const loadPrompt=async(prompt)=>{
    setRecentPrompt(prompt)
    await onSent(prompt)
    

  }

  return (
    <div className="sidebar">
      <div className="top">
        <img className="menu" onClick={()=>setExtended(prev=>!prev)} src={assets.menu_icon} alt="menu" />
        <div className="new-chat">
          <img src={assets.plus_icon} alt="add" />
          {extended && <p>New Chat</p>}
        </div>

        {extended && (
          <div className="recent">
            <p className="recent-title">Recent</p>
            {prevPrompts.map((item,index)=>{
              return (
                <div onClick={()=>loadPrompt(item)} className="recent-entry">
              <img src={assets.message_icon} alt="msg" />
              <p>{item.slice(0,18)}...</p>
            </div>

              )

            })}
            
          </div>
        )}
      </div>
      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img src={assets.question_icon} alt="help" />
          {extended && <p>Help</p>}
        </div>

        <div className="bottom-item recent-entry">
          <img src={assets.history_icon} alt=" history" />
          {extended && <p>Activities</p>}
        </div>

        <div className="bottom-item recent-entry">
          <img src={assets.setting_icon} alt="settings" />
          {extended && <p>Settings</p>}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
