import React, { useState } from 'react'

/**
 * Ici, en utilisant des event, ainsi que un state,
 * faire en sorte d'augmenter et de dominuer le conteur
 */

export default function AppEvent() {
  // const [counter, setCounter] = useState(0)

  return (
    <div>
      <button>-</button>
      <p>Conteur : {}</p>
      <button>+</button>
    </div>
  )
}
