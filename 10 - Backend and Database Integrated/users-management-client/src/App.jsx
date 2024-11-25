import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/users')
    .then(res => res.json())
    .then(jsonData => setUsers(jsonData));
  }, []);

  const handleForm = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    console.log(name,email);
    const users = {name, email};

    fetch('http://localhost:5000/users', {
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(users)
    })
    .then(res => res.json())
    .then(jsonData => {
      const newUsers = [...users, jsonData];
      setUsers(newUsers);
      e.target.reset();
    })
  }

  return (
    <>
      <h1>Users Management Client</h1>
      <h2>Users Data - {users.length}</h2>

      <form onSubmit={handleForm} >
        <input type="text" name="name" />
        <br />
        <input type="email" name="email" />
        <br />
        <button className='btn' type="submit">Submit</button>
      </form>

      {
        users.map(user => (
          <p key={user.id}>{user.id} - {user.name} - {user.email}</p>
        ))
      }
    </>
  )
}

export default App
