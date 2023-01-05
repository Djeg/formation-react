// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDpoX9GrV6RzQTVrLRoSksoDJVIQumUoT4',
  authDomain: 'cookthat-8cd9b.firebaseapp.com',
  databaseURL:
    'https://cookthat-8cd9b-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'cookthat-8cd9b',
  storageBucket: 'cookthat-8cd9b.appspot.com',
  messagingSenderId: '263852106888',
  appId: '1:263852106888:web:7f556f3cea2895cf3e6b3d',
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)

// Exporte le service d'authentification
export const auth = getAuth(app)
