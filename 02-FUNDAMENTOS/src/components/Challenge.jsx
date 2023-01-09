export const Challenge = () => {
  let a = 10
  let b = 50

  const handleClick = (e) => {
    const a = 10
    const b = 50
    let c = a + b
    return console.log(c)
  }
  return (
    <div>
      <p>{a}</p>
      <p>{b}</p>
      <button onClick={handleClick}>Soma</button>
    </div>
  )
}
