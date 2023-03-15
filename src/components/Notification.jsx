import "./notify.css"
import { useHistory } from "react-router-dom"
import { useDispatch } from 'react-redux';
import { reduxActions } from '../store/ReduxStore';
const  Notification=(props)=>{
const history=useHistory()
const id=props.id
const dispatch=useDispatch()
const totheChannelHanler=()=>{
   console.log(id)
   dispatch(reduxActions.SelectChannel(true))
    history.push(`/channels/${id}`)
}



return(
    <div className="notification__container__msgs" onClick={totheChannelHanler}>
    <main className="notification__text">
    <main><h4 className="notification__text__channelname">{props.channelname}</h4></main>
    <h4 className="notification__text__username">{props.username}</h4>
    <p className="notification__text__msgtext">{props.msgtext}......</p><p className="notification__text__time">{props.time}</p>
    </main>
    </div>

)

}

export default Notification;