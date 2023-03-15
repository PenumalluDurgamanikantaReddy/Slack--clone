import React from 'react'
import { useHistory } from 'react-router-dom'
import db from './firebase'
import "./sidebaroptions.css"
import { getFirestore, collection, getDocs, addDoc } from 'firebase/firestore';
import { async } from '@firebase/util';
import { useDispatch } from 'react-redux';
import { reduxActions } from './store/ReduxStore';
function SidebarOptions(props) {
  let Icon  = props.Icon
  let title=props.title
  let addChannel=props.AddChannel
let id=props.id
const dispatch=useDispatch()
const history=useHistory()
  const selectChannel=()=>{
  if(id){
    dispatch(reduxActions.SelectChannel(true))
history.push(`/channels/${id}`)

  }
  else{
    // history.push(`/channels/${title}`)
    // dispatch
    dispatch(reduxActions.Selectoption(false))
    history.push(title)

  }
  }

const addnewChannel= async()=>{
const channelName=prompt("Enter the New Channel Name")
    if(channelName){
    //  db.collection('Channels').add({
    //   name:channelName
    //  })
    try{
      const newdoc= await addDoc(collection(db,"Channels"),{
        name:channelName
      })
    }
    catch{

    }
    } 

}

  return (
    <div className='sidebaroption' onClick={addChannel? addnewChannel : selectChannel}>
      {Icon && <Icon className="sidebaroption__icon"/>}
      {Icon ? <h3>{title}</h3> : <h3 className='sidebaroption__channel'> <span ># {addChannel?addChannel:title}   </span></h3>}
    </div>
  )
}

export default SidebarOptions;
