import React from 'react'

export default function AppEvent() {
  const onPlus = () => {
    console.log('Plus est appuyé')
  }

  const onMinus = () => {
    console.log('Moins est appuyé')
  }

  return (
    <div>
      <button onClick={onMinus}>-</button>
      <p>Conteur : 0</p>
      <button onClick={onPlus}>+</button>
    </div>
  )
}
