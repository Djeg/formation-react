import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from '@firebase/auth'
import { firebaseAuth } from './Firebase'

/**
 * Inscrie un nouvelle utilisateur sur l'application
 */
export async function createAccount(email: string, password: string) {
  // On obtient le userCredential de firebase contenant les informations
  // de l'insertion du nouvel utilisateur
  const credential = await createUserWithEmailAndPassword(
    firebaseAuth,
    email,
    password,
  )

  // Maintenant je retourne l'utilisateur firebase
  return credential.user
}

/**
 * Connécte un utilisateur sur l'application
 */
export async function loggin(email: string, password: string) {
  // On obtient le userCredential de firebase contenant les informations
  // de l'utitlisateur
  const credential = await signInWithEmailAndPassword(
    firebaseAuth,
    email,
    password,
  )

  // Maintenant je retourne l'utilisateur
  return credential.user
}
