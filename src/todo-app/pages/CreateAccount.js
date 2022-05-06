import React from 'react'

export default function CreateAccount() {
  const sendAccount = ev => {
    // Pour annuler le rechargement de page,
    // nous utilisons "preventDefault"
    ev.preventDefault()
  }

  return (
    <>
      <h1>Inscription</h1>
      <form onSubmit={sendAccount}>
        <input type="email" name="email" placeholder="Votre email ..." />
        <input
          type="password"
          name="password"
          placeholder="Votre mot de passe ..."
        />
        <input
          type="password"
          name="password"
          placeholder="Répéter votre mot de passe ..."
        />
        <button type="submit">S'inscrire</button>
      </form>
    </>
  )
}
