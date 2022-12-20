import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
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
