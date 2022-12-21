import { action, map } from 'nanostores'
import {
  firebaseLogout,
  loginToFirebase,
  loginToFirebaseWithAsyncStorage,
} from '../Lib/Firebase'
import { LoginScreenState } from '../Type/LoginScreen.Type'

/**
 * @module LoginScreen.Store
 * @description
 *  Ce module contient l'état et les actions du composant de connexion
 */

/**
 * Store contenant l'état de la connexion
 */
export const LoginScreenStore = map<LoginScreenState>({
  loading: false,
  user: undefined,
  email: '',
  password: '',
})

/**
 * Action permettant de changer l'email
 */
export const setEmail = action(
  LoginScreenStore,
  'setEmail',
  (store, email: string) => {
    store.setKey('email', email)
  },
)

/**
 * Action permettant de changer le mot de passe
 */
export const setPassword = action(
  LoginScreenStore,
  'setPassword',
  (store, password: string) => {
    store.setKey('password', password)
  },
)

/**
 * Action qui envoie le formulaire de connexion à firebase
 */
export const sendLogin = action(LoginScreenStore, 'sendLogin', async store => {
  // on affiche le bouton de chargement
  store.setKey('loading', true)

  // On récupére l'état
  const { email, password } = store.get()

  // On se connécté en utilisant firebase
  const user = await loginToFirebase(email, password)

  // On test si il y a ou non un utilisateur
  if (!user) {
    // On réinitialize l'état
    store.setKey('password', '')
    store.setKey('loading', false)

    return
  }

  // On indique que l'utilisateur est connécté
  store.setKey('loading', false)
  store.setKey('user', user)
})

/**
 * Action lancé au démarrage du login permettant de récupérer
 * un utilisateur si ce dernier est contenu dans le AsyncStorage
 * de votre téléphone
 */
export const initLoginScreen = action(
  LoginScreenStore,
  'initLoginScreen',
  async store => {
    // On fait charger le composant
    store.setKey('loading', true)

    // On se connécte à l'application en utilisant le async storage
    const user = await loginToFirebaseWithAsyncStorage()

    // On test l'éxistence d'un user
    if (!user) {
      // On arréte le chargement
      store.setKey('loading', false)

      return
    }

    // On indique que l'utilisateur est connécté
    store.setKey('loading', false)
    store.setKey('user', user)
  },
)

/**
 * Déconnecte un utilisateur connécté
 */
export const logout = action(LoginScreenStore, 'logout', async store => {
  // on récupére l'utilisateur dans le state
  const { user } = store.get()

  // Si il n'y dèja pas d'utilisateur on ne fait rien
  if (!user) {
    return
  }

  // Sinon on clean l'état et on déconnécte de firebase
  firebaseLogout()

  store.setKey('loading', false)
  store.setKey('password', '')
  store.setKey('user', undefined)
})
