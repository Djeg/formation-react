import * as UI from '../shared/ui'
import { AppContainer } from '../shared/ui'

export default function Subscription() {
  return (
    <UI.AppContainer as="form">
      <h1>Inscription</h1>
      <UI.InputContainer>
        <UI.Input name="username" placeholder="Nom d'utilisateur" />
      </UI.InputContainer>
      <UI.InputContainer>
        <UI.Input name="email" placeholder="Email" />
      </UI.InputContainer>
      <UI.InputContainer>
        <UI.Input name="password" placeholder="Mot de passe" />
      </UI.InputContainer>
      <button type="submit">S'inscire</button>
    </UI.AppContainer>
  )
}
