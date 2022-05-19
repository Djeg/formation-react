import * as UI from '../shared/ui'
import { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../util/firebase'

export default function Subscription() {
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [email, setEmail] = useState<string>('')

  const onChange =
    (setter: (v: string) => void) =>
    (e: React.SyntheticEvent<HTMLInputElement>) =>
      setter(e.currentTarget.value)

  const onSubmit = async (e: React.SyntheticEvent<HTMLElement>) => {
    // Enléve le comportement par défaut du navigateur,
    // c'est à dire évite le rafraichissement de la page
    e.preventDefault()

    const credential = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    )

    console.log(credential)
  }

  return (
    <UI.AppContainer as="form" onSubmit={onSubmit}>
      <h1>Inscription</h1>
      <UI.InputContainer>
        <UI.Input
          name="username"
          placeholder="Nom d'utilisateur"
          onChange={onChange(setUsername)}
          value={username}
        />
      </UI.InputContainer>
      <UI.InputContainer>
        <UI.Input
          name="email"
          placeholder="Email"
          onChange={onChange(setEmail)}
          value={email}
        />
      </UI.InputContainer>
      <UI.InputContainer>
        <UI.Input
          name="password"
          placeholder="Mot de passe"
          onChange={onChange(setPassword)}
          value={password}
        />
      </UI.InputContainer>
      <button type="submit">S'inscire</button>
    </UI.AppContainer>
  )
}