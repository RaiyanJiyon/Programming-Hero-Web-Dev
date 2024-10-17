import { useEffect, useState } from "react"
import './Users.css'
import User from "./User";

export default function Users() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data));
    } ,[])

    return (
        <div className="box">
            <h3>Friends: {users.length}</h3>

            {
                users.map((user) => <User user={user}></User>)
            }
        </div>
    )
}