import { useEffect, useState } from 'react'
import { displayTime } from '../../lib/time'

/**
 * Composant permettant d'afficher l'application de chronomètre
 */
export default function App() {
  // Création des états (seconds, minutes, isRunning)
  const [time, setTime] = useState(0)
  const [milleseconds, setMilliseconds] = useState(0)
  const [seconds, setSeconds] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [isRunning, setIsRunning] = useState(false)

  // Actions permettant d'interargir avec l'interface
  const toggleChrono = () => setIsRunning(!isRunning)

  // Effets du chronomètres
  useEffect(() => {
    // Si je ne suis pas « running »
    if (!isRunning) {
      // On annulle l'effet
      return
    }

    // Déclarion d'un timer : Une fonction
    // qui vas toutes les milliseconds
    const timer = setInterval(() => {
      setTime(time => time + 1)
    }, 10)

    // On retourne un effet d'arret
    return () => {
      clearInterval(timer)
      setIsRunning(false)
    }
  }, [isRunning])

  // Effet permettant d'afficher les milleseconds
  useEffect(() => {
    setMilliseconds(ms => time % 100)
  }, [time])

  // Effet permettant d'afficher les seconds
  useEffect(() => {
    if (milleseconds >= 99) {
      setSeconds(sec => (sec + 1) % 60)
    }
  }, [milleseconds])

  // Effet permettant d'afficher les minutes
  useEffect(() => {
    if (seconds === 0 && isRunning) {
      setMinutes(min => min + 1)
    }
  }, [seconds])

  return (
    <>
      <h1>Super Chrono</h1>
      <p>
        {displayTime(minutes)}:{displayTime(seconds)}:
        {displayTime(milleseconds)}
      </p>
      <button onClick={toggleChrono}>{isRunning ? 'Pause' : 'Play'}</button>
      <button>Reset</button>
    </>
  )
}
