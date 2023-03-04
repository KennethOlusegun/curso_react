import './App.css'
import MyForms from './components/MyForms'

export default function App() {
  return (
    <div className="App">
      <h2>Forms</h2>
		  <MyForms user={{
			  name: 'Josias',
			  email: 'josias@teste.com',
			  bio: 'sou um advogado',
			  role: 'admin'
		  }} />
    </div>
  )
}
