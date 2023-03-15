import Inbox from "./Inbox";
import './options.css'
import React,{useState,useEffect} from 'react'
import { useSelector } from 'react-redux';
import Peoples from "./People";
const Options = () => {
  const optionSelected=useSelector((state)=>{ return state.viewmanage.optionSelected})
  const [inbox,Setinbox]=useState(false)
  const [People,SetPeople]=useState(false)
  const [Apps,SetApps]=useState(false)
  const channelView=useSelector((state)=>{ return state.viewmanage.channnelView})
useEffect(() => {
console.log(optionSelected)
  if(  optionSelected==="Inbox" ||  optionSelected==="threads"  ){
    SetApps(false)
    SetPeople(false)
    Setinbox(true)
    }
  if(optionSelected==="People"){
    SetApps(false)
    Setinbox(false)
    SetPeople(true)
  }
  if(optionSelected==="Apps"){
    Setinbox(false)
    SetPeople(false)
    SetApps(true)
  }
}, [optionSelected])
  return (
    <div className="option">
 {
  inbox&&
  <div  className="inbox">
  <Inbox/>
  </div>
 }

   {
    People&&
   <Peoples/>
   }
{
  Apps&&
  <h1>Apps</h1>
}
    
    </div>
  )
}

export default Options
