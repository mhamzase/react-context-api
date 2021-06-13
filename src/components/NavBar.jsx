import React, {useState,useContext} from "react";
import {UserContext} from './UserContext'

function NavBar() {

  const [users,setUsers] = useContext(UserContext)

  return (
    <div class="topnav">
      <a class="active" href="">Total Users: </a>
      <a href="">{users.length}</a>
    </div>
  );
}

export default NavBar;
