import AsyncStorage from '@react-native-async-storage/async-storage'
import { initializeApp } from 'firebase/app'
import {
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { User } from '../Type/LoginScreen.Type'

/**
 * @module Firebase
 * @description
 *  Ce fichier contient la configuration nescessaire
 *  au bon fonctionnement de Firebase. Vous retrouverez
 *  toutes les fonction permettant de créer, mettre à jour,
 *  connécté, inscrire etc ...
 */

/**
 * Configuration de l'application firebase
 */
const firebaseConfig = {
  apiKey: 'AIzaSyAX5PkKNdlQ65V3cXX1ZP9IVLZ_51UzUIM',
  authDomain: 'super-todo-app-744f6.firebaseapp.com',
  projectId: 'super-todo-app-744f6',
  storageBucket: 'super-todo-app-744f6.appspot.com',
  messagingSenderId: '998642663547',
  appId: '1:998642663547:web:7229dc68b0a4b67feae2de',
}

/**
 * Contient l'application firebase
 */
export const firebaseApp = initializeApp(firebaseConfig)

/**
 * Contient le service d'authentification de firebase
 */
export const firebaseAuth = getAuth(firebaseApp)

/**
 * Contient le service de la base de données de firebase (firestore)
 */
export const firestore = getFirestore(firebaseApp)

/**
 * Fonction qui inscrit et connécte un utilisateur sur firebase.
 * Cette fonction s'occupe aussi d'enregistrer l'utilisateur dans
 * le AsyncStorage du téléphone pour pouvoir s'en souvenir plus tard !
 */
export async function createFirebaseAccount(
  username: string,
  email: string,
  password: string,
) {
  // Création d'un utilisateur sur firebase
  const credential = await createUserWithEmailAndPassword(
    firebaseAuth,
    email,
    password,
  )

  // On lui assigne un nom d'utilisateur (displayName sur firebase)
  await updateProfile(credential.user, {
    displayName: username,
  })

  // On le connécte à l'application
  const result = await signInWithEmailAndPassword(firebaseAuth, email, password)

  // On récupére l'utilisateur
  const user = result.user

  // On enregistre l'utilisateur dans le AsyncStorage
  await AsyncStorage.setItem('userEmail', email)
  await AsyncStorage.setItem('userPassword', password)

  // On retourne l'utilisateur
  return {
    id: user.uid,
    username: user.displayName,
    email: user.email,
  }
}

/**
 * Fonction permettant de se connécter à l'application en utilisant
 * firebase
 */
export async function loginToFirebase(email: string, password: string) {
  // On le connécte à l'application
  try {
    const result = await signInWithEmailAndPassword(
      firebaseAuth,
      email,
      password,
    )

    // On vérifie l'utilisateur
    if (!result || !result.user || !result.user.uid) {
      throw new Error()
    }

    // On récupére l'utilisateur
    const user = result.user

    // On enregistre l'utilisateur dans le AsyncStorage
    await AsyncStorage.setItem('userEmail', email)
    await AsyncStorage.setItem('userPassword', password)

    // On retourne l'utilisateur
    return {
      id: user.uid,
      username: user.displayName,
      email: user.email,
    } as User
  } catch (e) {
    // On supprime de l'async storage l'utilisateir
    await AsyncStorage.removeItem('userEmail')
    await AsyncStorage.removeItem('userPassword')

    // on retourne rien
    return null
  }
}

/**
 * Connect un utilisateur en utilisant les données stocké
 * dans le AsyncStorage
 */
export async function loginToFirebaseWithAsyncStorage() {
  // On récupére l'email / password
  const email = await AsyncStorage.getItem('userEmail')
  const password = await AsyncStorage.getItem('userPassword')

  // Si aucun des deux n'éxiste
  if (!email || !password) {
    // On supprime le async storage
    await AsyncStorage.removeItem('userEmail')
    await AsyncStorage.removeItem('userPassword')

    return
  }

  // On le connécte à l'application
  return loginToFirebase(email, password)
}

/**
 * Déconécte un utilisateur de firebase et supprime les données
 * enregistré sur le téléphone
 */
export async function firebaseLogout() {
  // On commence par déconnécter l'utilisateur firebase
  try {
    await signOut(firebaseAuth)
  } catch (e) {}

  // On supprime le local storage
  await AsyncStorage.removeItem('userEmail')
  await AsyncStorage.removeItem('userPassword')
}
