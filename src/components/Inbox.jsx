import Notification from "./Notification";
import db from "../firebase";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { collection, onSnapshot, getDocs } from "firebase/firestore";

const Inbox = () => {
  const [channels, setChannels] = useState([]);
  const [msgsindata,Setmsgs]=useState([])
  const [length,Setlength]=useState(1)
  const [sorted,Setsorted] =useState([])
  const roomData = [];
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "Channels"), (snapshot) => {
  
      snapshot.forEach(async (doc) => {
        const messagesRef = collection(doc.ref, "messages");
        const messagesSnapshot = await getDocs(messagesRef);
        const messagesData = messagesSnapshot.docs.map((doc) => doc.data());
        Setlength((prevstate)=>{
          return prevstate+1
              })
        roomData.push({
          id: doc.id,
          name: doc.data().name,
          messages: messagesData,
        });

      });
   
      setChannels(roomData);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    let msgsfromdata = [];
    for (let channel of channels) {
      let msgs = channel.messages;
      let id=channel.id
      console.log(msgs)
      console.log(id);
      msgs.map((msg) => {
        const datetime=new Date(msg.timestamp?.seconds * 1000 + msg.timestamp?.nanoseconds / 1000000).toUTCString()
        const datestore = new Date(
          msg.timestamp?.seconds * 1000 + msg.timestamp?.nanoseconds / 1000000
        );
      
        msgsfromdata.push({
          username: msg.username,
          id: id,
          channelname: channel.name,
          msgtext: msg.usermsg,
          time: datestore.getTime(),
          timetext:datetime
        });
      });
      console.log(channel);
    }
    let sortedmsgs = msgsfromdata.sort((a, b) => {
      let date1 = new Date(a.time).setHours(0, 0, 0, 0);
      let date2 = new Date(b.time).setHours(0, 0, 0, 0);
      if (date1 < date2) {
        return -1;
      } else if (date1 > date2) {
        return 1;
      } else {
        if (a.time < b.time) {
          return -1;
        } else if (a.time > b.time) {
          return 1;
        } else {
          return 0;
        }
      }
    });
    Setsorted(sortedmsgs.reverse());
  }, [channels,length]);

  return (
    <main>

    {
      sorted.map((eachmsg)=>{

        return(
          <Notification channelname={eachmsg.channelname} id={eachmsg.id}  username={eachmsg.username} msgtext={eachmsg.msgtext} time={eachmsg.timetext}/>
        )
      })
    }
    
    </main>
  );
};

export default Inbox;
