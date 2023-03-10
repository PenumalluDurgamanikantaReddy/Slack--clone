import React from "react";
import "./Header.css"
// import {Avatar} from "@mui/icons-material"
import Avatar from '@mui/material/Avatar';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SearchIcon from '@mui/icons-material/Search';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { useContextDATA } from "./store/UserContext";
const Header=()=>{

  const [{user}]=useContextDATA()

return(
    <div className="header">
     <div className="header_left">
       <Avatar className="avatar" alt={user?.displayName}  src={user?.photoURL} />
       <AccessTimeIcon/>   
     </div>
     <div className="header_searchbar">
     <SearchIcon/>
     <input placeholder="search for dev"></input>
     </div>
      
     <div className="header_right">
   <HelpOutlineIcon/>
     </div>
    </div>
)

}
export default Header;