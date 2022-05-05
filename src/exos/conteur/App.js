/**
 * Créer un application avec un conteur.
 *
 * L'application affiche un counteur (0 au départ),
 * 3 boutons (un bouton plus, un bouton moins, un bouton
 * réinitialiser)
 * Ainsi qu'un input type="number" avec la valeur 1
 *
 * -> Lors du clique sur plus, augmenter le compteur de
 *    la valeur contenu dans l'input number
 * -> Lors du clique sur moins, diminuer le compteur de de
 *    la valeur contenu dans l'input number
 * -> Lors du clique sur réinitialiser, remettre le conteur à 0
 *
 * !ATTENTION! Le conteur ne doit pas descendre en dessous de 0 !
 */
import React, { useState } from 'react'

export default function App() {
  const [montant, setMontant] = useState(0)
  const [raison, setRaison] = useState(1)

  const changeRaison = ev => {
    let newRaison = parseInt(ev.target.value)

    if (newRaison === NaN) {
      return setRaison(1)
    }

    if (newRaison <= 0) {
      return setRaison(1)
    }

    setRaison(newRaison)
  }

  const plus = () => {
    setMontant(raison + montant)
  }

  const moins = () => {
    let newMontant = montant - raison

    if (newMontant < 0) {
      return setMontant(0)
    }

    setMontant(newMontant)
  }

  const init = () => {
    setMontant(0)
  }

  return (
    <>
      <h1>Conteur :</h1>
      <input type="number" value={raison} onChange={changeRaison} />
      <button onClick={plus}>Plus</button>
      <p>Montant : {montant}</p>
      <button onClick={moins}>Moins</button>
      <button onClick={init}>Reinitialiser</button>
    </>
  )
}
