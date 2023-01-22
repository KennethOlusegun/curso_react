import './App.css'
import { MyComponent } from './components/MyComponent'

export default function App() {
  return (
    <div className="App">
      <h1>Css no React</h1>
      {/* css de componente */}
      <MyComponent />
      <p>Este paragráfo é do App.js</p>
    </div>
  )
}
