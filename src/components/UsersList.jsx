import React, { useState , useContext} from 'react'
import User from './User'
import {UserContext} from './UserContext'

function UsersList() {

    const [users,setUsers] = useContext(UserContext);

    return (
        <div>
            <table style={{border:'1px solid black'}}>
            {
                users.map(user =>(
                    <User name={user.name}  age={user.age} city={user.city}/>

                ))
            }
            </table>
        </div>
    )
}

export default UsersList
