// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBQzf5u0_OsfKhXcMLLBQFrDATlLOdtPBc',
  authDomain: 'todo-app-950dc.firebaseapp.com',
  projectId: 'todo-app-950dc',
  storageBucket: 'todo-app-950dc.appspot.com',
  messagingSenderId: '545933194404',
  appId: '1:545933194404:web:1b75b760b02a8aafd3a231',
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)

// Exporte le service d'authentification
export const auth = getAuth(app)
