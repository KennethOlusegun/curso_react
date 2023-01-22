import "./App.css"
import { MyComponent } from "./components/MyComponent"
import { useState } from "react"

export default function App() {
  const n = 15
  const [name] = useState("Kenneth")

  return (
    <div className="App">
      <h1>Css no React</h1>
      {/* css de componente */}
      <MyComponent />
      <p>Este paragráfo é do App.js</p>
      {/* css inline*/}
      <p style={{ color: "blue", padding: "25px", borderTop: "2px solid red" }}>
        Este elemento foi estilizado de forma inline
      </p>
      {/* css inline dinâmico */}
      <h2 style={n < 10 ? { color: "purple" } : { color: "pink" }}>
        Css dinâmico
      </h2>
      <h2
        style={
          name === "Kenneth"
            ? { color: "green", backgroundColor: "#000" }
            : null}
      >
        Css dinâmico
      </h2>
    </div>
  )
}
