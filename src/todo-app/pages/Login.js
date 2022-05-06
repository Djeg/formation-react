import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <>
      <h1>Connexion</h1>
      <form>
        <input type="email" name="email" placeholder="Votre email" />
        <input type="password" name="password" placeholder="Mot de passe" />
        <button type="submit">Connexion</button>
        <Link to="/inscription">
          Vous n'avez pas de compte ? Inscrivez-vous
        </Link>
      </form>
    </>
  )
}
