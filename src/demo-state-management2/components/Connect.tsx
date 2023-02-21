import { useContext, useState } from 'react'
import { EmailContext } from '../contexts/EmailContext'

/**
 * Composant de connexion d'un utilisateur
 */
export default function Connect() {
  // Je récupére l'email et la fonction de modification
  // depuis le context EmailContext
  const [email, setEmail] = useContext(EmailContext)

  return (
    <>
      <h1>Connexion</h1>
      <input
        type="email"
        value={email}
        onChange={e => setEmail(e.currentTarget.value)}
      />
    </>
  )
}
