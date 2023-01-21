import { useState } from 'react'

export const ManageData = () => {
  let someData = 10

  const [number, setNumber] = useState(10)
  console.log(number)

  return (
    <div>
      <div>
        <p>Valor: {someData}</p>
        <button onClick={() => {}}>Mudar Variável</button>
      </div>
      <div>
        <p>valor: {number}</p>
        <button onClick={() => setNumber(25)}>Mudar o State</button>
      </div>
    </div>
  )
}
