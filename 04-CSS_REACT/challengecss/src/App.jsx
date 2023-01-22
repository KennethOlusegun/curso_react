import { CarDetails } from './components/CarDetails'

export default function App() {
  return (
    <div className="App">
      <h1>Desafio Css</h1>
		  <CarDetails
			  brand="Volkswagen"
			  km={0}
			  color="red" />
    </div>
  )
}
