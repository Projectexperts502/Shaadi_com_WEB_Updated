/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import "./ChatBox.css"

const ChatBox = () => {

    const [showChatBox, setShowChatBox] = useState(true)

    const handleChatBox = () => {
        setShowChatBox(!showChatBox)
    }

    return (
        <div className="chat_box" style={{ height: showChatBox == false ? "auto" : 500 }}>
            <div className="chat_box_header"  onClick={handleChatBox}>
                Chat Box
            </div>
        </div>
    )
}

export default ChatBox