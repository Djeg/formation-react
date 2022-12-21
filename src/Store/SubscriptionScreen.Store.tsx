import { action, map } from 'nanostores'
import { createFirebaseAccount } from '../Lib/Firebase'

/**
 * @module SubscriptionScreen.State
 * @description
 *  Contient l'état et les actions pour le composant d'inscription
 */

/**
 * Store contenant l'état du composant d'inscription
 */
export const SubscriptionScreenStore = map({
  loading: false,
  username: '',
  email: '',
  password: '',
})

/**
 * Action permettant de changer le username
 */
export const setUsername = action(
  SubscriptionScreenStore,
  'setUsername',
  (store, username: string) => {
    store.setKey('username', username)
  },
)

/**
 * Action permettant de changer l'email
 */
export const setEmail = action(
  SubscriptionScreenStore,
  'setEmail',
  (store, email: string) => {
    store.setKey('email', email)
  },
)

/**
 * Action permettant de changer le mot de passe
 */
export const setPassword = action(
  SubscriptionScreenStore,
  'setPassword',
  (store, password: string) => {
    store.setKey('password', password)
  },
)

/**
 * Cette action envoie le formulaire à firebase
 */
export const sendSubscription = action(
  SubscriptionScreenStore,
  'sendSubscription',
  async store => {
    // On affiche le bouton de chargement
    store.setKey('loading', true)

    // Récupération de l'état
    const state = store.get()

    // On créé l'utilisateur sur firebase
    await createFirebaseAccount(state.username, state.email, state.password)

    // On réinitialise le store
    store.setKey('loading', false)
    store.setKey('username', '')
    store.setKey('email', '')
    store.setKey('password', '')
  },
)
