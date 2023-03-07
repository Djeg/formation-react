import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth'
import { action, map } from 'nanostores'
import { ChangeEvent } from 'react'
import { auth } from '../lib/Firebase'

/**
 * Définie ce que contient un utilisateur
 */
export type User = {
  uid: string
  email: string | null
}

/**
 * Définie ce que contient l'état du user store
 */
export type UserState = {
  email: string
  isEmailValid: boolean | null
  password: string
  isPasswordValid: boolean | null
  isSending: boolean
  error?: string
  user?: User
}

/**
 * Store contenant l'état
 */
export const UserStore = map<UserState>({
  email: '',
  isEmailValid: null,
  password: '',
  isPasswordValid: null,
  isSending: false,
})

/**
 * Action permettant de changer l'email
 */
export const changeEmail = action(
  UserStore,
  'changeEmail',
  (store, e: ChangeEvent<HTMLInputElement>) => {
    store.setKey('email', e.currentTarget.value)
    validateEmail()
  },
)

/**
 * Action permettant de changer le mot de passe
 */
export const changePassword = action(
  UserStore,
  'changePassword',
  (store, e: ChangeEvent<HTMLInputElement>) => {
    store.setKey('password', e.currentTarget.value)
    validatePassword()
  },
)

/**
 * Valide l'email entrer par l'utilisateur
 */
export const validateEmail = action(UserStore, 'validateEmail', store => {
  const { email } = store.get()

  if (email === '') {
    store.setKey('isEmailValid', null)

    return
  }

  if (!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email)) {
    store.setKey('isEmailValid', false)

    return
  }

  store.setKey('isEmailValid', true)
})

/**
 * Valide le mot de passe entré par l'utilisateur
 */
export const validatePassword = action(UserStore, 'validatePassword', store => {
  const { password } = store.get()

  if (password === '') {
    store.setKey('isPasswordValid', null)

    return
  }

  if (password.length < 6) {
    store.setKey('isPasswordValid', false)

    return
  }

  store.setKey('isPasswordValid', true)
})

/**
 * Action permettant à l'utilisateur de s'inscrire
 */
export const subscribe = action(UserStore, 'subscribe', async store => {
  const { email, password, isEmailValid, isPasswordValid, isSending } =
    store.get()

  if (!isEmailValid || !isPasswordValid || isSending) {
    return
  }

  store.setKey('isSending', true)

  try {
    const result = await createUserWithEmailAndPassword(auth, email, password)

    store.setKey('isSending', false)
    store.setKey('user', result.user)
  } catch (e: any) {
    if (e.code === 'auth/email-already-in-use') {
      store.setKey('error', 'Email dèja enregistré')
    } else {
      store.setKey('error', 'Une erreur est survenue :/. Réessayer plus tard')
    }

    store.setKey('isSending', false)
  }
})

/**
 * COnnetion par google
 */
export const googleConnect = action(
  UserStore,
  'google connect',
  async store => {
    store.setKey('isSending', true)

    const googleProvider = new GoogleAuthProvider()

    try {
      const result = await signInWithPopup(auth, googleProvider)

      store.setKey('user', result.user)
      store.setKey('isSending', false)
    } catch (e: any) {
      store.setKey('isSending', false)
      store.setKey('error', e.message)
    }
  },
)
