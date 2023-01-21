// import { useState } from "react";
import './App.css'

import city from './assets/img/city.jpg'
import { ManageData } from './components/ManageData'
import { ListRender } from './components/ListRender'
import { ConditionalRender } from './components/ConditionalRender'
import { ShowUserName } from './components/ShowUserName'
import { CarDetails } from './components/CarDetails'
import { Fragment } from './components/Fragment'
import { Container } from './components/Container'
import { ExecuteFunction } from './components/ExecuteFunction'

export default function App() {
  const cars = [
    { id: 1, brand: 'Ferrari', color: 'Amarelo', km: 0 },
    { id: 2, brand: 'KIA', color: 'Branco', km: 200000 },
    { id: 3, brand: 'Renault', color: 'Azul', km: 32000 },
  ]

  function showMessage() {
    console.log('Evento do componente pai')
  }

  return (
    <div className="App">
      <h1>Seção 3</h1>
      <div>
        <img src="/img1.jpg" alt="Paisagem" />
        <img src={city} alt="Cidade" />
      </div>
      <ManageData />
      <ListRender />
      <ConditionalRender />
      {/* props */}
      <ShowUserName name="Matheus" />
      {/* destructuring */}
      <CarDetails brand="Ford" color="Azul" km={10000} />
      {/* reaproveitamento */}
      <CarDetails brand="VW" color="Vermelho" km={535} />
      <CarDetails brand="Fiat" color="Branco" km={0} />
      {/* loop com array de obj */}
      {cars.map((car) => (
        <CarDetails
          key={car.id}
          brand={car.brand}
          color={car.color}
          km={car.km}
        />
      ))}
      {/* fragments */}
      <Fragment />
      {/* children */}
      <Container myValue="testing">
        <p>É este o conteúdo</p>
      </Container>
      <Container myValue="testing 2">
        <h5>Testando o container</h5>
      </Container>
      {/* executar função */}
      <ExecuteFunction myFunction={showMessage} />
    </div>
  )
}
