import React, { useState } from 'react'

export default function CreateAccount() {
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [repeatedPassword, setRepeatedPassword] = useState('')

  const changeEmail = ev => setEmail(ev.target.value)
  const changePassword = ev => setPassword(ev.target.value)
  const changeRepeatedPassword = ev => setRepeatedPassword(ev.target.value)

  const sendAccount = ev => {
    // Pour annuler le rechargement de page,
    // nous utilisons "preventDefault"
    ev.preventDefault()
    setLoading(true)

    console.log(email, password, repeatedPassword)
  }

  return (
    <>
      <h1>Inscription</h1>
      <form onSubmit={sendAccount}>
        <input
          type="email"
          name="email"
          placeholder="Votre email ..."
          value={email}
          onChange={changeEmail}
        />
        <input
          type="password"
          name="password"
          placeholder="Votre mot de passe ..."
          value={password}
          onChange={changePassword}
        />
        <input
          type="password"
          name="repeatedPassword"
          placeholder="Répéter votre mot de passe ..."
          value={repeatedPassword}
          onChange={changeRepeatedPassword}
        />
        {loading ? (
          <p>Chargement ...</p>
        ) : (
          <button type="submit">S'inscrire</button>
        )}
      </form>
    </>
  )
}
