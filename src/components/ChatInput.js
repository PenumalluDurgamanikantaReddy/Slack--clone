import { Button } from '@mui/material'
import React,{useState} from 'react'
import "./chatinput.css"
import db from '../firebase'
import { collection,doc,getDocs,addDoc,serverTimestamp } from 'firebase/firestore'
import { useContextDATA } from '../store/UserContext'
function ChatInput(props) {
    const [input, Setinput] = useState()
const channelName=props.channelName;
const channelId=props.channelId;
const [{user}]=useContextDATA()

const inputMsgHandler=(event)=>{
    Setinput(event.target.value)
}

    const sendMsgHandler=(event)=>{
        event.preventDefault()

        if(channelId){
           const getchannel=collection(db,"Channels",channelId,"messages")
          addDoc(getchannel,{
             usermsg:input,
             userimg:user.photoURL,
             username:user.displayName,
             timestamp:serverTimestamp(),
             status:"unread"
          })
        }
    }
  return (

    <div className='chatinput'>
    <form>
       <input value={input} onChange={inputMsgHandler}  placeholder={`Message # ${channelName}`}/>
      
    <Button type='submit' onClick={sendMsgHandler}>Send</Button>
    </form>
    </div>
  
  )
}

export default ChatInput
