import styled from 'styled-components'

export const Container = styled.div`
	background-color: #000;
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
    
`

export const Title = styled.h1`
	font-size: 75px;
	color: #f00
`

function App() {
  return (
    <Container className="App">
		<Title>Hello World</Title>
	</Container>
  );
}

export default App;
