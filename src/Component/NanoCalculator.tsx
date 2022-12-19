import { useStore } from '@nanostores/react'
import {
  calculate,
  nanoCalculatorStore,
  reset,
  updateDisplayScreen,
} from '../Store/NanoCalculator'
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
export default function NanoCalculator() {
  // On récupére l'état contenue dans le store du nano calculator
  const state = useStore(nanoCalculatorStore)

  return (
    <Container>
      <Header>
        <h1>Nano Calculatrice</h1>
      </Header>
      <Content>
        <CalculatorContainer>
          <DisplayScreen>{state.displayScreen}</DisplayScreen>
          <ResultScreen>{state.resultScreen}</ResultScreen>
          <KeyLine>
            <Key onClick={() => updateDisplayScreen('1')}>1</Key>
            <Key onClick={() => updateDisplayScreen('2')}>2</Key>
            <Key onClick={() => updateDisplayScreen('3')}>3</Key>
          </KeyLine>
          <KeyLine>
            <Key onClick={() => updateDisplayScreen('4')}>4</Key>
            <Key onClick={() => updateDisplayScreen('5')}>5</Key>
            <Key onClick={() => updateDisplayScreen('6')}>6</Key>
          </KeyLine>
          <KeyLine>
            <Key onClick={() => updateDisplayScreen('7')}>7</Key>
            <Key onClick={() => updateDisplayScreen('8')}>8</Key>
            <Key onClick={() => updateDisplayScreen('9')}>9</Key>
          </KeyLine>
          <KeyLine>
            <Key onClick={() => updateDisplayScreen(' - ')}>-</Key>
            <Key onClick={() => updateDisplayScreen('0')}>0</Key>
            <Key onClick={() => updateDisplayScreen(' + ')}>+</Key>
          </KeyLine>
          <KeyLine>
            <Key onClick={() => reset()}>C</Key>
            <Key onClick={() => calculate()}>=</Key>
          </KeyLine>
        </CalculatorContainer>
      </Content>
    </Container>
  )
}
