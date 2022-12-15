import { StrictMode, useState } from 'react'

export default function App() {
  /**
   * Création d'un état `amount` en utilisant useState.
   *
   * Cette fonction accepte la valeur par défaut notre montant (
   * ici 0) et retourne le montant (amount) et une fonction permettant
   * de changer ce montant (setAmount)
   */
  const [amount, setAmount] = useState(0)

  /**
   * Fonction event qui se déclenche lors du clique sur le bouton
   * plus
   */
  function onPlus() {
    // Nous modifions le montant en rajoutant + 1. Lors de l'appel
    // de cette fonction notre JSX sera mis à jour AUTOMATIQUEMENT !
    setAmount(amount + 1)
  }

  /**
   * Fonction event qui se déclenche lors du clique sur le bouton
   * moins
   */
  function onMinus() {
    // Nous modifions le montant en lui enlevant 1. Lors de l'appel
    // de cette fonction notre JSX sera mis à jour AUTOMATIQUEMENT !
    setAmount(amount - 1)
  }

  return (
    <StrictMode>
      <h1>Compteur</h1>
      {/* On affiche le montant */}
      <p>{amount}</p>
      {/* Bouton permettant d'augmenter le compteur */}
      <button onClick={onPlus}>+</button>
      {/* Bouton permettant de diminuer le compteur */}
      <button onClick={onMinus}>-</button>
    </StrictMode>
  )
}
