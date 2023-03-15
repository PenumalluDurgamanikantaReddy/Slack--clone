import React from 'react'
import "./login.css"
import Button from '@mui/material/Button';
import { auth,provider } from '../firebase';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { useContextDATA } from '../store/UserContext';
import { actionTypes } from '../store/Reducer';
function Login() {
  const [state,dispatch]=useContextDATA()
    const slackLogo="https://daily-dev-tips.com/ezoimgfmt/cdn.hashnode.com/res/hashnode/image/upload/v1647545127005/74GQszMw8.png?ezimgfmt=rs:380x380/rscb2/ngcb2/notWebP"
 
    const signinHandler=(event)=>{
        // event.preventDefault()
     signInWithPopup(auth, provider)
        .then((result)=>{
          console.log(result)
          dispatch({
            type:actionTypes.SET__USER,
            user:result.user
            })
        })
        .catch((error)=>{
           alert(error.message)
        })
  }
  
    return (
    <div className='login'>
      <div className='login__container'>
      <img src={slackLogo}/>
      <h1>Sign in to Slack</h1>
      <p>Aaron.slack.com</p>
      <Button onClick={signinHandler}>Sign In With Google</Button>
      </div>
    </div>
  )
}

export default Login
