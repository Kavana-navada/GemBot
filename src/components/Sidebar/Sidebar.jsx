import React from 'react'
import "./Sidebar.css"
import { assets } from '../../assets/assets'

function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="top">
            <img className='menu' src={assets.menu_icon} alt="menu"/>
            <div className="new-chat">
                <img src={assets.plus_icon} alt="add" />
                <p>New Chat</p>
            </div>

            <div className="recent">
                <p className="recent-title">
                    Recent
                </p>
                <div className="recent-entry">
                    <img src={assets.message_icon} alt="msg" />
                    <p>What is react...</p>
                </div>
            </div>
        </div>
        <div className="bottom">
            <div className="bottom-item recent-entry">
                <img src={assets.question_icon} alt="help" />
                <p>Help</p>
            </div>

            <div className="bottom-item recent-entry">
                <img src={assets.history_icon} alt=" history"/>
                <p>Activities</p>
            </div>

            <div className="bottom-item recent-entry">
                <img src={assets.setting_icon} alt="settings" />
                <p>Settings</p>
            </div>
        </div>

      
    </div>
  )
}

export default Sidebar
