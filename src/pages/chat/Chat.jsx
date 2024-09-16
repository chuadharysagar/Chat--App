import React from 'react'
import './Chat.css'
import LeftSidebar from '../../components/LeftSideBar/LeftSidebar'
import ChatBox from '../../components/ChatBox/ChatBox'
import RightSideBar from '../../components/RightSideBar/RightSideBar'

const Chat = () => {
   return (
      <div className='chat'>
         <div className="chat-container">
            <LeftSidebar />
            <ChatBox />
            <RightSideBar />
         </div>
      </div>
   )
}

export default Chat
