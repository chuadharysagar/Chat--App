import React from 'react'
import './ChatBox.css'
import assets from '../../assets/assets'


const ChatBox = () => {
   return (
      <div className='chat-box'>
         <div className="chat-user">
            <img src={assets.profile_img} alt="profile image" />
            <p>Richard Sanford <img className='dot' src={assets.green_dot} alt="active status" /></p>
            <img src={assets.help_icon} className="help" alt="" />
         </div>

         <div className='chat-msg'>
            <div className="s-msg">
               <p className="msg">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, doloribus?</p>
               <div>
                  <img src={assets.profile_img} alt="profile image" />
                  <p>3:40 PM</p>
               </div>
            </div>

            <div className="s-msg">
               <img className ='msg-img' src={assets.pic1} alt="" />
               <div>
                  <img src={assets.profile_img} alt="profile image" />
                  <p>3:40 PM</p>
               </div>
            </div>

            <div className="r-msg">
               <p className="msg" style={{userSelect:'none',hyphens:'auto'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, doloribus?
               </p>
               <div>
                  <img src={assets.profile_img} alt="profile image" />
                  <p>3:40 PM</p>
               </div>
            </div>

         </div>
         <div className="chat-input">
            <input type="text" placeholder='send a message' style={{caretColor:"yellow"}} />
            <input type="file" id='image' accept='image/png,image/png,image/jpeg' hidden />
            <label htmlFor="image">
               <img src={assets.gallery_icon} alt="gallery icon" />
            </label>
            <img src={assets.send_button} alt="send button" />
         </div>
      </div>
   )
}

export default ChatBox
