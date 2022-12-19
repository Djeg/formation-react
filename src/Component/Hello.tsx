import { useParams } from 'react-router-dom'

/**
 * Affiche bonjou à une personne. le nom de la personne est un paramètre
 * dynamique de la route
 */
export default function Hello() {
  // On récupére le nom contenu dans les paramètres de route
  const { name, age } = useParams()

  return (
    <h1>
      Hello {name}, vous avez {age} ans
    </h1>
  )
}
