import React, { useState , useContext} from 'react'
import User from './User'
import {UserContext} from './UserContext'

function UsersList() {

    const [users,setUsers] = useContext(UserContext);

    return (
        <div>
            <table style={{border:'1px solid black'}}>
                <tr style={{backgroundColor:'#3c3d3c',color:'white'}}>
                    <th>Name</th>
                    <th>Age</th>
                    <th>City</th>
                </tr>
            {
                users.map((user,index) =>(
                    <User name={user.name}  age={user.age} city={user.city} key={index}/>

                ))
            }
            </table>
        </div>
    )
}

export default UsersList
