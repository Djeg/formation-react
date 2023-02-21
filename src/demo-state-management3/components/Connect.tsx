import { useState } from 'react'
import { usePublish } from '../lib/pubsub'

/**
 * Composant de connexion d'un utilisateur
 */
export default function Connect() {
  // Création d'un état pour l'email
  const [email, setEmail] = useState('')

  // Je vais créer ma propre fonction
  usePublish('email', email)

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
