import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from 'firebase/auth'
import { action, map } from 'nanostores'
import { auth } from '../Lib/Firebase'

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
  const { password } = store.get()

  if (password.length < 6) {
    store.setKey('passwordError', 'Mot de passe trop court')
  } else {
    store.setKey('passwordError', '')
  }
})

/**
 * Inscrit un utilisateur sur firebase
 */
export const registerOnFirebase = action(
  LoginStore,
  'registerOnFirebase',
  async store => {
    // On passe l'état loading à true
    store.setKey('loading', true)

    // On récupére l'email et le mot de passe stocké dans
    // notre store
    const { email, password } = store.get()

    // On s'asure de bien avoir un email et un mot de passe
    if (!email || !password) {
      // Je remet l'état loading à faux
      store.setKey('loading', false)
      // J'arréte l'action
      return
    }

    // Je créer un utilisateur sur firebase en utilisant
    // la fonction createUserWithEmailAndPassword
    try {
      const result = await createUserWithEmailAndPassword(auth, email, password)

      // J'enregistre l'utilisateur dans le store firebase
      store.setKey('user', {
        id: result.user.uid,
        email: result.user.email,
      })
      // Je remet l'état loading à faux
      store.setKey('loading', false)

      console.warn(store.get())
    } catch (e) {
      // Je remet l'état loading à faux
      store.setKey('loading', false)
      // J'arréte l'action
      return
    }
  },
)

/**
 * Action permettant de connécter un utilisateur à firebase
 */
export const loginOnFirebase = action(
  LoginStore,
  'loginOnFirebase',
  async store => {
    // On passe l'état loading à true
    store.setKey('loading', true)

    // On récupére l'email et le mot de passe stocké dans
    // notre store
    const { email, password } = store.get()

    // On s'asure de bien avoir un email et un mot de passe
    if (!email || !password) {
      // Je remet l'état loading à faux
      store.setKey('loading', false)
      // J'arréte l'action
      return
    }

    // Je créer un utilisateur sur firebase en utilisant
    // la fonction createUserWithEmailAndPassword
    try {
      const result = await signInWithEmailAndPassword(auth, email, password)

      // J'enregistre l'utilisateur dans le store firebase
      store.setKey('user', {
        id: result.user.uid,
        email: result.user.email,
      })
      // Je remet l'état loading à faux
      store.setKey('loading', false)
    } catch (e) {
      // Je remet l'état loading à faux
      store.setKey('loading', false)
      // J'arréte l'action
      return
    }
  },
)

/**
 * Cette action récupére l'utilisateur connécté à firebase. Elle est
 * lancé lorsque le composant de login s'affiche pour la toute première
 * fois.
 *
 * En effet, firebase stock dans le navigateur notre utilisateur connécté
 * à l'application. Nous devons le récupérer lorsque le composant de login
 * s'affiche afin de mettre à jour notre état et de connécté automatiquement
 * notre utilisateur.
 */
export const checkFirebaseLogin = action(
  LoginStore,
  'checkFirebaseLogin',
  store => {
    store.setKey('loading', true)
    // On récupére l'utilisateur connécté à l'application si il y en a
    // un
    onAuthStateChanged(auth, user => {
      store.setKey('loading', false)
      // Si il n'y a pas d'utilisateur firebase
      if (!user) {
        // On ne fais rien et on arréte la fonction
        return null
      }

      // On enregistre l'utilisateur dans l'état
      store.setKey('user', {
        id: user.uid,
        email: user.email,
      })
    })
  },
)
