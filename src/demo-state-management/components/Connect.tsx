import { useState } from 'react'

/**
 * Ce que reçoit le composant le connect
 */
export type ConnectProps = {
  email: string
  setEmail: (email: string) => void
}

/**
 * Composant de connexion d'un utilisateur
 */
export default function Connect({ email, setEmail }: ConnectProps) {
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
