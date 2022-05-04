import React, { useState } from 'react'

/**
 * Ici, en utilisant des event, ainsi que un state,
 * faire en sorte d'augmenter et de dominuer le conteur
 */

export default function AppEvent() {
  const [counter, setCounter] = useState(0)

  const onPlus = () => {
    setCounter(counter + 1)
  }

  const onMinus = () => {
    setCounter(counter - 1)
  }

  return (
    <div>
      <button onClick={onMinus}>-</button>
      <p>Conteur : {counter}</p>
      <button onClick={onPlus}>+</button>
    </div>
  )
}
