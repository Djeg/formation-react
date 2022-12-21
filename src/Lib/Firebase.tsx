import AsyncStorage from '@react-native-async-storage/async-storage'
import { initializeApp } from 'firebase/app'
import {
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile,
  signInWithEmailAndPassword,
} from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

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
  await AsyncStorage.setItem('user', user.uid)

  // On retourne l'utilisateur
  return {
    id: user.uid,
    username: user.displayName,
    email: user.email,
  }
}
