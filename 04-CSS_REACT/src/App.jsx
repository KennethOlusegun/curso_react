import './App.css'
import { MyComponent } from './components/MyComponent'

export default function App() {
  return (
    <div className="App">
      <h1>Css no React</h1>
      {/* css de componente */}
      <MyComponent />
      <p>Este paragráfo é do App.js</p>
      {/* css inline*/}
      <p style={{ color: 'blue', padding: "25px", borderTop: "2px solid red" }}>
        Este elemento foi estilizado de forma inline
      </p>
    </div>
  )
}
