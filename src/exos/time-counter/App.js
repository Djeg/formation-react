import React, { useEffect, useState } from 'react'

export default function App() {
  const [started, setStarted] = useState(false)
  const [seconds, setSeconds] = useState(0)
  const [minutes, setMinutes] = useState(0)

  const start = () => setStarted(true)
  const stop = () => setStarted(false)

  useEffect(() => {
    if (!started) {
      return
    }

    let elapsedSeconds = 0
    let timer = window.setInterval(() => {
      elapsedSeconds += 1
      let newMinutes = Math.floor(elapsedSeconds / 60)
      let newSeconds = elapsedSeconds - newMinutes * 60

      setMinutes(newMinutes)
      setSeconds(newSeconds)
    }, 1000)

    return () => {
      window.clearInterval(timer)
      setSeconds(0)
      setMinutes(0)
    }
  }, [started])

  return (
    <>
      <button onClick={start}>Demarrer</button>
      <p>
        Temps écoulé : {minutes} minute(s) et {seconds} seconde(s)
      </p>
      <button onClick={stop}>Arreter</button>
    </>
  )
}
