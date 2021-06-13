import React, { useState } from 'react'
import User from './User'

function UsersList() {
const [users,setUsers] = useState([
    {
        name:'ali raza',
        age:34,
        city:'sialkot'
    },
    {
        name:'hamza shabbir',
        age:22,
        city:'zafarwal'
    },
    {
        name:'ayesha',
        age:30,
        city:'lahore'
    },
    {
        name:'fatima',
        age:20,
        city:'karachi'
    }
])

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
