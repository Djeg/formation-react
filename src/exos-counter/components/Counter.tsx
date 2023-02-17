import { ReactNode, useState } from 'react'
import { Button, Label, Line } from '../styles/Counter.style'

type CounterProps = {
  children: ReactNode
}

/**
 * Fonction composant permetant d'afficher un conteur interactif
 */
export default function Counter({ children }: CounterProps) {
  // Déclaration de l'état
  const [counter, setCounter] = useState(0)
  const [increment, setIncrement] = useState(1)

  // Action permettant de diminuer le conteur
  function minus() {
    setCounter(Math.max(0, counter - increment))
  }

  // Action permettant d'augmenter le conteur
  function plus() {
    setCounter(counter + increment)
  }

  // Action permettant d'augmenter l'incrément
  function incrementPlus() {
    setIncrement(increment + 1)
  }

  // Action permettant de diminuer l'incrément
  function incrementMinus() {
    setIncrement(Math.max(1, increment - 1))
  }

  // Action permettant de reset le compteur et l'incrément
  function reset() {
    setCounter(0)
    setIncrement(1)
  }

  return (
    <>
      <h1>{children}</h1>
      <Line>
        <Button onClick={minus}>-</Button>
        <Label>{counter}</Label>
        <Button onClick={plus}>+</Button>
      </Line>
      <Button onClick={reset}>Reset</Button>
      <Line>
        <Button onClick={incrementMinus}>-</Button>
        <Label>{increment}</Label>
        <Button onClick={incrementPlus}>+</Button>
      </Line>
    </>
  )
}
