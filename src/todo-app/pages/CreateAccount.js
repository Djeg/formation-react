import React from 'react'

export default function CreateAccount() {
  return (
    <>
      <h1>Inscription</h1>
      <form>
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
