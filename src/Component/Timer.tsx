import { useEffect, useState } from 'react'
import { useTimerEffect } from '../Hook/Timer'
import { Container, Content, Header } from '../Style/Calculator'
import { TimerContainer } from '../Style/Timer'

/**
 * Affiche un chronometre interactif
 */
export default function Timer() {
  // Création de 3 états pour le chronométre :
  // Si le timer est en pause :
  const [paused, setPaused] = useState(true)
  // Les minutes :
  const [minutes, setMinutes] = useState('00')
  // Les secondes :
  const [seconds, setSeconds] = useState('00')

  // Démarrage du timer :
  const play = () => setPaused(false)
  // Arret du timer
  const pause = () => setPaused(true)

  // On utilise l'effet de chronometre
  useTimerEffect(paused, setSeconds, setMinutes)

  return (
    <Container>
      <Header>
        <h1>Timer</h1>
      </Header>
      <Content>
        <p>{paused ? 'Arret' : 'En cours'}</p>
        <TimerContainer>
          <button onClick={play}>Start</button>
          <p>
            {minutes}:{seconds}
          </p>
          <button onClick={pause}>Stop</button>
        </TimerContainer>
      </Content>
    </Container>
  )
}
