import './App.css'
import { MyComponent } from './components/MyComponent'
import { useState } from 'react'
import { Title } from './components/Title'

export default function App() {
  const n = 15
  const [name] = useState('Kenneth')
  const redTitle = true

  return (
    <div className="App">
      <h1>Css no React</h1>
      {/* css de componente */}
      <MyComponent />
      <p>Este paragráfo é do App.js</p>
      {/* css inline*/}
      <p style={{ color: 'blue', padding: '25px', borderTop: '2px solid red' }}>
        Este elemento foi estilizado de forma inline
      </p>
      {/* css inline dinâmico */}
      <h2 style={n < 10 ? { color: 'purple' } : { color: 'pink' }}>
        Css dinâmico
      </h2>
      <h2
        style={
          name === 'Kenneth'
            ? { color: 'green', backgroundColor: '#000' }
            : null
        }
      >
        Css dinâmico
      </h2>
      {/* classe dinâmica */}
      <h2 className={redTitle ? 'red-title' : 'title'}>
        Este título terá classe dinâmica
      </h2>
      {/* Css modules */}
		  <Title />
	  <h2 className='my-title'>Teste</h2>
    </div>
  )
}
