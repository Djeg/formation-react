import { useState } from 'react'
import {
  Container,
  CounterContainer,
  Header,
  HeaderTitle,
} from '../Style/Counter'

/**
 * Affiche un compteur interactif
 */
export default function Counter() {
  // Création d'une variable et de sa fonction de mise à jour
  // contenant le moontant du compteur. Pour cela on utilise
  // useState
  const [amount, setAmount] = useState(0)

  /**
   * Fontion évenement augmentant le montant du compteur
   */
  const increase = () => setAmount(amount + 1)

  /**
   * Fonction évenement diminuant le montant du compteur
   */
  const decrease = () => setAmount(amount - 1)

  return (
    <>
      <Header>
        <HeaderTitle>Compteur</HeaderTitle>
      </Header>
      <Container>
        <CounterContainer>
          <div>
            <button onClick={decrease}>-</button>
          </div>
          <div className="amount">{amount}</div>
          <div>
            <button onClick={increase}>+</button>
          </div>
        </CounterContainer>
      </Container>
    </>
  )
}
