
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
function App() {
  // const [user, Setuser] = useState(null)
  const [{user},dispatch]    =     useContextDATA()
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
   <Chat/>
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
