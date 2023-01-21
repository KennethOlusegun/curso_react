export const UserDetails = ({ name, age, occupation }) => {
	return <div>
		<h2>{name}</h2>
		<p>Age: {age}</p>
		<p>Occupation: {occupation}</p>
		{age >= 18 ? (
			<p>You can get your driver's license</p>
		) : (
			<p>Minor</p>
		)}
  </div>
}
