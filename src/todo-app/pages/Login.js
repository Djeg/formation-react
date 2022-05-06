import { signInWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../firebase'

export default function Login() {
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const changeEmail = ev => setEmail(ev.target.value)
  const changePassword = ev => setPassword(ev.target.value)
  const sendForm = async ev => {
    ev.preventDefault()
    setLoading(true)

    try {
      const credential = await signInWithEmailAndPassword(auth, email, password)

      // On enregistre l'utilisateur dans le localStorage
      // du navigateur. Comme ça, l'utilisateur peut-être récupéré
      // dans toute l'application et conservé même après
      // fermeture du navigateur
      window.localStorage.setItem(
        'user',
        JSON.stringify({
          id: credential.user.uid,
          email: credential.user.email,
        }),
      )

      setLoading(false)
      navigate('/')
    } catch (e) {
      setError(e.message)
      setLoading(false)
    }
  }

  return (
    <>
      <h1>Connexion</h1>
      {error ? <p>{error}</p> : null}
      <form onSubmit={sendForm}>
        <input
          type="email"
          name="email"
          placeholder="Votre email"
          value={email}
          onChange={changeEmail}
        />
        <input
          type="password"
          name="password"
          placeholder="Mot de passe"
          value={password}
          onChange={changePassword}
        />
        {loading ? (
          <p>Chargement ...</p>
        ) : (
          <button type="submit">Connexion</button>
        )}
        <Link to="/inscription">
          Vous n'avez pas de compte ? Inscrivez-vous
        </Link>
      </form>
    </>
  )
}
