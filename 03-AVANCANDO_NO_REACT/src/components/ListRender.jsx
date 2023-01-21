import { useState } from "react"

export const ListRender = () => {
  const [list] = useState(['Matheus', 'Kenneth', 'Josias'])

  const [users, setUsers] = useState([
    { id: 1, name: 'Kenneth', age: 34 },
    { id: 72378423, name: 'Matheus', age: 31 },
    { id: 8328823, name: 'Josias', age: 28 },
  ])

	const deleteRandom = () => {
		const randomNumber = Math.floor(Math.random() * 4)

		setUsers((prevUsers) => {
			return prevUsers.filter((user) => randomNumber !== user.id)
		})
  }
  return (
    <div>
      <ul>
        {list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.age}
          </li>
        ))}
      </ul>
	  <button onClick={deleteRandom}>Delete random user</button>
    </div>
  )
}
