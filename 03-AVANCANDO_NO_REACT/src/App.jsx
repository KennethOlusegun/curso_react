import './App.css'
import Image from './assets/img/city.jpg'
import { ManageData } from './components/ManageData'
import { ListRender } from './components/ListRender'
import { ConditionalRender } from './components/ConditionalRender'
import { ShowUserName } from './components/ShowUserName'
import { useState } from 'react'
import { CarDetail } from './components/CarDetail'

function App() {
  const [username] = useState('Maria')
  return (
    <div className="App">
      <h1>03-AVANÇANDO NO REACT</h1>
      {/* Imagem em public */}
      <div>
        <img src="/img1.jpg" alt="paisagem" />
      </div>
      <div>
        <img src={Image} alt="cidade" />
      </div>
      <ManageData />
      <ListRender />
      <ConditionalRender />
      {/* props */}
      <ShowUserName name={username} />
      {/* destructuring */}
		  <CarDetail brands="VW" km={50000} color="red"/>
    </div>
  )
}

export default App
