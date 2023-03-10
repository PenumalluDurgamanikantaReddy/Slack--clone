import React from 'react'
import "./message.css"
function Message({usermsg,username,userimg,timestamp}) {
  const datestore=new Date(timestamp?.seconds * 1000 + timestamp?.nanoseconds / 1000000).toUTCString()
  return (
    <div className='message'>
      <img src={userimg}/>
      <div className='msg__data'>
      <h4>{username}  <span className='message__time'>{datestore}</span>   </h4>
      <p>{usermsg}</p>
      </div>
    </div>
  )
}

export default Message;
