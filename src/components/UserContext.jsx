import React,{useState,createContext} from 'react'

export const UserContext = createContext();



export const UserProvider = (props) => {

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
        <UserContext.Provider value={[users,setUsers]}>
            {props.children}
        </UserContext.Provider>
    )
}

