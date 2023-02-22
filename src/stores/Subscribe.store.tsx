import { action, map } from 'nanostores'
import { ChangeEvent } from 'react'

/**
 * @module Subscribe.store
 *
 * @description
 *  This file contains states and actions of the subscribe
 *  screen.
 */

/**
 * This is what contains the state of the subscribe
 * screen
 */
export type SubscribeState = {
  email: string
  password: string
  isEmailValid: boolean | null
  isPasswordValid: boolean | null
}

/**
 * Store containing the subscribe state
 */
export const SubscribeStore = map<SubscribeState>({
  email: '',
  password: '',
  isPasswordValid: null,
  isEmailValid: null,
})

/**
 * Action allowing to change the store email
 */
export const changeEmail = action(
  // Store on wich we want to execute the action
  SubscribeStore,
  // Name if the action used for debugging
  'change email',
  // Function of the action ! This one is the code
  // thta actually change the email in the store
  (store, e: ChangeEvent<HTMLInputElement>) => {
    // We can change a box content
    store.setKey('email', e.currentTarget.value)
    // On lance la validation de l'email
    validateEmail()
  },
)

/**
 * Action allowing to change the password
 */
export const changePassword = action(
  SubscribeStore,
  'change password',
  (store, e: ChangeEvent<HTMLInputElement>) => {
    // We can change a box content
    store.setKey('password', e.currentTarget.value)
    // We validate the password
    validatePassword()
  },
)

/**
 * Action that validates the email of the store
 */
export const validateEmail = action(SubscribeStore, 'validate email', store => {
  // Retrieve the email in the store
  const { email } = store.get()

  if (email === '') {
    store.setKey('isEmailValid', null)

    return
  }

  if (/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email)) {
    store.setKey('isEmailValid', true)

    return
  }

  store.setKey('isEmailValid', false)
})

/**
 * Action permettant de valider le mot de passe
 */
export const validatePassword = action(
  SubscribeStore,
  'validate password',
  store => {
    // Retrieve the password in the store
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
  },
)
