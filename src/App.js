
import './App.css';
import Header from './Header';
import Sidebar from "./Sidebar";
import { useState } from 'react';
import {BrowserRouter}  from "react-router-dom"
import { Route,Switch } from 'react-router-dom';
import { Fragment } from 'react';
import Chat from './components/Chat';
import Login from './components/Login';
import { useContextDATA } from './store/UserContext';
import { useSelector } from 'react-redux';
import Options from './components/Options';
function App() {
  // const [user, Setuser] = useState(null)
  const [{user},dispatch]    =     useContextDATA()
  const channelView=useSelector((state)=>{ return state.viewmanage.channnelView})
  return (
    <div className="App">
<BrowserRouter>
{!user?
 <Login/>
:
<Fragment>
  <Header/>
   <div className='app__body'>
   <Sidebar/>
  <Switch>
  <Route path="/channels/:channelId">
  {channelView&&
    <Chat/>
  }
  {
    !channelView&&
    <Options/>
  }
  </Route>
  <Route path="/">
<h1>Welcome</h1>
   </Route>
</Switch>
 </div>
 </Fragment>
 
}
 </BrowserRouter>
    </div>
  );
}

export default App;
