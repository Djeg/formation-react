import { Dispatch, SetStateAction, useEffect } from 'react'

/**
 * Effet qui permet de gérer un chronométre. On appel ça un hook.
 * Les hooks foivent commencer par "use"
 */
export function useTimerEffect(
  paused: boolean,
  setSeconds: Dispatch<SetStateAction<string>>,
  setMinutes: Dispatch<SetStateAction<string>>,
) {
  useEffect(() => {
    // Je ne fais rien si le composant est en pause
    if (paused) {
      return
    }

    console.log('Je dois démarrer le chrono')

    // pour démarrer un chrono, on utilise la fonciton
    // setInterval. Cette fonction 2 paramètre :
    // - une fonction de déclenchement
    // - Le nombre de milliseconde à attendre pour déclencher la fonction
    const timer = setInterval(() => {
      // On met à secondes, mais on utilise une fonction de mise plutôt
      // qu'une valeur fixe. Ce qui nous permet de toujours récupérer les
      // bonne secondes
      setSeconds(currentSeconds => {
        // On convertit les secondes en entier
        let secondsInNumber = parseInt(currentSeconds)
        // On ajout 1 au seconde
        let newSeconds = secondsInNumber + 1

        // Si les secondes sont supérieur ou ègale à 60
        if (newSeconds >= 60) {
          // On met à jout les minutes en utilisant une fonction
          // de mise à jour
          setMinutes(currentMinutes => {
            // On convertit les minutes actuelle en entier
            let minutesInNumber = parseInt(currentMinutes)
            // On ajoute un au minute
            let newMinutes = minutesInNumber + 1

            // On retourne les minutes sous forme de chaîne de caractère
            // en respectant le 0 initiale
            return newMinutes < 10 ? `0${newMinutes}` : `${newMinutes}`
          })

          // On remet les secondes à 0
          return '00'
        }

        // On met à jour les secondes en respectant le 0 initiale
        return newSeconds < 10 ? `0${newSeconds}` : `${newSeconds}`
      })
    }, 1000)

    // On retourne on fonction de nettoyage !
    return () => {
      console.log('nettoyage')
      // On arréte le timer !
      clearInterval(timer)
      // On remet les secondes et minutes à 0
      setSeconds('00')
      setMinutes('00')
    }
  }, [paused])
}
