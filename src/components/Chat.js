
import React,{useEffect,useState} from 'react'
import "./chat.css"
import { collection, onSnapshot,docs,doc,query, orderBy } from "firebase/firestore";
import db from '../firebase';
import { useParams } from 'react-router-dom'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import Message from './Message';
import ChatInput from './ChatInput';
function Chat() {
    const {channelId}=useParams()
    const [roomDetails,SetroomDetails]=useState(null)
    const [allroomMsgs,SetallroomMsgs]=useState([])
    useEffect(() => {

        if (channelId) {
          const data = doc(db, "Channels", channelId);
          const unsubscribe = onSnapshot(data, (doc) => {
            SetroomDetails(doc.data());
          });
      }
const data= collection(db,"Channels",channelId,"messages")
const ascendingmessages=query(data,orderBy("timestamp","asc"))
const holdata=onSnapshot(ascendingmessages,((queysnapshot)=>{
const msgsdata=queysnapshot.docs.map((doc)=> doc.data())
SetallroomMsgs(msgsdata)
})
// 
)
// return ()=>holdata();
 }, [channelId]);

console.log(roomDetails)
console.log(allroomMsgs)
  return (
    <div className='chat'>
<div className='chat__header'>
      <div className='chat__headerleft'>
      <h4 className='Channel_Name'>#{roomDetails?roomDetails.name:"genereal"}  <StarBorderIcon/> </h4>
      </div>
      <div className='chat__headerright'><p><InfoOutlinedIcon/>Details</p></div>
      </div>
      <div className='chat__messages'>
      {
        allroomMsgs.map((eachmsg)=>{ return (
           <Message userimg={eachmsg.userimg} key={eachmsg.id} username={eachmsg.username} usermsg={eachmsg.usermsg} timestamp={eachmsg.timestamp}  />
        )})
      }
    
      </div>
   <ChatInput channelName={roomDetails?.name}  channelId={channelId}/>
    </div>
  )
}

export default Chat
