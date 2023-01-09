export const TemplateExpressions = () => {
	const name = "Kenneth"
	const data = {
		age: 24,
		job: "Programador",
	}

	return (
		<div>
			<h1>Olá {name}, tudo bem?</h1>
			<p>Você atua como: {data.job}</p>
			<p>{4 + 4}</p>
			<p>{console.log("JSX React")}</p>
		</div>
	)
}