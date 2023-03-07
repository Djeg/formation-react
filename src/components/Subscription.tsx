import { useStore } from '@nanostores/react'
import { Navigate } from 'react-router-dom'
import {
  changeEmail,
  changePassword,
  googleConnect,
  subscribe,
  UserStore,
} from '../stores/UserStore'

/**
 * Composant affichant l'écran d'inscription
 */
export default function Subscription() {
  // Je récupére l'état
  const {
    email,
    password,
    isEmailValid,
    isPasswordValid,
    isSending,
    error,
    user,
  } = useStore(UserStore)

  // Je redirige sur la page d'accueil si j'ai un utilisateur
  if (user) {
    return <Navigate to="/"></Navigate>
  }

  return (
    <>
      <div>
        <input type="email" value={email} onChange={changeEmail} />
        {isEmailValid === false ? <p>Email invalide</p> : null}
      </div>
      <div>
        <input type="password" value={password} onChange={changePassword} />
        {isPasswordValid === false ? <p>Password invalide</p> : null}
      </div>
      {error ? <p>{error}</p> : null}
      {isSending ? (
        <p>Chargement</p>
      ) : (
        <>
          <button onClick={subscribe}>Inscription</button>
          <button onClick={googleConnect}>
            <i className="fa-brands fa-google"></i>
          </button>
        </>
      )}
    </>
  )
}
