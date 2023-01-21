// import { useState } from "react";
import './App.css'
import { UserDetails } from './components/UserDetails'

export default function App() {
  const users = [
    { id: 1, name: 'Kenneth', age: 25, occupation: 'Developer' },
    { id: 2, name: 'Obá', age: 33, occupation: 'Uber driver' },
    { id: 3, name: 'Paulo', age: 64, occupation: 'Public agent' },
    { id: 4, name: 'Ana', age: 16, occupation: 'Student' },
  ]
  return (
    <div className="App">
      <h1>Seção 3</h1>
		  {users.map((user) => (
		
			  <UserDetails
				key={user.id}
				name={user.name}
				age={user.age}
				occupation={user.occupation}
			  />
	  ))}
    </div>
  )
}
