import { useState } from 'react'
import {
  CalculatorContainer,
  Container,
  Content,
  DisplayScreen,
  Header,
  Key,
  KeyLine,
  ResultScreen,
} from '../Style/Calculator'

/**
 * Affiche une calcultatrice interactive avec React
 */
export default function Calculator() {
  // Création d'un état pour l'affichage
  const [operation, setOperation] = useState('')
  // Création d'un état pour le résultat
  const [result, setResult] = useState(0)

  /**
   * Met à jour l'opération
   */
  const updateOperation = (member: string) => () =>
    setOperation(`${operation}${member}`)

  /**
   * Vide l'operation
   */
  const emptyOperation = () => setOperation('')

  /**
   * Calcule et affiche le resultat
   */
  const calculate = () => {
    setResult(eval(operation))
    setOperation('')
  }

  return (
    <Container>
      <Header>
        <h1>Calculatrice</h1>
      </Header>
      <Content>
        <CalculatorContainer>
          <DisplayScreen>{operation}</DisplayScreen>
          <ResultScreen>{result}</ResultScreen>
          <KeyLine>
            <Key onClick={updateOperation('1')}>1</Key>
            <Key onClick={updateOperation('2')}>2</Key>
            <Key onClick={updateOperation('3')}>3</Key>
          </KeyLine>
          <KeyLine>
            <Key onClick={updateOperation('4')}>4</Key>
            <Key onClick={updateOperation('5')}>5</Key>
            <Key onClick={updateOperation('6')}>6</Key>
          </KeyLine>
          <KeyLine>
            <Key onClick={updateOperation('7')}>7</Key>
            <Key onClick={updateOperation('8')}>8</Key>
            <Key onClick={updateOperation('9')}>9</Key>
          </KeyLine>
          <KeyLine>
            <Key onClick={updateOperation(' - ')}>-</Key>
            <Key onClick={updateOperation('0')}>0</Key>
            <Key onClick={updateOperation(' + ')}>+</Key>
          </KeyLine>
          <KeyLine>
            <Key onClick={emptyOperation}>C</Key>
            <Key onClick={calculate}>=</Key>
          </KeyLine>
        </CalculatorContainer>
      </Content>
    </Container>
  )
}
