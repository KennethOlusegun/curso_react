import React from 'react'

export const CarDetail = ({brands, km, color}) => {
  return (
    <>
      <h2>CarDetail</h2>
      <ul>
        <li>Brands {brands}</li>
        <li>KM {km}</li>
        <li>Color {color}</li>
      </ul>
    </>
  )
}
