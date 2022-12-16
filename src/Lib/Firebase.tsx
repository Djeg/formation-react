import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

// TODO: Vous pouvez ici importer le service firebase de votre choix
// https://firebase.google.com/docs/web/setup#available-libraries

// La configuration de firebase.
// (il est conseillé de placer cette configuration dans un fichier .env,
// React sait très bien le lire:
// https://vitejs.dev/guide/env-and-mode.html)
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECTID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_FIREBASE_APPID,
}

// Application Firebase
export const firebase = initializeApp(firebaseConfig)
// Initialize le service d'authentification
export const firebaseAuth = getAuth(firebase)
// Initialise le service firestore (la base de données)
export const firebaseDb = getFirestore(firebase)

// Nous pouvons aussi en faire un export par défaut
export default firebase
