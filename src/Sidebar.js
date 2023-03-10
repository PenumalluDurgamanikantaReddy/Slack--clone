import React, { useState,useEffect } from 'react'
import "./sidebar.css"
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import CreateIcon from '@mui/icons-material/Create';
import SidebarOptions from './SidebarOptions';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import InboxIcon from '@mui/icons-material/Inbox';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import PeopleIcon from '@mui/icons-material/People';
import AppsIcon from '@mui/icons-material/Apps';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import db from './firebase';
import { collection, onSnapshot } from "firebase/firestore";
import { useContextDATA } from './store/UserContext';


function Sidebar() {
const [channels,Setchannels]=useState([])
const [{user}]=useContextDATA()
useEffect(() => {
  const channelsCollection = collection(db, "Channels");
  const unsubscribe = onSnapshot(channelsCollection, (snapshot) => {
    Setchannels(snapshot.docs.map((doc) => ({
      id: doc.id,
      name: doc.data().name,
    })))
    // const channelsData = snapshot.docs.map((doc) => ({
    //   id: doc.id,
    //   name: doc.data().name,
    // }));            
    // Setchannels(channelsData);
  });
  return unsubscribe;
}, []);
  return (
    <div className='sidebar'>
      <div className='sidebar__user'>
      <div className='sidebar__userinfo'>
      <h2>Front End Dev</h2>
      <h3><FiberManualRecordIcon/> {user?.displayName}</h3>   
      </div>
      <CreateIcon/>

      </div>
      <SidebarOptions Icon={InsertCommentIcon} title={"threads"}/>
      <SidebarOptions Icon={InboxIcon} title={"Inbox"}/>
      <SidebarOptions Icon={BookmarkBorderIcon} title={"Bookmark"}/>
      <SidebarOptions Icon={PeopleIcon} title={"People"}/>
      <SidebarOptions Icon={AppsIcon} title={"Apps"}/>
      <SidebarOptions Icon={FileCopyIcon} title={"FileCopy"}/>
      <SidebarOptions Icon={ExpandLessIcon} title={"ExpandLess"}/>
      <hr/>
      <SidebarOptions Icon={ExpandMoreIcon}   title={"Channels"}/>
      <hr/>
      <SidebarOptions Icon={AddIcon} AddChannel  title= {"Add Channel"}  />
      <hr/>
      {channels.map(channel => (<SidebarOptions id={channel.id} key={channel.id} title={channel.name}/>))}
    </div>
  )
}

export default Sidebar
