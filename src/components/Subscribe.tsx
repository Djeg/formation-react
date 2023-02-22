import { useStore } from '@nanostores/react'
import {
  changeEmail,
  changePassword,
  SubscribeStore,
} from '../stores/Subscribe.store'

/**
 * Screen displaying the subscribe form
 */
export default function Subscribe() {
  // Retrieve the state of the subscribe store
  const { email, password, isPasswordValid, isEmailValid } =
    useStore(SubscribeStore)

  return (
    <>
      <h1>Inscription</h1>
      <input type="email" value={email} onChange={changeEmail} />
      {isEmailValid === null ? null : isEmailValid ? (
        <p>Valide</p>
      ) : (
        <p>Non Valide</p>
      )}
      <input type="password" value={password} onChange={changePassword} />
      {isPasswordValid === null ? null : isPasswordValid ? (
        <p>Valide</p>
      ) : (
        <p>Non Valide</p>
      )}
      <button>S'inscrire</button>
    </>
  )
}
