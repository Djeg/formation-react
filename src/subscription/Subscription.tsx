import * as UI from '../shared/ui'
import { useState, useEffect } from 'react'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth } from '../util/firebase'
import { useNavigate } from 'react-router-dom'

export default function Subscription() {
  const [username, setUsername] = useState<string>('')
  const [usernameError, setUsernameError] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  // Importe la navigation
  const navigate = useNavigate()

  useEffect(() => {
    if (!username) {
      setUsernameError("Vous devez spécifier un nom d'utilisateur")

      return
    }

    if (username.length < 3) {
      setUsernameError('Votre username doit être de 3 caractère minimum')

      return
    }

    if (username.length > 25) {
      setUsernameError('Votre username est trop long :/')

      return
    }

    setUsernameError('')
  }, [username])

  const onChange =
    (setter: (v: string) => void) =>
    (e: React.SyntheticEvent<HTMLInputElement>) =>
      setter(e.currentTarget.value)

  const onSubmit = async (e: React.SyntheticEvent<HTMLElement>) => {
    // Enléve le comportement par défaut du navigateur,
    // c'est à dire évite le rafraichissement de la page
    e.preventDefault()

    // Création d'un « compte » firebase
    const credential = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    )

    // Ajout d'un nom d'utilisateur sur firebase
    await updateProfile(credential.user, {
      displayName: username,
    })

    localStorage.setItem('user', JSON.stringify(credential.user))

    // Redirection vers la page d'accueil :
    navigate('/')
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
      <p>{usernameError}</p>
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
