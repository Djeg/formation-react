import { action, map } from 'nanostores'

/**
 * Création d'un store contenant l'état de notre composant
 * d'inscription.
 *
 * Pour connaître l'état d'un composant il suffit de découper les
 * parties dynamique d'un écran :
 */
export const LoginStore = map({
  email: '',
  password: '',
  user: null,
  emailError: '',
  passwordError: '',
  loading: false,
})

/**
 * Création d'un action permettant de changer l'email du LoginStore.
 *
 * Les actions permettent d'intérargir avec un store. Généralement se
 * sont les actions qui modifie l'état. Ce sont aussi les actions qui
 * valide des données, envoie des données à une api etc ....
 */
export const setEmail = action(LoginStore, 'setEmail', (store, newEmail) => {
  // Ici l'action est très simple. Nous avons juste besoin de changer
  // l'email du store par le nouvelle email
  store.setKey('email', newEmail)
  // On valide le login
  validateLogin()
})

/**
 * Création d'une action permettant de changer le mot de passe du
 * LoginStore
 */
export const setPassword = action(
  LoginStore,
  'setPassword',
  (store, newPassword) => {
    store.setKey('password', newPassword)
    // On valide les données du store
    validateLogin()
  },
)

/**
 * Petite action permettant de valider l'email et le mot de passe
 * contenue dans le sotre
 */
export const validateLogin = action(LoginStore, 'validateLogin', store => {
  // Je récupére l'email et le mot de passe contenue dans mon
  // store
  const { email, password } = store.get()

  if (password.length < 6) {
    store.setKey('passwordError', 'Mot de passe trop court')
  } else {
    store.setKey('passwordError', '')
  }
})
