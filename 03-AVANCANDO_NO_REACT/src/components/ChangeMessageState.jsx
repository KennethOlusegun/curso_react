export const ChangeMessageState = ({ handleMessage }) => {
  const messages = ['Hey', 'Hello', 'Hey, whats up dude']

	return (
		<div>
			<button onClick={() => handleMessage(messages[0])}>1</button>
			<button onClick={() => handleMessage(messages[1])}>2</button>
			<button onClick={() => handleMessage(messages[2])}>3</button>
		</div>
	)
}
