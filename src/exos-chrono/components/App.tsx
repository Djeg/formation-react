import { useEffect, useState } from 'react'
import { displayTime } from '../../lib/time'

/**
 * Composant permettant d'afficher l'application de chronomètre
 */
export default function App() {
  // Création des états (seconds, minutes, isRunning)
  const [time, setTime] = useState(0)
  const [centiseconds, setCentiseconds] = useState(0)
  const [seconds, setSeconds] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  const [timeMemory, setTimeMemory] = useState<string[]>([])

  // Actions permettant d'interargir avec l'interface
  const toggleChrono = () => setIsRunning(!isRunning)

  const incrementTime = () => setTime(t => t + 1)

  const incrementCentiseconds = (actualTime: number) =>
    setCentiseconds(ms => actualTime % 100)

  const incrementSeconds = (actualCentiseconds: number) =>
    setSeconds(sec => (actualCentiseconds >= 99 ? (sec + 1) % 60 : sec))

  const incrementMinutes = (actualSeconds: number) =>
    setMinutes(min => (actualSeconds === 0 && isRunning ? min + 1 : min))

  const resetTime = () => {
    setTimeMemory([
      ...timeMemory,
      `${displayTime(minutes)}:${displayTime(seconds)}:${displayTime(
        centiseconds,
      )}`,
    ])
    setIsRunning(false)
    setTime(0)
    setCentiseconds(0)
    setSeconds(0)
    setMinutes(0)
  }

  // Effets du chronomètres
  useEffect(() => {
    // Si je ne suis pas « running »
    if (!isRunning) {
      // On annulle l'effet
      return
    }

    // Déclarion d'un timer : Une fonction
    // qui vas toutes les milliseconds
    const timer = setInterval(incrementTime, 10)

    // On retourne un effet d'arret
    return () => {
      clearInterval(timer)
      toggleChrono()
    }
  }, [isRunning])

  // Effet permettant d'afficher les milleseconds
  useEffect(() => {
    incrementCentiseconds(time)
  }, [time])

  // Effet permettant d'afficher les seconds
  useEffect(() => {
    incrementSeconds(centiseconds)
  }, [centiseconds])

  // Effet permettant d'afficher les minutes
  useEffect(() => {
    incrementMinutes(seconds)
  }, [seconds])

  return (
    <>
      <h1>Super Chrono</h1>
      <p>
        {displayTime(minutes)}:{displayTime(seconds)}:
        {displayTime(centiseconds)}
      </p>
      <button onClick={toggleChrono}>{isRunning ? 'Pause' : 'Play'}</button>
      <button onClick={resetTime}>Reset</button>
      <ul>
        {timeMemory.map((mem, index) => (
          <li key={index}>
            Reset n°{index + 1} : {mem}
          </li>
        ))}
      </ul>
    </>
  )
}
