import { useContext } from 'react'
import { EmailContext } from '../contexts/EmailContext'

/**
 * Page d'accueil de l'application
 */
export default function Home() {
  // Je récupére l'email contenu dans le EmailContext
  const [email] = useContext(EmailContext)

  return (
    <>
      <h1>Accueil</h1>
      <p>Bienvenu {email}</p>
    </>
  )
}
